import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      "This initiative is a much-needed bridge between our cultural roots and modern industry needs. AI Powered 5F gives artisans and innovators a powerful stage to shine. Proud to support this mission.",
    name: 'Ravindra Pandharkar',
    title: 'Industry Expert',
    company: 'Tech Innovations Ltd.',
    image: 'https://aipowered5f.com/app_theme/assets/images/k.jpg',
    rating: 5,
    category: 'Innovation'
  },
  {
    quote:
      "AI Powered 5F beautifully blends tradition with innovation. It's inspiring to see Indian textiles being promoted globally through technology and ethical AI. A truly visionary platform for the next generation.",
    name: 'Vivek Pandharkar',
    title: 'Innovation Strategist',
    company: 'Future Craft Solutions',
    image: 'https://aipowered5f.com/app_theme/assets/images/k.jpg',
    rating: 5,
    category: 'Strategy'
  },
  {
    quote:
      "The seamless integration of AI with traditional craftsmanship opens unprecedented opportunities. This platform represents the future of sustainable and culturally-rich business innovation.",
    name: 'Priya Sharma',
    title: 'Cultural Heritage Advocate',
    company: 'Heritage & Innovation Council',
    image: 'https://aipowered5f.com/app_theme/assets/images/k.jpg',
    rating: 5,
    category: 'Heritage'
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const CategoryBadge = ({ category }) => {
  const categoryColors = {
    Innovation: 'bg-blue-100 text-blue-800 border-blue-200',
    Strategy: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Heritage: 'bg-purple-100 text-purple-800 border-purple-200'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[category] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
      {category}
    </span>
  );
};

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonial-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonial-section"
      className="relative bg-gradient-to-br from-slate-950 via-gray-950 to-black py-24 px-4 overflow-hidden"
    >
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover how industry leaders are transforming their businesses with AI Powered 5F
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Desktop View - Enhanced Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-2 ${hoveredCard === index ? 'shadow-blue-500/10' : ''}
                ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <CategoryBadge category={testimonial.category} />
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <blockquote className="text-slate-300 leading-relaxed mb-8 font-medium text-lg group-hover:text-white transition-colors duration-300">
                {testimonial.quote}
              </blockquote>
              
              {/* Profile Section */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-700">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-blue-500 transition-colors duration-300"
                  />
                  {hoveredCard === index && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-emerald-400/20 animate-pulse"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 font-medium">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Enhanced Carousel */}
        <div className="lg:hidden relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl">
                    <div className="mb-4">
                      <CategoryBadge category={testimonial.category} />
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="text-slate-300 leading-relaxed mb-8 font-medium text-lg">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center space-x-4 pt-6 border-t border-slate-700">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-700"
                      />
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-slate-400 font-medium">{testimonial.title}</p>
                        <p className="text-sm text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Carousel Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
              className="p-3 rounded-full bg-slate-800 border border-slate-700 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
              className="p-3 rounded-full bg-slate-800 border border-slate-700 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
