// Checkout.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { FaTruck, FaArrowLeft, FaShoppingBag } from "react-icons/fa";

function Checkout() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, placeOrder } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  // Calculate total
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCharges = subtotal > 5000 ? 0 : 199;
  const total = subtotal + shippingCharges;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const placeOrderHandler = (e) => {
    e.preventDefault();
    
    // Place order using context
    const newOrder = placeOrder({
      customerName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
    });
    
    setPlacedOrder(newOrder);
    setOrderPlaced(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Agar cart empty hai to Home par redirect
  useEffect(() => {
    if (cart.length === 0 && !orderPlaced) {
      navigate("/home");
    }
  }, [cart, navigate, orderPlaced]);

  // Success Page
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaTruck className="text-3xl text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-4">
            Thank you for shopping with KHAN CLOTHING.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <p className="text-sm font-semibold">Order ID: {placedOrder?.id}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <p className="font-semibold mb-2">Delivery Address:</p>
            <p className="text-sm text-gray-600">
              {formData.fullName}<br />
              {formData.address}<br />
              {formData.city}<br />
              Phone: {formData.phone}
            </p>
          </div>
          <button
            onClick={() => navigate("/home")}
            className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/home")}
              className="text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-xl font-bold">Checkout</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="grid gap-6">
          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <FaShoppingBag className="text-gray-600" />
              Your Order ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
            </h2>
            
            <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.selectedSize}-${index}`} className="flex gap-3 border-b pb-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="w-6 h-6 border rounded hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="w-6 h-6 border rounded hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-medium text-sm">
                        Rs.{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-red-500 text-xs hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>Rs.{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Charges</span>
                <span className={shippingCharges === 0 ? 'text-green-600' : ''}>
                  {shippingCharges === 0 ? 'Free' : `Rs.${shippingCharges}`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>Rs.{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Delivery Address Form */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <FaTruck className="text-gray-600" />
              Delivery Address
            </h2>
            
            <form onSubmit={placeOrderHandler} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Complete Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="House #, Street, Area"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="Karachi"
                />
              </div>

              {/* Payment Method */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    checked={true}
                    readOnly
                    className="text-gray-900"
                  />
                  <div>
                    <span className="font-medium">Cash on Delivery</span>
                    <p className="text-xs text-gray-600">Pay when you receive your order</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;