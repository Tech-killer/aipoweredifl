import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import AIPhotoSection from "./AIPhotoSection";
import WorkSectionNavbar from "./WorksectionNavbar";

const WorkSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <WorkSectionNavbar />

      {/* Welcome Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            Welcome To Ai Powered IFL 
          </h1>
          <p className="text-3xl mb-4">
            (Indian Fashion League)
          </p>
          
          <div className="text-lg md:text-xl text-gray-200 mb-6 max-w-5xl mx-auto leading-relaxed">
            <p className="mb-4">
              <span className="text-purple-400 font-semibold">AI-powered-IFL(Indian Fashion League) is a visionary platform</span> dedicated to reviving and showcasing the
              social, technical, inclusive, modern, futuristic, yet deeply traditional essence of
              <span className="text-yellow-400 font-bold text-xl">"Bhartiya Vastrasanskriti"</span> on the global stage-powered by the
              limitless potential of artificial intelligence.
            </p>
            
            <p className="mb-6">
              Built with the passion and creativity of
              <span className="text-purple-400 font-bold">Gen Z interns</span>, where
              <span className="text-pink-400 font-bold">200+ college girls drive innovation with generative AI</span>
               and a dynamic team of boys enhance it through{" "}
              <span className="text-green-400 font-semibold">AI-driven web design tools</span>, IFL is set to become a transformative force in the
              <span className="text-orange-400 font-bold">"Aatmanirbhar Bharat" journey of the textile industry</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/main")}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              About Us & AIpoweredIFL
            </button>
            <button
              onClick={() => navigate("/mega")}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg"
            >
             Mega Uniform Expo
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* AI Photo Gallery Section */}
        <AIPhotoSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkSection;
