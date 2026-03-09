// src/pages/Navigation.jsx
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { useState, useEffect } from "react";

function Navigation() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop",
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const features = [
    {
      icon: FaTruck,
      title: "Free Shipping",
      description: "On orders above Rs. 5000",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      icon: FaUndoAlt,
      title: "Easy Returns",
      description: "7-day return policy",
    },
    {
      icon: IoMdPricetag,
      title: "Best Prices",
      description: "Guaranteed low prices",
    },
  ];

  // Navigation.jsx mein categories array
const categories = [
  { 
    name: "Women's Fashion", 
    link: "womens-fashion",  // URL ke liye
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop", 
    count: 50 
  },
  { 
    name: "Men's Collection", 
    link: "mens-collection",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop", 
    count: 50 
  },
  { 
    name: "Kids Wear", 
    link: "kids-wear",
    image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", 
    count: 50 
  },
  { 
    name: "Accessories", 
    link: "accessories",
    image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500&auto=format&fit=crop", 
    count: 60 
  }
];
  const facebook = () => {
    window.open("https://www.facebook.com/khanclothing", "_blank");
  };
  const instagram = () => {
    window.open("https://www.instagram.com/khanclothing", "_blank");
  };
  const twitter = () => {
    window.open("https://www.twitter.com/khanclothing", "_blank");
  };
  const testimonials = [
    {
      name: "Sarah Ahmed",
      text: "Amazing quality and fast delivery! The velvet collection is absolutely stunning.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ali Raza",
      text: "Best online shopping experience in Pakistan. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Fatima Khan",
      text: "Great customer service and beautiful designs. Will shop again!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden md:block">Hey there! Welcome to KHAN CLOTHING</p>
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/signin">
              <button className="px-5 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold tracking-wider hover:text-gray-700 transition-colors"
            >
              KHAN<span className="text-gray-500 text-sm ml-1">CLOTHING</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Auto-rotating Background */}
      <section className="relative h-[600px] overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              🎉 New Collection 2026
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Discover Your <br />
              <span className="text-amber-300">Perfect Style</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Explore our latest collection of elegant and contemporary fashion.
              Quality clothing that makes you feel confident and beautiful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Shopping <FaArrowRight />
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-900 transition-colors shadow-md">
                  <feature.icon className="text-2xl text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200">
                    {category.count} Products
                  </p>
                  <Link to={`/category/${category.link}`}>
                    <button className="mt-3 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-amber-600 font-semibold mb-2 block">
                FEATURED
              </span>
              <h2 className="text-4xl font-bold mb-4">Velvet Collection 8</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Discover our latest luxury velvet ensemble, crafted with
                precision and elegance for the modern woman. Limited edition
                pieces.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  <span>Premium quality velvet fabric</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  <span>Hand-embroidered details</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  <span>Available in multiple colors</span>
                </li>
              </ul>
              <Link to="/signup">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
                  Shop Collection
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop"
                alt="Velvet Collection"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Join thousands of happy customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Join the KHAN CLOTHING Family
          </h3>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and exclusive
            deals.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">
                KHAN<span className="text-gray-400 text-sm ml-1">CLOTHING</span>
              </h4>
              <p className="text-gray-400 text-sm">
                Your destination for elegant and contemporary fashion since
                2025.
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={facebook}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </button>
                <button
                  onClick={instagram}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram />
                </button>
                <button
                  onClick={twitter}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter />
                </button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/size-guide"
                    className="hover:text-white transition-colors"
                  >
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/new-arrivals"
                    className="hover:text-white transition-colors"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trending"
                    className="hover:text-white transition-colors"
                  >
                    Trending
                  </Link>
                </li>
                <li>
                  <Link
                    to="/velvet-collection"
                    className="hover:text-white transition-colors"
                  >
                    Velvet Collection
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sale"
                    className="hover:text-white transition-colors"
                  >
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@khanclothing.pk</li>
                <li>Phone: +92 347 8597038</li>
                <li>📍 Karachi, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 KHAN CLOTHING. All rights reserved. Made with ❤️ in
              Pakistan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Navigation;
