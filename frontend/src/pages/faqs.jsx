// src/pages/FAQs.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FAQs() {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const faqs = [
        {
            category: 'Orders & Shipping',
            questions: [
                {
                    q: 'How long does shipping take?',
                    a: 'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free shipping is available on orders above Rs. 5000.'
                },
                {
                    q: 'Do you ship internationally?',
                    a: 'Yes, we ship to select countries including UAE, USA, and UK. Shipping charges and delivery times vary by location.'
                },
                {
                    q: 'How can I track my order?',
                    a: 'Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order on our website or the courier\'s website.'
                }
            ]
        },
        {
            category: 'Returns & Refunds',
            questions: [
                {
                    q: 'What is your return policy?',
                    a: 'We offer a 7-day return policy. Items must be unworn, unwashed, and with original tags attached.'
                },
                {
                    q: 'How do I initiate a return?',
                    a: 'Contact our customer support within 7 days of receiving your order. We will guide you through the return process.'
                },
                {
                    q: 'When will I get my refund?',
                    a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item.'
                }
            ]
        },
        {
            category: 'Payment',
            questions: [
                {
                    q: 'What payment methods do you accept?',
                    a: 'We accept Cash on Delivery, Credit/Debit Cards, Bank Transfer, EasyPaisa, and JazzCash.'
                },
                {
                    q: 'Is online payment secure?',
                    a: 'Yes, all online payments are processed through secure, encrypted channels. Your payment information is never stored on our servers.'
                }
            ]
        },
        {
            category: 'Products',
            questions: [
                {
                    q: 'How do I find my size?',
                    a: 'Check our Size Guide page for detailed measurements and sizing information for each product category.'
                },
                {
                    q: 'Are your products authentic?',
                    a: 'Yes, all our products are 100% authentic and sourced directly from trusted manufacturers.'
                }
            ]
        }
    ];

    const filteredFaqs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Hero Section */}
            <button onClick={() => navigate(-1)} className=" hover:text-gray-300 text-black">
                <FaArrowLeft className="mr-2" />
                
            </button>
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8">
                        Find answers to common questions about our products, shipping, returns, and more.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* FAQs Content */}
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                {filteredFaqs.map((category, catIndex) => (
                    <div key={catIndex} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                        <div className="space-y-3">
                            {category.questions.map((faq, qIndex) => {
                                const index = `${catIndex}-${qIndex}`;
                                const isOpen = openIndex === index;
                                
                                return (
                                    <div key={qIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-medium">{faq.q}</span>
                                            {isOpen ? 
                                                <FaChevronUp className="text-gray-500" /> : 
                                                <FaChevronDown className="text-gray-500" />
                                            }
                                        </button>
                                        
                                        {isOpen && (
                                            <div className="px-6 pb-4 text-gray-600">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
                    </div>
                )}

                {/* Still Have Questions */}
                <div className="mt-12 bg-gray-900 text-white rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
                    <p className="text-gray-300 mb-6">
                        Can't find the answer you're looking for? Please contact our support team.
                    </p>
                    <button 
                        onClick={() => window.location.href = '/contact'}
                        className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}