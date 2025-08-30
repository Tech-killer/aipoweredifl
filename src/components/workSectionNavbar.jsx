import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const workSectionNavbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('AI Photo');

  const navItems = [
    { name: "AI Photo", href: "#ai-photo", type: "scroll" },
    { name: "AI Video", href: "/videos", type: "redirect" },
    // { name: "Competition Rules", href: "/competition", type: "redirect" },
    // { name: "Participants & Prize Winners", href: "/participants", type: "redirect" },
    // { name: "Achievements", href: "/achievements", type: "redirect" }
  ];

  return (
    <nav className="w-full transition-all duration-500 bg-gray-900/90 backdrop-blur-lg shadow-2xl border-b border-purple-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button onClick={() => navigate('/main')} className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-300">
            <img src="https://i.postimg.cc/76srhKx4/ArtWork.png" alt="AI Powered Logo" className="h-12 w-12 mr-3 rounded-full shadow-lg border-2 border-purple-500 bg-white object-contain" style={{ background: 'white' }} />
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI Powered IFL</span>
              <div className="text-sm font-bold text-gray-300 tracking-wide">Indian Fashion League</div>
            </div>
          </button>
          
          <div className="hidden lg:block">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-full px-1 py-1 shadow-lg border border-white/20">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button key={item.name} onClick={() => { 
                    setActiveItem(item.name); 
                    if (item.type === 'redirect') {
                      navigate(item.href);
                    } else {
                      document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                    className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeItem === item.name ? 'text-white shadow-lg' : 'text-gray-300 hover:text-purple-400'}`}>
                    {activeItem === item.name && <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg"></div>}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="relative w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300">
              <div className="w-5 h-4 flex flex-col justify-between">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`h-0.5 w-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? (i === 0 ? 'rotate-45 translate-y-1.5' : i === 1 ? 'opacity-0' : '-rotate-45 -translate-y-1.5') : ''
                  }`}></div>
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-purple-800 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <button key={item.name} onClick={() => { 
                setActiveItem(item.name); 
                setIsMobileMenuOpen(false); 
                if (item.type === 'redirect') {
                  navigate(item.href);
                } else {
                  document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
                }
              }}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${activeItem === item.name ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-purple-400'}`}
                style={{ animationDelay: `${index * 50}ms` }}>
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default workSectionNavbar;