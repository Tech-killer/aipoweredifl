import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

function Megauniform() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-800/80 backdrop-blur-md hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border border-purple-500/30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4 min-h-screen">
        {/* A4 Size Poster Container */}
        <div className="relative w-full max-w-4xl mx-auto bg-gray-900 shadow-2xl rounded-2xl overflow-hidden border border-purple-800/30">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-indigo-900/30"></div>
        
        {/* Header Section */}
        <div className="relative z-10 p-8 text-center border-b border-purple-800/30">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4">
            Mega Uniform Expo
          </h1>
          <p className="text-xl text-gray-300 font-semibold">
            AI Powered Indian Fashion League
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Poster Content */}
        <div className="relative z-10 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://i.postimg.cc/HscGB0tZ/something.jpg" 
                alt="Mega Uniform Expo Poster" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Experience the Future of
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Traditional Fashion
                  </span>
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Join us at the revolutionary <span className="text-purple-400 font-semibold">Mega Uniform Expo</span>, 
                  where cutting-edge AI technology meets the timeless elegance of 
                  <span className="text-yellow-400 font-bold">Bhartiya Vastrasanskriti</span>.
                </p>

                <div className="space-y-4 text-gray-200">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>AI-Powered Design Innovation</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Traditional Meets Modern</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>Gen Z Innovation Hub</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Aatmanirbhar Bharat Vision</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/main")}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Learn More About IFL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative z-10 bg-gray-800/50 backdrop-blur-md border-t border-purple-800/30 p-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              Powered by AI • Rooted in Tradition • Built for the Future
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
              <span>200+ College Innovators</span>
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
              <span>AI-Driven Design</span>
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
              <span>Traditional Excellence</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Megauniform;