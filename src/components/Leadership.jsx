import React, { useState, useEffect, useRef } from 'react';

const leaders = [
  {
    name: "Manish Karandikar",
    title: "Data Science Expert",
    description: "Wide Experience",
    image: "https://aipowered5f.com/app_theme/assets/images/k.jpg",
    fallbackImage: "https://via.placeholder.com/300x300?text=Manish+Karandikar",
    social: {
      facebook: "https://facebook.com/manishkarandikar",
      twitter: "https://twitter.com/manishkarandikar",
      instagram: "https://instagram.com/manishkarandikar",
    },
  },
  {
    name: "Manish Karandikar",
    title: "Data Science Expert",
    description: "Wide Experience",
    image: "https://aipowered5f.com/app_theme/assets/images/k.jpg",
    fallbackImage: "https://via.placeholder.com/300x300?text=Manish+Karandikar",
    social: {
      facebook: "https://facebook.com/manishkarandikar",
      twitter: "https://twitter.com/manishkarandikar",
      instagram: "https://instagram.com/manishkarandikar",
    },
  },
  {
    name: "Manish Karandikar",
    title: "Data Science Expert",
    description: "Wide Experience",
    image: "https://aipowered5f.com/app_theme/assets/images/k.jpg",
    fallbackImage: "https://via.placeholder.com/300x300?text=Manish+Karandikar",
    social: {
      facebook: "https://facebook.com/manishkarandikar",
      twitter: "https://twitter.com/manishkarandikar",
      instagram: "https://instagram.com/manishkarandikar",
    },
  },
];

export default function Leadership() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black text-white py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Our Leadership
              </span>
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            </div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Meet the visionary leaders driving innovation and excellence in our organization
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-10">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full">
                  <div className="relative bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center shadow-2xl transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:scale-[1.02] group-hover:bg-gradient-to-br group-hover:from-slate-900/90 group-hover:via-gray-900/90 group-hover:to-slate-950/90">
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5 rounded-3xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>

                    {/* Profile Image */}
                    <div className="relative z-10 mb-8">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full p-1 animate-spin-slow">
                          <div className="bg-slate-900 rounded-full p-2">
                            <div className="w-36 h-36 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full"></div>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={imageErrors[index] ? leader.fallbackImage : leader.image}
                            onError={() => handleError(index)}
                            alt={leader.name}
                            className="w-36 h-36 rounded-full object-cover border-4 border-slate-800 transition-all duration-500 group-hover:scale-110 group-hover:border-slate-700"
                          />
                          <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border-3 border-slate-900 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                        {leader.name}
                      </h3>
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                          {leader.title}
                        </span>
                      </div>
                      <p className="text-slate-300 font-medium text-lg leading-relaxed">
                        {leader.description}
                      </p>
                      <div className="flex items-center justify-center py-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                      </div>
                      <div className="flex justify-center gap-4">
                        <a href={leader.social.facebook} target="_blank" rel="noreferrer" className="group/social relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
                          <i className="fab fa-facebook-f text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a href={leader.social.twitter} target="_blank" rel="noreferrer" className="group/social relative w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1">
                          <i className="fab fa-twitter text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a href={leader.social.instagram} target="_blank" rel="noreferrer" className="group/social relative w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1">
                          <i className="fab fa-instagram text-lg group-hover/social:scale-110 transition-transform duration-300"></i>
                          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-20 transition-all duration-1200 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800/30 to-gray-800/30 border border-slate-700/30 rounded-full backdrop-blur-sm">
            <span className="text-slate-400 text-sm">
              Leading innovation through expertise and vision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
