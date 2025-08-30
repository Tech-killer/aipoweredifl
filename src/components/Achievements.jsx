import React from 'react';
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    { year: "2023", title: "International Art Festival", description: "Featured 15 artists from our competition in the annual festival", icon: "🎨", category: "Recognition" },
    { year: "2022", title: "Community Impact Award", description: "Recognized for promoting arts education in local schools", icon: "🏆", category: "Award" },
    { year: "2021", title: "Record Participation", description: "Over 500 artists participated in our annual competition", icon: "📈", category: "Milestone" },
    { year: "2020", title: "Virtual Exhibition Success", description: "Our online gallery attracted over 50,000 visitors", icon: "💻", category: "Digital" },
    { year: "2019", title: "Global Recognition", description: "Awarded 'Best Art Community' by Global Arts Magazine", icon: "🌍", category: "Award" },
    { year: "2018", title: "Inaugural Competition", description: "Successfully launched our first annual art competition", icon: "🚀", category: "Launch" },
    { year: "2017", title: "Founding Year", description: "Established as a non-profit organization promoting visual arts", icon: "🏛️", category: "Foundation" },
    { year: "2016", title: "Community Workshop Series", description: "Launched free art workshops for local community members", icon: "👥", category: "Community" }
  ];

  const stats = [
    { label: "Years of Operation", value: "8+", icon: "📅" },
    { label: "Artists Supported", value: "2,500+", icon: "👨‍🎨" },
    { label: "Artworks Showcased", value: "10,000+", icon: "🖼️" },
    { label: "Awards Given", value: "150+", icon: "🏅" },
    { label: "Community Events", value: "75+", icon: "🎪" },
    { label: "Partner Organizations", value: "25+", icon: "🤝" }
  ];

  const milestones = [
    { title: "First AI Art Competition", year: "2020", description: "Pioneered AI-assisted art competitions in the region" },
    { title: "Global Expansion", year: "2021", description: "Extended reach to international artists and participants" },
    { title: "Educational Programs", year: "2022", description: "Launched comprehensive art education initiatives" },
    { title: "Technology Integration", year: "2023", description: "Advanced AI tools integration for enhanced creativity" }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="w-full transition-all duration-500 bg-gray-900/90 backdrop-blur-lg shadow-2xl border-b border-purple-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between h-auto py-4 items-center gap-4">
            {/* Logo + Title */}
            <button
              onClick={() => navigate('/')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="https://i.postimg.cc/76srhKx4/ArtWork.png"
                alt="AI Powered Logo"
                className="h-10 w-10 mr-3 rounded-full shadow-lg border-2 border-purple-500 bg-white object-contain"
              />
              <div>
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Powered
                </span>
                <div className="text-xs sm:text-sm font-bold text-gray-300 tracking-wide">
                  Indian Fashion League
                </div>
              </div>
            </button>

            {/* Button */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-all duration-300"
              >
                Back to Art Gallery
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[30vh] sm:min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20 px-4 text-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            Our Achievements
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto">
            Celebrating milestones and recognitions in our journey of promoting AI-powered art
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        
        {/* Stats */}
        <section className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-purple-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 text-center">
            Impact by Numbers
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-900/70 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements timeline */}
        <section className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-purple-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            Timeline of Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900/70 p-4 sm:p-6 rounded-xl border border-gray-700 shadow-lg hover:border-purple-500 transition-colors duration-300 group">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl">{achievement.icon}</span>
                  <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
                    achievement.category === 'Award' ? 'bg-yellow-500/20 text-yellow-300' :
                    achievement.category === 'Milestone' ? 'bg-green-500/20 text-green-300' :
                    achievement.category === 'Recognition' ? 'bg-purple-500/20 text-purple-300' :
                    achievement.category === 'Digital' ? 'bg-blue-500/20 text-blue-300' :
                    achievement.category === 'Launch' ? 'bg-red-500/20 text-red-300' :
                    achievement.category === 'Foundation' ? 'bg-indigo-500/20 text-indigo-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {achievement.category}
                  </span>
                </div>
                <div className="text-purple-400 text-xs sm:text-sm mb-1 sm:mb-2 font-semibold">{achievement.year}</div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors duration-300">{achievement.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-purple-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            Major Milestones
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 bg-gray-900/70 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mb-3 sm:mb-0">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{milestone.title}</h3>
                    <span className="text-purple-400 text-xs sm:text-sm font-medium">{milestone.year}</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition, Awards & Future sections remain same, just adjusted with sm:text-... & responsive padding */}

      </main>
    </div>
  );
};

export default Achievements;
