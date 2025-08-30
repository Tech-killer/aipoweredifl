import { BarChart, Anchor, Magnet, Briefcase, Banknote, Umbrella } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    icon: <BarChart size={48} />,
    title: "Composite Units",
    description:
      "We integrate every stage of textile manufacturing under one roof, streamlining processes from fiber to fabric to finished product for maximum efficiency and quality.",
    gradient: "from-blue-600 to-indigo-700",
    accentColor: "blue",
    delay: "0ms"
  },
  {
    icon: <Anchor size={48} />,
    title: "Ginning and Pressing",
    description:
      "Our ginning and pressing services ensure high-quality cotton processing, improving fiber quality and making it ready for spinning and weaving units.",
    gradient: "from-emerald-600 to-teal-700",
    accentColor: "emerald",
    delay: "100ms"
  },
  {
    icon: <Magnet size={48} />,
    title: "Embroidery Units",
    description:
      "Specialized in traditional and modern embroidery, our units add intricate detailing and aesthetic value to fabrics, keeping Indian craftsmanship alive.",
    gradient: "from-purple-600 to-violet-700",
    accentColor: "purple",
    delay: "200ms"
  },
  {
    icon: <Briefcase size={48} />,
    title: "Powerloom Weaving",
    description:
      "Advanced powerloom technology combined with skilled craftsmanship to produce high-quality woven fabrics with precision and consistency.",
    gradient: "from-amber-600 to-orange-700",
    accentColor: "amber",
    delay: "300ms"
  },
  {
    icon: <Banknote size={48} />,
    title: "Silk Units",
    description:
      "Our silk production units focus on preserving the elegance of Indian silk while adopting innovative techniques to meet contemporary fashion demands.",
    gradient: "from-rose-600 to-pink-700",
    accentColor: "rose",
    delay: "400ms"
  },
  {
    icon: <Umbrella size={48} />,
    title: "Technical Textile",
    description:
      "We explore the frontier of textile innovation by developing technical textiles used in industries like healthcare, agriculture, defense, and infrastructure.",
    gradient: "from-slate-600 to-gray-700",
    accentColor: "slate",
    delay: "500ms"
  },
];

function ServiceCard({ service, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      } hover:bg-white/10 hover:border-white/20 hover:-translate-y-2`}
      style={{ transitionDelay: service.delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Professional glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Subtle animated border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} transform origin-left transition-transform duration-700 ${
        isHovered ? 'scale-x-100' : 'scale-x-0'
      }`} />

      <div className="relative p-8 h-full flex flex-col">
        {/* Professional icon container */}
        <div className="mb-8 relative">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-3' : ''
          } shadow-lg`}>
            <div className="w-full h-full bg-slate-900/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-white transition-all duration-300">
                {service.icon}
              </div>
            </div>
          </div>
          
          {/* Professional indicator dot */}
          <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500 ${
            isHovered ? 'scale-125' : 'scale-0'
          } shadow-lg`} />
        </div>

        {/* Professional typography */}
        <h3 className="text-2xl font-bold mb-6 text-white transition-all duration-300 group-hover:text-gray-100 leading-tight">
          {service.title}
        </h3>

        {/* Enhanced description */}
        <p className="text-gray-300 text-base leading-relaxed flex-grow transition-colors duration-300 group-hover:text-gray-200 font-light">
          {service.description}
        </p>

        {/* Professional bottom section */}
        <div className="mt-8 flex items-center justify-between">
          <div className={`flex-1 h-px bg-gradient-to-r ${service.gradient} transform origin-left transition-transform duration-700 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`} />
          
          <div className={`ml-4 w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500 ${
            isHovered ? 'scale-150' : 'scale-100'
          }`} />
        </div>
      </div>

      {/* Professional corner accent */}
      <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${service.gradient} opacity-5 transition-opacity duration-500 ${
        isHovered ? 'opacity-10' : ''
      }`} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
    </div>
  );
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 overflow-hidden"
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          
          <div className={`w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`} />
          
          <p className={`text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Comprehensive textile solutions powered by innovation and crafted with precision. 
            We deliver excellence across every aspect of textile manufacturing.
          </p>
        </div>

        {/* Professional services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Professional CTA section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
          </div>
        </div>
      </div>
    </section>
  );
}
