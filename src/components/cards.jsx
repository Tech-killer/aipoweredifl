import React, { useState } from 'react';

const Cards = () => {
  // Local static card data
  const [cards] = useState([
    {
      id: 1,
      title: "Supporting Textile Innovation",
      image: "https://www.ibef.org/uploads/blog/1732870660_af89c35dd9c2ffd9afce.png",
      description: "Providing mentorship, funding, and resources to foster new ideas in the Indian textile industry, from sustainable practices to global market expansion.",
      gradient: "from-pink-500 to-yellow-500",
      delay: 100,
    },
    {
      id: 2,
      title: "AI-Powered Fashion Competitions",
      image: "https://images.ctfassets.net/59pq84okjaya/6Px3DszCMxf36KcTYtHdEj/d8d581d12544b5e91ef20b1de41f62ba/AI-powered_fashion_design_using_data-driven_software.webp",
      description: "Engaging the youth through AI-driven competitions that encourage creativity, innovation, and awareness of India's vibrant fashion culture.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 200,
    },
    {
      id: 3,
      title: "Educating on Indian Fashion",
      image: "https://media.istockphoto.com/id/529105954/video/sewing-a-dress.jpg?s=640x640&k=20&c=ccBmYdxroLll4qORno5DhwODsptNyDZ_rUkkVXD8eoM=",
      description: "Promoting India's rich textile heritage by showcasing traditional fabrics, techniques, and evolving fashion trends to a global audience.",
      gradient: "from-green-400 to-blue-500",
      delay: 300,
    },
  ]);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16">
          Indian Fashion Initiatives
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 place-items-center">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              id={`card-${card.id}`}
              title={card.title}
              image={card.image}
              description={card.description}
              gradient={card.gradient}
              delay={card.delay || index * 100}
              visible={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ id, title, image, description, gradient, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id}
      className={`group relative bg-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-700 ease-out transform translate-y-0 opacity-100 hover:scale-105 hover:border-gray-600 shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background hover gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

      {/* Glowing border */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl">
        <div
          className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500`}
        />
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl mb-4 sm:mb-6 shadow-lg"
          onError={(e) => (e.target.style.display = "none")}
        />

        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-indigo-400 mb-2 sm:mb-3 uppercase tracking-wide leading-tight">
          {title}
        </h3>

        <p className="text-gray-300 flex-grow text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        <a
          href="#"
          className={`inline-flex items-center text-sm sm:text-base font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 self-start`}
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <div
          className={`mt-4 sm:mt-6 h-1 rounded-full transform origin-left transition-transform duration-500 bg-gradient-to-r ${gradient} ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Cards;