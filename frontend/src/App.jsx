// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/about";
import Contact from "./pages/contact";
import FAQs from "./pages/faqs";
import SizeGuide from "./pages/sizeguide";
import CategoryPage from "./pages/CategoryPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminAddProduct from "./pages/AdminAddProduct";
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';
import GoogleSuccess from "./pages/GoogleSuccess";

const ProtectedAdminRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminToken');
  if (!isAdminLoggedIn) {
    window.location.href = '/admin/login';
    return null;
  }
  return children;
};

function App() {
  return (
    <AdminProvider>      {/* AdminProvider pehle */}
      <CartProvider>      {/* CartProvider baad mein */}
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigation />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/google-success" element={<GoogleSuccess />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            } />
            <Route path="/admin/products" element={
              <ProtectedAdminRoute>
                <AdminProducts />
              </ProtectedAdminRoute>
            } />
            <Route path="/admin/products/add" element={
              <ProtectedAdminRoute>
                <AdminAddProduct />
              </ProtectedAdminRoute>
            } />
            <Route path="/admin/orders" element={
              <ProtectedAdminRoute>
                <AdminOrders />
              </ProtectedAdminRoute>
            } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AdminProvider>
  );
}

export default App;
