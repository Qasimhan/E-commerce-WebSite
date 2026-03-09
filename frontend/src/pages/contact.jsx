// src/pages/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: ["Online Store - We deliver across Pakistan!"],
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["+92 347 8597038", "+92 3348940580"],
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["info@khanclothing.pk", "support@khanclothing.pk"],
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: ["Mon - Sat: 9am - 8pm", "Sunday: Closed"],
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
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <info.icon className="text-gray-900 text-xl" />
              </div>
              <h3 className="font-bold mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-sm text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Visit Our Store</h2>

              <p className="text-gray-600">
                <strong>Address:</strong> Online Store - We deliver across
                Pakistan!
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-3">Customer Support</h3>
              <p className="text-gray-300 mb-4">
                Our customer support team is available 24/7 to assist you with
                any questions or concerns.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" />
                  <span>+92 347 8597038</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" />
                  <span>support@khanclothing.pk</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


