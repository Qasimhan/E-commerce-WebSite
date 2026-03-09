// src/pages/AdminAddProduct.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { FaCloudUploadAlt, FaPlus, FaTimes, FaSpinner } from 'react-icons/fa';
import axios from 'axios';

function AdminAddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useAdmin();
  
  // Cloudinary config from .env
  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    category: 'womens-fashion',
    image: '',
    sizes: [],
    isNew: true,
    isTrending: false,
    discount: ''
  });

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const categoryOptions = [
    { value: 'womens-fashion', label: "Women's Fashion" },
    { value: 'mens-collection', label: "Men's Collection" },
    { value: 'kids-wear', label: 'Kids Wear' },
    { value: 'accessories', label: 'Accessories' }
  ];

  // Check if env variables are loaded
  React.useEffect(() => {
    console.log("Cloud Name:", CLOUD_NAME);
    console.log("Upload Preset:", UPLOAD_PRESET);
    
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      console.error('Cloudinary configuration missing! Check your .env file');
      alert('Cloudinary configuration error! Please check console.');
    }
  }, [CLOUD_NAME, UPLOAD_PRESET]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Auto calculate discount
    if (name === 'price' || name === 'originalPrice') {
      const original = parseFloat(formData.originalPrice) || 0;
      const current = parseFloat(formData.price) || 0;
      if (original > 0 && current > 0 && original > current) {
        const discount = Math.round(((original - current) / original) * 100);
        setFormData(prev => ({ ...prev, discount }));
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    // Preview
    setImagePreview(URL.createObjectURL(file));
    setImageFile(file);
    setUploadProgress(0);
  };

  const uploadToCloudinary = async () => {
    if (!imageFile) return null;
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      alert('Cloudinary configuration error! Please check .env file');
      return null;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('cloud_name', CLOUD_NAME);
      formData.append('folder', 'khan_clothing/products');

      const response = await axios.post(CLOUDINARY_URL, formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Upload successful:', response.data);
      return response.data.secure_url;
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message);
      
      if (error.response?.data?.error?.message) {
        alert(`Upload failed: ${error.response.data.error.message}`);
      } else {
        alert('Failed to upload image. Please check Cloudinary configuration.');
      }
      return null;
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate sizes
      if (selectedSizes.length === 0) {
        alert('Please select at least one size');
        setLoading(false);
        return;
      }

      // Validate image
      if (!imageFile) {
        alert('Please select an image');
        setLoading(false);
        return;
      }

      // Upload image to Cloudinary
      const uploadedUrl = await uploadToCloudinary();
      if (!uploadedUrl) {
        setLoading(false);
        return;
      }

      // Prepare product data
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        originalPrice: parseFloat(formData.originalPrice) || null,
        discount: formData.discount ? parseInt(formData.discount) : null,
        sizes: selectedSizes,
        image: uploadedUrl,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };

      // Add product
      const result = await addProduct(productData);
      
      if (result.success) {
        alert('✅ Product added successfully!');
        navigate('/admin/products');
      } else {
        alert('Failed to add product: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <button
            onClick={() => navigate('/admin/products')}
            className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., AMIRA (3PCS)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Product description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categoryOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Price (Rs.) *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="4599"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Original Price (Rs.)</label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="6000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Discount %</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="23"
                  readOnly
                />
                <p className="text-xs text-gray-500 mt-1">Auto-calculated from prices</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-1">Product Image *</label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="max-h-48 mx-auto rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview('');
                          setImageFile(null);
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <FaTimes />
                      </button>
                      
                      {/* Upload Progress */}
                      {uploading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                          <div className="bg-white p-3 rounded-lg">
                            <FaSpinner className="animate-spin text-blue-500 text-2xl mx-auto mb-2" />
                            <p className="text-sm">Uploading {uploadProgress}%</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400 mb-3">PNG, JPG, GIF up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="imageUpload"
                      />
                      
                      <label
                        htmlFor="imageUpload"
                        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
                      >
                        Select Image
                      </label>
                    </div>
                    
                  )}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <label className="block text-sm font-medium mb-2">Available Sizes *</label>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => toggleSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-medium transition-colors ${
                        selectedSizes.includes(size)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'border-gray-300 text-gray-700 hover:border-blue-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Selected: {selectedSizes.length > 0 ? selectedSizes.join(', ') : 'None'}
                </p>
              </div>

              {/* Flags */}
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="isNew"
                    checked={formData.isNew}
                    onChange={handleInputChange}
                    className="rounded text-blue-500"
                  />
                  <span className="text-sm">Mark as New Arrival</span>
                </label>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="isTrending"
                    checked={formData.isTrending}
                    onChange={handleInputChange}
                    className="rounded text-blue-500"
                  />
                  <span className="text-sm">Mark as Trending</span>
                </label>
              </div>
            </div>
          </div>

          

          {/* Submit Button */}
          <div className="mt-6 pt-6 border-t">
            <button
              type="submit"
              disabled={loading || uploading || selectedSizes.length === 0 || !imageFile}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {(loading || uploading) ? (
                <>
                  <FaSpinner className="animate-spin" />
                  {uploading ? `Uploading Image ${uploadProgress}%` : 'Adding Product...'}
                </>
              ) : (
                <>
                  <FaPlus />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddProduct;