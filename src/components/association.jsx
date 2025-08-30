import React, { useState, useEffect, useRef } from 'react'

const Association = () => {
  const [isVisible, setIsVisible] = useState({})
  const [counters, setCounters] = useState({ exp: 0, trades: 0, contributors: 0, units: 0 })
  const sectionRef = useRef(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Counter animation
  useEffect(() => {
    if (isVisible.stats) {
      const targets = { exp: 7, trades: 58, contributors: 600, units: 1011 }
      const duration = 2000
      const steps = 60

      Object.keys(targets).forEach(key => {
        let current = 0
        const increment = targets[key] / steps
        const timer = setInterval(() => {
          current += increment
          if (current >= targets[key]) {
            current = targets[key]
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
        }, duration / steps)
      })
    }
  }, [isVisible.stats])

  const stats = [
    { key: 'exp', number: counters.exp, label: 'Years of Experience', icon: '🎯' },
    { key: 'trades', number: counters.trades, label: 'Trades in Textile Sectors', icon: '🏭' },
    { key: 'contributors', number: counters.contributors, label: 'Contributors', icon: '👥' },
    { key: 'units', number: counters.units, label: 'Textile Units', icon: '🏢' },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 space-y-24">
        {/* Section 1: Our Associations */}
        <div 
          id="associations"
          data-animate
          className={`text-center transition-all duration-1000 transform ${
            isVisible.associations ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-12">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-5xl font-bold mb-4">
              Our Associations
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['https://aipowered5f.com/app_theme/assets/images/associates/Maxels__Logo_NEW.png', 'https://aipowered5f.com/app_theme/assets/images/associates/JRC%20Logo.jpg', 'https://aipowered5f.com/app_theme/assets/images/associates/EC%20Logo.png', 'https://aipowered5f.com/app_theme/assets/images/associates/rgvp.png'].map((logo, index) => (
              <div 
                key={index}
                className={`group transition-all duration-700 delay-${index * 200} transform ${
                  isVisible.associations ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/20">
                  <img 
                    src={logo} 
                    alt={`Partner Logo ${index + 1}`} 
                    className="h-20 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Video and Welcome Text - Modified for larger video */}
        <div 
          id="welcome"
          data-animate
          className={`flex flex-col lg:flex-row items-center justify-center gap-16 transition-all duration-1000 transform ${
            isVisible.welcome ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          {/* YouTube Video - Increased size */}
          <div className="relative group w-full lg:w-2/3">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-2xl"
                src="https://www.youtube.com/embed/I7o3XeNZZvs"
                title="The Fusion of AI and Textile"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Welcome Text - Adjusted to take remaining space */}
          <div className="w-full lg:w-1/3 max-w-2xl">
            <div className="mb-6">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-4xl font-bold mb-4">
                Welcome to AI Powered 5F
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                This is a website that promotes <span className="text-pink-400 font-semibold">technology, culture, ethics, and vision</span>, 
                all powered by AI under the title of VFL Season 0.
              </p>
              <p>
                Sustainable yet fashionable lifestyle, nicely blended with rich textile heritage and modern innovation. 
                The goal is to promote the ethical use of AI for the glorification of every trade related to 
                <span className="text-purple-400 font-semibold"> Bhartiya vastrasanskriti</span> that falls in line with textile policy for 2023–28.
              </p>
              <p>
                This website appeals to, encourages, and motivates everyone to learn, adapt, use, and promote AI 
                for better governance, social connectivity, and making every day a 
                <span className="text-indigo-400 font-semibold"> healthier, wealthier, happier, and smarter</span> experience.
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com/embed/I7o3XeNZZvs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <span>Watch Full Video</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1" />
              </svg>
            </a>
          </div>
        </div>

        {/* Section 3: Statistics */}
        <div 
          id="stats"
          data-animate
          className={`transition-all duration-1000 transform ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 text-3xl font-bold">
              Our Impact in Numbers
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.key}
                className={`group transition-all duration-700 delay-${index * 150} transform ${
                  isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-pink-500 text-black w-48 h-48 mx-auto rounded-3xl flex flex-col items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-2">{stat.icon}</div>
                    <div className="text-white text-5xl font-bold mb-3">
                      {stat.number.toLocaleString()}
                      {stat.key === 'units' && '+'}
                    </div>
                    <div className="w-12 h-1 bg-white/30 rounded-full mb-3"></div>
                    <div className="text-center text-white font-semibold text-sm px-4 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Association