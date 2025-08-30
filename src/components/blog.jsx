import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "https://static.fibre2fashion.com/Newsresource/images/299/adobestock-942447031_310908.jpg",
      title: "Mashroo and Himroo: Timeless Textile Arts of India",
      date: "MAR 31ST, 2025",
      author: "MR. MANISH KARANDIKAR",
      excerpt: "Discover the rich heritage and intricate craftsmanship behind India's most celebrated textile traditions.",
      category: "Heritage",
      link: "/heritage"
    },
    {
      id: 2,
      image: "https://www.fulgar.com/upload/sostenibilita-e-innovazione-settore-tessile-1131.webp",
      title: "A Comprehensive Guide to Textile and Printing Methods",
      date: "APR 6TH, 2025",
      author: "MR. MANISH KARANDIKAR",
      excerpt: "Explore modern and traditional printing techniques that shape today's textile industry.",
      category: "Technology",
      link: "/technology"
    }
  ];

  return (
    <section id="blog" className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 md:px-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Section Header */}
      <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Our Blog
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>
        <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
          Explore the fascinating world of textiles through expert insights and industry innovations
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`group relative transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onMouseEnter={() => setHoveredCard(post.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-400 text-black text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Author */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-sm">
                      {post.author.split(' ')[1]?.[0] || 'M'}
                    </span>
                  </div>
                  <span className="text-slate-300 font-medium">BY {post.author}</span>
                </div>

                {/* Excerpt */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="relative">
                  <Link to={`/blogreadsection/${post.id}`}

                    className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300 group/link"
                  >
                    <span className="mr-2">Read More</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredCard === post.id ? 'translate-x-2' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
