import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, Users, Trophy, Eye, ChevronDown, TrendingUp, Award, Star, Zap, Target, Globe } from 'lucide-react';

const SeasonSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('season1');
  const [showAllSeasons, setShowAllSeasons] = useState(false);

  const handleCardClick = (cardTitle) => {
    if (cardTitle === 'Artwork Gallery') {
      navigate('/');
    } else if (cardTitle === 'Portfolio Gallery') {
      navigate('/');
    }
    // Add other card actions as needed
  };

  const seasons = {
    season1: {
      id: 1,
      title: "Season 1",
      status: "Live",
      statusColor: "bg-emerald-500",
      accent: "emerald",
      startDate: "Apr 15th 2025",
      endDate: "Sep 30, 2025",
      theme: "Traditional Meets Future",
      description: "Where robotic innovation merges with cultural heritage - traditional bangles reimagined through cutting-edge fashion design.",
      participants: "2,847",
      prizePool: "$50,000",
      difficulty: "Intermediate",
      progress: 68,
      featured: true,
      cards: [
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_1.jpg",
          title: "Artwork Gallery",
          subtitle: "Explore Designs",
          icon: <Sparkles className="w-5 h-5" />,
          action: "Browse",
          stats: "450+ Designs",
          color: "from-violet-500 to-purple-600"
        },
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_2.jpg",
          title: "Register Now",
          subtitle: "Join the Movement",
          icon: <Users className="w-5 h-5" />,
          action: "Register",
          stats: "Limited Spots",
          color: "from-blue-500 to-cyan-600"
        },
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_2.jpg",
          title: "Live Updates",
          subtitle: "Stay Connected",
          icon: <TrendingUp className="w-5 h-5" />,
          action: "Follow",
          stats: "Real-time",
          color: "from-orange-500 to-red-600"
        }
      ]
    },
    season2: {
      id: 2,
      title: "Season 2",
      status: "Coming Soon",
      statusColor: "bg-blue-500",
      accent: "blue",
      startDate: "Oct 15th 2025",
      endDate: "Mar 30, 2026",
      theme: "Sustainable Luxury",
      description: "Pioneering eco-conscious fashion with premium materials - where sustainability meets high-end design innovation.",
      participants: "Pre-registration",
      prizePool: "$75,000",
      difficulty: "Advanced",
      progress: 0,
      featured: false,
      cards: [
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_1.jpg",
          title: "Eco Materials",
          subtitle: "Sustainable Focus",
          icon: <Globe className="w-5 h-5" />,
          action: "Preview",
          stats: "100% Eco",
          color: "from-green-500 to-emerald-600"
        },
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_2.jpg",
          title: "Early Access",
          subtitle: "Be First",
          icon: <Trophy className="w-5 h-5" />,
          action: "Reserve",
          stats: "VIP Only",
          color: "from-amber-500 to-yellow-600"
        },
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_2.jpg",
          title: "Luxury Line",
          subtitle: "Premium Collection",
          icon: <Award className="w-5 h-5" />,
          action: "Explore",
          stats: "Exclusive",
          color: "from-rose-500 to-pink-600"
        }
      ]
    },
    season3: {
      id: 3,
      title: "Season 3",
      status: "Planned",
      statusColor: "bg-purple-500",
      accent: "purple",
      startDate: "Apr 1st 2026",
      endDate: "Sep 15, 2026",
      theme: "Digital Renaissance",
      description: "Merging digital artistry with classical design principles - reimagining timeless aesthetics through AI-powered creativity.",
      participants: "TBA",
      prizePool: "$100,000",
      difficulty: "Expert",
      progress: 0,
      featured: false,
      cards: [
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_1.jpg",
          title: "AI Collaboration",
          subtitle: "Future Design",
          icon: <Zap className="w-5 h-5" />,
          action: "Learn",
          stats: "AI-Powered",
          color: "from-indigo-500 to-purple-600"
        },
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_2.jpg",
          title: "Masterclass",
          subtitle: "Expert Training",
          icon: <Target className="w-5 h-5" />,
          action: "Enroll",
          stats: "Limited",
          color: "from-teal-500 to-cyan-600"
        },
        {
          image: "https://aipowered5f.com/app_theme/assets/images/seasons/img2_2.jpg",
          title: "Grand Prize",
          subtitle: "Ultimate Challenge",
          icon: <Trophy className="w-5 h-5" />,
          action: "Compete",
          stats: "$100K",
          color: "from-orange-500 to-red-600"
        }
      ]
    }
  };

  const currentSeason = seasons[activeTab];
  const allSeasonsArray = Object.values(seasons);

  return (
    <section id="competition" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 sm:w-64 sm:h-64 lg:-top-32 lg:-left-32 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 lg:-bottom-32 lg:-right-32 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Premium Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">DESIGN EXCELLENCE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Design Seasons
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Elevate your creative journey through meticulously curated design challenges 
            that define the future of digital artistry
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2">
            <button
              onClick={() => setShowAllSeasons(!showAllSeasons)}
              className="group flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 text-white font-semibold text-sm sm:text-base"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">{showAllSeasons ? 'Focus Mode' : 'Overview Mode'}</span>
              <span className="sm:hidden">{showAllSeasons ? 'Focus' : 'Overview'}</span>
              <ChevronDown className={`w-4 h-4 ml-2 sm:ml-3 transition-transform duration-300 ${showAllSeasons ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {!showAllSeasons ? (
          <>
            {/* Premium Tab Navigation */}
            <div className="flex justify-center mb-12 sm:mb-16">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 sm:p-3 w-full max-w-lg">
                <div className="flex space-x-1 sm:space-x-2">
                  {Object.entries(seasons).map(([key, season]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`relative flex-1 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center space-x-1 sm:space-x-3 overflow-hidden text-sm sm:text-base ${
                        activeTab === key
                          ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-2xl scale-105 transform'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {activeTab === key && (
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm"></div>
                      )}
                      <span className="relative z-10 hidden sm:inline">{season.title}</span>
                      <span className="relative z-10 sm:hidden">S{season.id}</span>
                      {season.featured && <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 relative z-10" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Enhanced Season Info Panel */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Header Section */}
                    <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">{currentSeason.title}</h3>
                        
                        <div className={`inline-flex items-center ${currentSeason.statusColor} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg border border-white/20 text-sm sm:text-base`}>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                          {currentSeason.status}
                        </div>

                        {/* Progress Bar for Live Season */}
                        {currentSeason.progress > 0 && (
                          <div className="mt-6">
                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                              <span>Season Progress</span>
                              <span>{currentSeason.progress}%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${currentSeason.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                      {/* Theme Display */}
                      <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">{currentSeason.theme}</h4>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{currentSeason.description}</p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl p-4 sm:p-6 text-center">
                          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-emerald-400" />
                          <p className="text-emerald-400 text-xs sm:text-sm font-medium mb-1">Prize Pool</p>
                          <p className="text-2xl sm:text-3xl font-bold text-white">{currentSeason.prizePool}</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-4 sm:p-6 text-center">
                          <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-400" />
                          <p className="text-blue-400 text-xs sm:text-sm font-medium mb-1">Participants</p>
                          <p className="text-2xl sm:text-3xl font-bold text-white">{currentSeason.participants}</p>
                        </div>
                      </div>

                      {/* Date Information */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                            <span className="text-gray-300 text-sm sm:text-base">Start Date</span>
                          </div>
                          <span className="text-white font-semibold text-sm sm:text-base">{currentSeason.startDate}</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3" />
                            <span className="text-gray-300 text-sm sm:text-base">End Date</span>
                          </div>
                          <span className="text-white font-semibold text-sm sm:text-base">{currentSeason.endDate}</span>
                        </div>
                      </div>

                      {/* Difficulty Badge */}
                      <div className="text-center">
                        <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2 sm:mr-3" />
                          <span className="text-purple-400 text-xs sm:text-sm font-medium mr-2">Difficulty:</span>
                          <span className="text-white font-bold text-sm sm:text-base">{currentSeason.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Cards Section */}
              <div className="lg:col-span-3">
                <div className="grid gap-6 sm:gap-8">
                  {currentSeason.cards.map((card, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
                    >
                      <div className="grid md:grid-cols-5 gap-0">
                        {/* Image Section */}
                        <div className="md:col-span-2 relative overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 sm:h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-60"></div>
                          
                          {/* Floating Badge */}
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/50 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 border border-white/20">
                            <span className="text-white text-xs sm:text-sm font-semibold">{card.stats}</span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                          <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${card.color} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {card.icon}
                          </div>
                          
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                            {card.title}
                          </h3>
                          
                          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                            {card.subtitle}
                          </p>
                          
                          <button 
                            onClick={() => handleCardClick(card.title)}
                            className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${card.color} hover:scale-105 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl text-sm sm:text-base`}
                          >
                            {card.action}
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Description */}
            <div className="mt-16 sm:mt-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
                <div className="relative z-10">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-gray-300 mb-6 sm:mb-8">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-emerald-400" />
                        <span className="font-semibold text-sm sm:text-base">6 Month Journey</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-400" />
                        <span className="font-semibold text-sm sm:text-base">Global Community</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-400" />
                        <span className="font-semibold text-sm sm:text-base">Elite Recognition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* All Seasons Overview */
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Complete Season Timeline</h3>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Explore our comprehensive journey through creative excellence
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allSeasonsArray.map((season) => (
                <div
                  key={season.id}
                  className={`relative bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                    season.featured ? 'ring-2 ring-emerald-400/50' : ''
                  }`}
                >
                  {season.featured && (
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full p-2 sm:p-3 shadow-lg z-10">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  )}

                  {/* Header */}
                  <div className="p-6 sm:p-8 text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-b border-white/10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{season.title}</h3>
                    <div className={`inline-flex items-center ${season.statusColor} text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold`}>
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      {season.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{season.theme}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{season.description}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-emerald-400" />
                        <p className="text-emerald-400 text-xs font-medium">Prize</p>
                        <p className="text-white font-bold text-sm sm:text-base">{season.prizePool}</p>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-blue-400" />
                        <p className="text-blue-400 text-xs font-medium">Level</p>
                        <p className="text-white font-bold text-sm sm:text-base">{season.difficulty}</p>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="space-y-2 sm:space-y-3 text-sm">
                      <div className="flex justify-between p-2 sm:p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400">Start</span>
                        <span className="text-white font-semibold">{season.startDate}</span>
                      </div>
                      <div className="flex justify-between p-2 sm:p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400">End</span>
                        <span className="text-white font-semibold">{season.endDate}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab(`season${season.id}`);
                        setShowAllSeasons(false);
                      }}
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                      Explore Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call-to-Action Section */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:justify-center lg:gap-8">
          <button 
            onClick={() => setShowAllSeasons(!showAllSeasons)}
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <span className="relative z-10 flex items-center justify-center text-base sm:text-lg">
              {showAllSeasons ? 'Deep Dive Mode' : 'Complete Overview'}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4 transition-transform group-hover:translate-x-2" />
            </span>
          </button>

          <button 
            onClick={() => navigate('/')}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl font-bold transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center text-base sm:text-lg">
              Portfolio Gallery
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4 transition-transform group-hover:rotate-12" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeasonSection;
