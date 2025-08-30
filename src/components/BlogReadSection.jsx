import React, { useState, useEffect, useRef } from "react";

const printingMethods = {
  ancient: [
    {
      name: "Shibori Resist",
      description: "Japanese folding, binding, and dyeing creates organic patterns through controlled resistance.",
      origin: "8th Century Japan",
      characteristics: ["Indigo mastery", "Geometric precision", "Meditative process", "Unique variations"],
      applications: "High-end fashion, art installations, luxury interiors",
      complexity: "Artisan",
      sustainability: "Pure",
      icon: "🌀",
      color: "from-indigo-600 to-blue-800"
    },
    {
      name: "Batik Wax Resist",
      description: "Hot wax creates intricate barriers, revealing stories through layered dye applications.",
      origin: "Ancient Indonesia & Egypt",
      characteristics: ["Wax artistry", "Cultural narratives", "Multi-layer depth", "Crackle effects"],
      applications: "Cultural garments, artistic textiles, ceremonial wear",
      complexity: "Master",
      sustainability: "Eco-Pure",
      icon: "🕯️",
      color: "from-amber-600 to-orange-700"
    }
  ],
  industrial: [
    {
      name: "Rotary Screen Revolution",
      description: "Cylindrical mesh screens rotate continuously, delivering consistent patterns at industrial scale.",
      origin: "1960s Netherlands",
      characteristics: ["Continuous flow", "Pattern consistency", "High throughput", "Color registration"],
      applications: "Fashion mass production, home textiles, automotive fabrics",
      complexity: "Technical",
      sustainability: "Moderate",
      icon: "⚙️",
      color: "from-slate-600 to-gray-800"
    },
    {
      name: "Transfer Printing",
      description: "Heat-activated sublimation transfers designs from paper to polyester with photographic clarity.",
      origin: "1960s France",
      characteristics: ["Photo-realistic", "Heat activation", "Synthetic affinity", "Sharp details"],
      applications: "Sportswear, flags, promotional textiles, technical fabrics",
      complexity: "Standard",
      sustainability: "Fair",
      icon: "🔥",
      color: "from-red-600 to-pink-700"
    }
  ],
  quantum: [
    {
      name: "Nano-Droplet Precision",
      description: "Femtoliter droplets create molecular-level patterns with unprecedented color accuracy.",
      origin: "2020s Silicon Valley",
      characteristics: ["Molecular precision", "Zero waste", "Infinite gradients", "Real-time preview"],
      applications: "Luxury couture, technical textiles, smart fabrics",
      complexity: "Quantum",
      sustainability: "Revolutionary",
      icon: "💧",
      color: "from-cyan-500 to-teal-700"
    },
    {
      name: "Bio-Reactive Printing",
      description: "Living organisms create patterns that evolve, responding to environmental stimuli.",
      origin: "2023 Biotech Labs",
      characteristics: ["Living patterns", "Environmental response", "Self-healing", "Biodegradable"],
      applications: "Adaptive clothing, medical textiles, environmental sensors",
      complexity: "Biological",
      sustainability: "Living",
      icon: "🧬",
      color: "from-emerald-500 to-green-700"
    }
  ],
  cosmic: [
    {
      name: "Plasma Field Etching",
      description: "Ionized gas creates three-dimensional surface modifications without chemical intervention.",
      origin: "Aerospace Research 2025",
      characteristics: ["Plasma precision", "3D texturing", "Chemical-free", "Molecular bonding"],
      applications: "Space textiles, medical implants, extreme environments",
      complexity: "Cosmic",
      sustainability: "Pure Energy",
      icon: "⚡",
      color: "from-purple-600 to-violet-800"
    },
    {
      name: "Holographic Weaving",
      description: "Light-based printing creates patterns that exist in multiple dimensions simultaneously.",
      origin: "Quantum Labs 2024",
      characteristics: ["Light manipulation", "Dimensional shift", "Impossible patterns", "Reality bending"],
      applications: "Fashion futures, architectural textiles, consciousness wear",
      complexity: "Transcendent",
      sustainability: "Light-Based",
      icon: "🌈",
      color: "from-pink-500 to-purple-700"
    }
  ]
};

const categoryInfo = {
  ancient: {
    title: "Ancient Wisdom",
    subtitle: "Where time stands still",
    bg: "from-amber-900/20 via-orange-800/10 to-red-900/20",
    description: "Sacred techniques passed through generations, where every thread tells a story of human creativity.",
    philosophy: "Patience creates perfection",
    timeline: "3000 BCE - Present"
  },
  industrial: {
    title: "Industrial Might",
    subtitle: "The age of mass creation",
    bg: "from-slate-900/20 via-gray-800/10 to-zinc-900/20",
    description: "Mechanical precision meets human ambition, transforming textile production into an art of efficiency.",
    philosophy: "Scale without sacrifice",
    timeline: "1800s - 2000s"
  },
  quantum: {
    title: "Quantum Leap",
    subtitle: "Beyond physical limits",
    bg: "from-cyan-900/20 via-teal-800/10 to-emerald-900/20",
    description: "Where science fiction becomes reality, pushing the boundaries of what textiles can become.",
    philosophy: "Impossible made possible",
    timeline: "2020s - 2030s"
  },
  cosmic: {
    title: "Cosmic Evolution",
    subtitle: "Transcending reality",
    bg: "from-purple-900/20 via-violet-800/10 to-pink-900/20",
    description: "The final frontier where textiles become portals to new dimensions of human expression.",
    philosophy: "Beyond imagination",
    timeline: "2025 - ∞"
  }
};

const FloatingMethod = ({ method, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${method.color} p-1 shadow-2xl hover:shadow-4xl transition-all duration-500 ${isHovered ? 'scale-105 rotate-1' : ''}`}>
        <div className="bg-white/95 backdrop-blur rounded-3xl p-8 h-full">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">{method.icon}</span>
            <div>
              <h3 className="text-2xl font-black text-gray-900">{method.name}</h3>
              <div className="flex gap-2 mt-2">
                <span className={`px-3 py-1 bg-gradient-to-r ${method.color} text-white rounded-full text-xs font-bold`}>
                  {method.complexity}
                </span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                  {method.sustainability}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{method.description}</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-4">
              <h4 className="font-bold text-gray-800 mb-2">Origin Timeline</h4>
              <p className="text-sm text-gray-600">{method.origin}</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4">
              <h4 className="font-bold text-gray-800 mb-3">Core Mastery</h4>
              <div className="grid grid-cols-2 gap-2">
                {method.characteristics.map((char, i) => (
                  <div key={i} className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-gray-700 shadow-sm">
                    {char}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4">
              <h4 className="font-bold text-gray-800 mb-2">Reality Applications</h4>
              <p className="text-sm text-gray-600">{method.applications}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ categoryKey, category, methods }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen py-24 px-6 bg-gradient-to-br ${category.bg} relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              {category.timeline}
            </span>
          </div>
          <h2 className="text-6xl font-black text-gray-900 mb-4">
            {category.title}
          </h2>
          <p className="text-xl text-gray-600 italic mb-6">{category.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">{category.description}</p>
          <div className="text-2xl font-light text-gray-800 italic">
            "{category.philosophy}"
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {methods.map((method, index) => (
            <FloatingMethod 
              key={method.name} 
              method={method} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TextilePrintingOdyssey = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentEra, setCurrentEra] = useState('ancient');

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);

      // Determine current era based on scroll position
      if (progress < 0.2) setCurrentEra('ancient');
      else if (progress < 0.4) setCurrentEra('industrial');
      else if (progress < 0.7) setCurrentEra('quantum');
      else setCurrentEra('cosmic');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* Cosmic Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-black/20 z-50 backdrop-blur">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-slate-500 via-cyan-500 to-purple-500 transition-all duration-300 shadow-lg"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Epic Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <div className="text-center text-white z-10 px-6">
          <div className="mb-6 px-8 py-3 bg-white/10 backdrop-blur rounded-full inline-block">
            <span className="text-sm font-bold uppercase tracking-widest">The Ultimate Journey</span>
          </div>
          <h1 className="text-8xl font-black mb-8 leading-none">
            TEXTILE
            <span className="block bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              ODYSSEY
            </span>
          </h1>
          <p className="text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            From ancient wisdom to cosmic evolution, witness the extraordinary transformation 
            of how humanity decorates the fabric of existence itself.
          </p>
          <div className="mt-12 animate-pulse">
            <div className="text-sm opacity-60">Scroll to begin the journey</div>
            <div className="text-2xl mt-2">↓</div>
          </div>
        </div>
      </header>

      {/* Category Sections */}
      {Object.entries(categoryInfo).map(([key, category]) => (
        <CategorySection 
          key={key}
          categoryKey={key}
          category={category}
          methods={printingMethods[key]}
        />
      ))}

      {/* Epic Conclusion */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="text-center z-10 px-6">
          <div className="text-8xl mb-8">∞</div>
          <h2 className="text-6xl font-black mb-8">
            The Journey
            <span className="block bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Never Ends
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            As we stand at the intersection of ancient wisdom and cosmic possibility, 
            textile printing continues to evolve—transforming not just fabric, 
            but the very essence of human creative expression.
          </p>
          <div className="mt-12 text-lg italic opacity-80">
            "In every thread lies the story of humanity's endless imagination."
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextilePrintingOdyssey;
