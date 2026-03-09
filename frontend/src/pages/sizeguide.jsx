// src/pages/SizeGuide.jsx
import React, { useState } from 'react';
import { FaRuler,FaArrowLeft, FaMale, FaFemale, FaChild } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
export default function SizeGuide() {
    const [activeTab, setActiveTab] = useState('women');
    const navigate = useNavigate();

    const sizeCharts = {
        women: {
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            measurements: {
                bust: ['32"', '34"', '36"', '38"', '40"', '42"'],
                waist: ['26"', '28"', '30"', '32"', '34"', '36"'],
                hips: ['36"', '38"', '40"', '42"', '44"', '46"']
            }
        },
        men: {
            sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            measurements: {
                chest: ['38"', '40"', '42"', '44"', '46"', '48"'],
                waist: ['30"', '32"', '34"', '36"', '38"', '40"'],
                length: ['27"', '28"', '29"', '30"', '31"', '32"']
            }
        },
        kids: {
            sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
            measurements: {
                height: ['36"', '39"', '42"', '45"', '48"', '51"'],
                chest: ['22"', '23"', '24"', '25"', '26"', '27"'],
                waist: ['20"', '21"', '22"', '23"', '24"', '25"']
            }
        }
    };

    const tabs = [
        { id: 'women', label: 'Women', icon: FaFemale },
        { id: 'men', label: 'Men', icon: FaMale },
        { id: 'kids', label: 'Kids', icon: FaChild }
    ];

    const currentChart = sizeCharts[activeTab];

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
                    <div className="flex justify-center mb-4">
                        <FaRuler className="text-4xl" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Size Guide</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Find your perfect fit with our comprehensive size guide
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* How to Measure */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6">How to Measure</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl font-bold">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">Bust/Chest</h3>
                            <p className="text-sm text-gray-600">Measure around the fullest part of your chest</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl font-bold">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Waist</h3>
                            <p className="text-sm text-gray-600">Measure around your natural waistline</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-xl font-bold">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">Hips</h3>
                            <p className="text-sm text-gray-600">Measure around the fullest part of your hips</p>
                        </div>
                    </div>
                </div>

                {/* Size Chart Tabs */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="flex border-b">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-colors ${
                                        activeTab === tab.id 
                                            ? 'bg-gray-900 text-white' 
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <Icon />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4 capitalize">{activeTab}'s Size Chart</h3>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="py-3 px-4 text-left">Size</th>
                                        {currentChart.sizes.map((size, index) => (
                                            <th key={index} className="py-3 px-4 text-center">{size}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(currentChart.measurements).map(([key, values], rowIndex) => (
                                        <tr key={rowIndex} className="border-t">
                                            <td className="py-3 px-4 font-medium capitalize">{key}</td>
                                            {values.map((value, colIndex) => (
                                                <td key={colIndex} className="py-3 px-4 text-center text-gray-600">
                                                    {value}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>Note:</strong> These are approximate measurements. 
                                For the best fit, we recommend measuring a similar garment that fits you well.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-bold mb-3">Fit Tips</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• If between sizes, choose the larger size for a comfortable fit</li>
                            <li>• Consider the fabric - cotton may shrink, while synthetic blends retain shape</li>
                            <li>• Different styles may fit differently - always check individual product measurements</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-bold mb-3">Need Help?</h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Still unsure about sizing? Our customer service team is here to help!
                        </p>
                        <button 
                            onClick={() => window.location.href = '/contact'}
                            className="text-gray-900 font-semibold hover:underline"
                        >
                            Contact Us →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}