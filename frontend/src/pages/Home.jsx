// Home.jsx
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext'; // Import useCart
import { 
  FaShoppingCart,  
  FaHeart,
  FaBars,
  FaSearch,
  FaTimes,
  FaTruck,
  FaShieldAlt,
  FaUndoAlt
} from "react-icons/fa";

import { IoMdPricetag } from "react-icons/io";

function Home() {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart(); // Use cart context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);

const [searchTerm, setSearchTerm] = useState('');
const [filterProducts, setFilterProducts] = useState([]);

  // Load products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    // Get admin products from localStorage
    const adminProducts = localStorage.getItem('adminProducts');
    console.log("Loading products from adminProducts:", adminProducts); // DEBUG

    // Default products
    const defaultProducts = [
      { 
        id: 1,
        name: "AMIRA (3PCS)", 
        description: "Elegant velvet ensemble with embroidered details", 
        price: 4599.00,
        originalPrice: 6000.00,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop",
        category: "velvet",
        isNew: true,
        isTrending: true,
        discount: 23
      },
      { 
        id: 2,
        name: "RANI (3PCS)", 
        price: 4599.00, 
        originalPrice: 6000.00,
        description: "Luxurious velvet suit with heavy embroidery",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop",
        category: "velvet",
        isNew: true,
        isTrending: true,
        discount: 23
      },
      { 
        id: 3,
        name: "Amia", 
        price: 600000.00, 
        originalPrice: 650000.00,
        description: "Marriage dress lehnga",
        image: "https://shizahassan.com/cdn/shop/products/amiab.jpg?v=1666180506&width=493",
        category: "velvet",
        isNew: false,
        isTrending: true,
        discount: 23
      },
      { 
        id: 4,
        name: "AYESHA (3PCS)", 
        price: 4299.00, 
        originalPrice: 5500.00,
        description: "Contemporary velvet design with modern aesthetic",
        image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=500&auto=format&fit=crop",
        category: "velvet",
        isNew: true,
        isTrending: false,
        discount: 22
      },
      { 
        id: 5,
        name: "FATIMA (3PCS)", 
        price: 5899.00, 
        originalPrice: 7500.00,
        description: "Luxury velvet ensemble with intricate details",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop",
        category: "velvet",
        isNew: false,
        isTrending: true,
        discount: 21
      },
      { 
        id: 6,
        name: "MAHNOOR (3PCS)", 
        price: 3999.00, 
        originalPrice: 5200.00,
        description: "Elegant winter collection velvet suit",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop",
        category: "velvet",
        isNew: true,
        isTrending: false,
        discount: 23
      }
    ];

    // Check if admin products exist and combine them
    if (adminProducts) {
      try {
        const parsedAdminProducts = JSON.parse(adminProducts);
        console.log("Parsed admin products:", parsedAdminProducts); // DEBUG
        
        // Combine default products with admin products
        const allProducts = [...defaultProducts, ...parsedAdminProducts];
        setProducts(allProducts);
        console.log("Combined products:", allProducts); // DEBUG
      } catch (error) {
        console.error("Error parsing admin products:", error);
        setProducts(defaultProducts);
      }
    } else {
      console.log("No admin products found, using defaults");
      setProducts(defaultProducts);
    }
  };

  // Rest of your code...
  const categories = [
    { id: "all", name: "All Products" },
    { id: "contact", name: "Contact Us" },
    { id: "about", name: "About Us" },
    { id: "faqs", name: "FAQs" }
  ];

  const goToAbout = () => {
    navigate("/about");
  };
  
  const goToContact = () => {
    navigate("/contact");
  };
  
  const goToFAQs = () => {
    navigate("/faqs");  
  };
  
  const goToSizeGuide = () => {
    navigate("/size-guide");
  };

  const features = [
    { icon: FaTruck, title: "Free Shipping", description: "On orders above Rs. 5000" },
    { icon: FaShieldAlt, title: "Secure Payment", description: "100% secure transactions" },
    { icon: FaUndoAlt, title: "Easy Returns", description: "7-day return policy" },
    { icon: IoMdPricetag, title: "Best Prices", description: "Guaranteed low prices" }
  ];
  //filter products by category and add to cart functionality
  useEffect(() => {
      console.log("Products from context:", products);
      setFilterProducts(products);
    }, [products]);
  // Filter products based on search and category
    useEffect(() => {
      let filtered = products;
  
      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(product => 
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
     
  
      setFilterProducts(filtered);
    }, [searchTerm, products]);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  

  const Signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("You have been signed out.");
    navigate("/");
  };

  // Handle category navigation
  const handleCategoryClick = (catId) => {
    if (catId === "contact") {
      navigate("/contact");
    } else if (catId === "about") {
      navigate("/about");
    } else if (catId === "faqs") {
      navigate("/faqs");
    } else {
      setActiveCategory(catId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden md:block">HI there! Welcome to KHAN CLOTHING</p>
          <div className="flex gap-4 mx-auto md:mx-0">
            <button className="hover:text-gray-300 bg-none border-none cursor-pointer" onClick={Signout}>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Logo */}
            <div className="text-2xl font-bold tracking-wider">
              KHAN<span className="text-gray-500 text-sm ml-1">CLOTHING</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`font-medium transition-colors hover:text-gray-900 ${
                    activeCategory === cat.id ? 'text-black border-b-2 border-black' : 'text-gray-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
            {/* Search and Filter Bar */}
                    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search products by name or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div> 
                      </div>
                    </div>

            {/* Header Icons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={goToCheckout}
                className="relative text-xl hover:text-gray-600"
              >
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t animate-slideDown">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    handleCategoryClick(cat.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 font-medium transition-colors ${
                    activeCategory === cat.id ? 'bg-gray-100 text-black' : 'text-gray-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Banner - UPDATED FOR LAPTOP */}
      <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1600&auto=format&fit=crop" 
            alt="Velvet Collection"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay - Better for laptop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content - Left aligned for laptop */}
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            {/* Badge */}
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              New Arrival
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              VELVET <br />
              <span className="text-amber-300">COLLECTION 8</span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
              Discover our latest luxury velvet ensemble, crafted with precision 
              and elegance for the modern woman
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="text-2xl mx-auto mb-2 text-gray-700" />
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Title */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">
          {activeCategory === "all" ? "All Products" : 
           activeCategory === "new" ? "New Arrivals" : 
           activeCategory === "velvet" ? "Velvet Collection" : ""}
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}

                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold">Rs.{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-400 line-through text-sm">Rs.{product.originalPrice.toLocaleString()}</span>
                      <span className="text-green-600 text-sm font-semibold">
                        Save Rs.{(product.originalPrice - product.price).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>

                {/* Size and Quantity Selection */}
                <div className="border-t pt-3">
                  {/* Size Selector */}
                  <div className="mb-3">
                    <select 
                      id={`size-${product.id}`}
                      className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:border-gray-900"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Size</option>
                      <option value="XS">XS - Extra Small</option>
                      <option value="S">S - Small</option>
                      <option value="M">M - Medium</option>
                      <option value="L">L - Large</option>
                      <option value="XL">XL - Extra Large</option>
                      <option value="XXL">XXL - Double Extra Large</option>
                    </select>
                  </div>
                  
                  {/* Quantity Selector and Add to Cart */}
                  <div className="flex gap-2">
                    <div className="flex items-center border rounded-lg">
                      <button 
                        onClick={() => {
                          const qtyInput = document.getElementById(`qty-${product.id}`);
                          const currentQty = parseInt(qtyInput.value);
                          if (currentQty > 1) {
                            qtyInput.value = currentQty - 1;
                          }
                        }}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        id={`qty-${product.id}`}
                        min="1"
                        max="10"
                        defaultValue="1"
                        className="w-12 text-center border-x py-1 focus:outline-none"
                        onChange={(e) => {
                          if (e.target.value < 1) e.target.value = 1;
                          if (e.target.value > 10) e.target.value = 10;
                        }}
                      />
                      <button 
                        onClick={() => {
                          const qtyInput = document.getElementById(`qty-${product.id}`);
                          const currentQty = parseInt(qtyInput.value);
                          if (currentQty < 10) {
                            qtyInput.value = currentQty + 1;
                          }
                        }}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => {
                        const sizeSelect = document.getElementById(`size-${product.id}`);
                        const qtyInput = document.getElementById(`qty-${product.id}`);
                        const selectedSize = sizeSelect.value;
                        const quantity = parseInt(qtyInput.value);
                        
                        if (!selectedSize) {
                          alert("Please select a size first");
                          sizeSelect.focus();
                          return;
                        }
                        
                        addToCart(product, selectedSize, quantity);
                        
                        // Show success message
                        const toast = document.createElement('div');
                        toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn';
                        toast.textContent = `${quantity} x ${product.name} (Size: ${selectedSize}) added to cart!`;
                        document.body.appendChild(toast);
                        setTimeout(() => toast.remove(), 3000);
                      }}
                      className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Wishlist Button */}
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={`mt-3 flex items-center gap-1 text-sm ${
                    wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <FaHeart />
                  {wishlist.includes(product.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-600 mb-6">Get updates about new collections and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:border-gray-900"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">KHAN</h4>
              <p className="text-gray-400 text-sm">Your destination for elegant and contemporary fashion</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={goToAbout} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={goToContact} className="hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={goToFAQs} className="hover:text-white transition-colors">FAQs</button></li>
                <li><button onClick={goToSizeGuide} className="hover:text-white transition-colors">Size Guide</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="/trending" className="hover:text-white transition-colors">Trending</a></li>
                <li><a href="/velvet-collection" className="hover:text-white transition-colors">Velvet Collection</a></li>
                <li><a href="/sale" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: qasimkhanswathi456@gmail.com</li>
                <li>Phone: +92 3478597038</li>
                <li>Follow us on social media</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 KHAN CLOTHING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;