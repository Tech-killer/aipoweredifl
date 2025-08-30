import React from 'react';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Disclaimer Section */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full transform group-hover:scale-y-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Disclaimer
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed transform group-hover:translate-x-2 transition-transform duration-300">
              <span className="font-semibold text-emerald-400"><a href="https://www.alpowered5f.com">Alpowered5F.com</a></span> is an independent initiative inspired by the 5F vision of Hon'ble PM. This platform aims to promote Indian textile culture and innovation through educational and community-driven efforts.
            </p>
          </div>

          {/* Important Links Section */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full transform group-hover:scale-y-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Competition', href: '#competition' },
                { name: 'Associations', href: '#associations' },
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Testimonial', href: '#testimonial-section' },
                { name: 'Blog', href: '#blog' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={link.name} className="transform hover:translate-x-2 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  <a 
                    href={link.href}
                    className="flex items-center space-x-2 text-slate-300 hover:text-white group/link"
                  >
                    <ChevronRightIcon className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
                    <span className="hover:text-emerald-400 transition-colors duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-600 rounded-full transform group-hover:scale-y-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Reach Us
              </h3>
            </div>
            <address className="not-italic space-y-4">
              <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <MapPinIcon className="w-5 h-5 text-orange-400 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-sm text-slate-300">648, Behind Green City Hospital,<br />Chhoti Dhantoli</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <EnvelopeIcon className="w-5 h-5 text-orange-400 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:fashionpark.ec@gmail.com" 
                    className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    fashionpark.ec@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <PhoneIcon className="w-5 h-5 text-orange-400 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+918010946458" 
                    className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    +91 801 094 6458
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-purple-600 rounded-full transform group-hover:scale-y-110 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Connect With Us
              </h3>
            </div>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-600', delay: '0s' },
                { name: 'Twitter', icon: '𝕏', color: 'hover:bg-black', delay: '0.1s' },
                { name: 'Instagram', icon: '📷', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500', delay: '0.2s' },
                { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-700', delay: '0.3s' }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg`}
                  style={{animationDelay: social.delay}}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-300 text-sm">
                Copyright © 2025 All Rights Reserved | 
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold"> <a href='https://aipowered5f.com/ifl/.com'>AI Powered.5FCom</a></span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-xs justify-center flex">
                Crafted by
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer px-1"
                >Team Digital Fashion Park</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
