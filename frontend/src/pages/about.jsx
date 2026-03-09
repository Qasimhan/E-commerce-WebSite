// src/pages/About.jsx
import React from "react";
import {
  FaHeart,
  FaArrowLeft,
  FaStar,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const stats = [
    { icon: FaUsers, value: "5K+", label: "Happy Customers" },
    { icon: FaStar, value: "4.5", label: "Customer Rating" },
    { icon: FaTruck, value: "6K+", label: "Orders Delivered" },
    { icon: FaShieldAlt, value: "99.9%", label: "Secure Shopping" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We ensure every product meets our high quality standards",
      icon: FaStar,
      color: "yellow",
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our top priority",
      icon: FaHeart,
      color: "red",
    },
    {
      title: "Innovation",
      description: "Constantly evolving to serve you better",
      icon: FaRocket,
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <button
          onClick={() => navigate(-1)}
          className=" hover:text-gray-300 text-black"
        >
          <FaArrowLeft className="mr-2" />
        </button>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About KHAN CLOTHING
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Your premier destination for elegant and contemporary fashion since
            2025
          </p>
        </div>
      </div>
      <br />
      <br />

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <stat.icon className="text-3xl text-gray-900 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2025, KHAN CLOTHING started with a simple mission: to
                provide high-quality, fashionable clothing that makes people
                feel confident and elegant.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What began as a small online store has grown into a trusted
                brand, serving thousands of happy customers across the country.
                We believe that everyone deserves to look and feel their best.
              </p>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver innovative fashion solutions that enhance the
                shopping experience while maintaining the highest standards of
                quality and customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className={`text-2xl text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start shopping?</h2>
        <p className="text-gray-600 mb-6">
          Explore our latest collection and find your perfect style
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
          Shop Now
        </button>

        <button
          className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          onClick={() => navigate("/")}
        >
          Explore...
        </button>
      </div>
    </div>
  );
}
