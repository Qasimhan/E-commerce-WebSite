// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  // Orders state
  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem("orders");
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error("Error loading orders:", error);
      return [];
    }
  });

  // Update cart and save to localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Add to cart
  const addToCart = (product, selectedSize, quantity = 1) => {
    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + quantity
      };
      updateCart(updatedCart);
    } else {
      const newItem = {
        ...product,
        selectedSize,
        quantity
      };
      updateCart([...cart, newItem]);
    }
  };

  // Place order - YAHAN SE ADMIN KO ORDER MILAY GA
  const placeOrder = (orderDetails) => {
    // Create new order
    const newOrder = {
      id: 'ORD' + Date.now().toString().slice(-6),
      ...orderDetails,
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        size: item.selectedSize,
        price: item.price,
        image: item.image
      })),
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };

    // Update orders
    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    
    // Save to localStorage for admin
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    
    // Also save to adminOrders for backward compatibility
    localStorage.setItem("adminOrders", JSON.stringify(updatedOrders));
    
    // Clear cart
    updateCart([]);
    
    return newOrder;
  };

  // Get all orders (for admin)
  const getAllOrders = () => orders;

  // Update order status (for admin)
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    localStorage.setItem("adminOrders", JSON.stringify(updatedOrders));
  };

  // Update quantity
  const updateQuantity = (itemId, size, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => 
      (item.id === itemId && item.selectedSize === size)
        ? { ...item, quantity: newQuantity }
        : item
    );
    updateCart(updatedCart);
  };

  // Remove from cart
  const removeFromCart = (itemId, size) => {
    const updatedCart = cart.filter(
      item => !(item.id === itemId && item.selectedSize === size)
    );
    updateCart(updatedCart);
  };

  // Clear cart
  const clearCart = () => {
    updateCart([]);
  };

  // Calculate total items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      clearCart,
      updateQuantity,
      removeFromCart,
      getTotalItems,
      getTotalPrice,
      placeOrder,        // <-- NEW: Place order function
      getAllOrders,       // <-- NEW: Get all orders
      updateOrderStatus   // <-- NEW: Update order status
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}