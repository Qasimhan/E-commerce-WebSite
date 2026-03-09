// src/context/AdminContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Check if admin is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAdminLoggedIn(true);
      fetchOrders();
      fetchProducts();
    }
  }, []);

  // Admin Login
  const adminLogin = async (email, password) => {
    setLoading(true);
    try {
      if (email === 'admin@khanclothing.pk' && password === 'Admin@123') {
        const token = 'admin-jwt-token-' + Date.now();
        localStorage.setItem('adminToken', token);
        setIsAdminLoggedIn(true);
        
        await fetchOrders();
        await fetchProducts();
        
        return { success: true };
      } else {
        return { success: false, message: 'Invalid admin credentials' };
      }
    } catch (error) {
      console.error('Admin login error:', error);
      return { success: false, message: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  // Admin Logout
  const adminLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminLoggedIn(false);
    setOrders([]);
  };

  // Fetch Orders from shared localStorage
  const fetchOrders = async () => {
    try {
      // Get orders from the shared 'orders' key
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        // If no orders, set empty array
        setOrders([]);
        localStorage.setItem('orders', JSON.stringify([]));
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Update Order Status
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    localStorage.setItem('adminOrders', JSON.stringify(updatedOrders)); // For backward compatibility
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const savedProducts = localStorage.getItem('adminProducts');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        setProducts([]);
        localStorage.setItem('adminProducts', JSON.stringify([]));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Add New Product
  const addProduct = async (productData) => {
    try {
      const newProduct = {
        id: Date.now(),
        ...productData,
        createdAt: new Date().toISOString()
      };
      
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
      
      return { success: true, product: newProduct };
    } catch (error) {
      console.error('Error adding product:', error);
      return { success: false, message: 'Failed to add product' };
    }
  };

  // Delete Product
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
  };

  // Update Product
  const updateProduct = (productId, updatedData) => {
    const updatedProducts = products.map(p => 
      p.id === productId ? { ...p, ...updatedData } : p
    );
    setProducts(updatedProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
  };

  return (
    <AdminContext.Provider value={{
      isAdminLoggedIn,
      adminLogin,
      adminLogout,
      loading,
      orders,
      products,
      updateOrderStatus,
      addProduct,
      deleteProduct,
      updateProduct,
      fetchProducts
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}