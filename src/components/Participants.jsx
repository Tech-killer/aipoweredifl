import React from 'react';
import { useNavigate } from 'react-router-dom';

const Participants = () => {
  const navigate = useNavigate();

  const participants = [
    { name: "Alex Johnson", prize: "1st Place", image: "https://randomuser.me/api/portraits/women/44.jpg", artwork: "Digital Dreams", score: 95 },
    { name: "Sam Wilson", prize: "2nd Place", image: "https://randomuser.me/api/portraits/men/32.jpg", artwork: "Urban Symphony", score: 92 },
    { name: "Taylor Smith", prize: "3rd Place", image: "https://randomuser.me/api/portraits/women/68.jpg", artwork: "Nature's Canvas", score: 90 },
    { name: "Jordan Lee", prize: "Honorable Mention", image: "https://randomuser.me/api/portraits/men/75.jpg", artwork: "Abstract Reality", score: 87 },
    { name: "Casey Kim", prize: "People's Choice", image: "https://randomuser.me/api/portraits/women/63.jpg", artwork: "Cosmic Journey", score: 85 },
    { name: "Riley Chen", prize: "Best Technique", image: "https://randomuser.me/api/portraits/women/22.jpg", artwork: "Pixel Perfect", score: 88 },
    { name: "Morgan Taylor", prize: "Most Innovative", image: "https://randomuser.me/api/portraits/men/45.jpg", artwork: "Future Vision", score: 86 },
    { name: "Jamie Wong", prize: "Emerging Artist", image: "https://randomuser.me/api/portraits/women/33.jpg", artwork: "New Horizons", score: 83 },
    { name: "Drew Bennett", prize: "Jury Selection", image: "https://randomuser.me/api/portraits/men/88.jpg", artwork: "Artistic Flow", score: 84 },
    { name: "Pat Quinn", prize: "Community Favorite", image: "https://randomuser.me/api/portraits/women/55.jpg", artwork: "Shared Dreams", score: 82 },
    { name: "Chris Evans", prize: "Special Recognition", image: "https://randomuser.me/api/portraits/men/12.jpg", artwork: "Bold Strokes", score: 81 },
    { name: "Robin Banks", prize: "Technical Excellence", image: "https://randomuser.me/api/portraits/women/77.jpg", artwork: "Precision Art", score: 89 },
    { name: "Terry Crews", prize: "Creative Vision", image: "https://randomuser.me/api/portraits/men/99.jpg", artwork: "Imaginative World", score: 85 },
    { name: "Dana Scully", prize: "Narrative Depth", image: "https://randomuser.me/api/portraits/women/88.jpg", artwork: "Story in Pixels", score: 84 },
    { name: "Fox Mulder", prize: "Experimental Award", image: "https://randomuser.me/api/portraits/men/77.jpg", artwork: "Unknown Territory", score: 83 }
  ];

  // safe fallback object (in case array is shorter)
  const fallback = {
    name: '—',
    prize: '—',
    image: 'https://via.placeholder.com/200?text=No+Image',
    artwork: '—',
    score: '—'
  };

  const first = participants[0] ?? fallback;
  const second = participants[1] ?? fallback;
  const third = participants[2] ?? fallback;
  const otherWinners = participants.slice(3);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      {/* NAV */}
      <nav className="w-full bg-gray-900/95 backdrop-blur-lg sticky top-0 z-50 border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 w-full sm:w-auto text-left hover:opacity-90 transition"
              aria-label="Back to home"
            >
              <img
                src="https://i.postimg.cc/76srhKx4/ArtWork.png"
                alt="AI Powered Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-md border-2 border-purple-500 bg-white object-cover"
              />
              <div className="leading-tight">
                <div className="text-lg sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  AI Powered
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-semibold">Indian Fashion League</div>
              </div>
            </button>

            <div className="w-full sm:w-auto">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto mt-1 sm:mt-0 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-sm sm:text-base font-semibold transition"
                aria-label="Back to Art Gallery"
              >
                Back to Art Gallery
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative py-8 sm:py-12 bg-gradient-to-br from-gray-900 via-purple-900/10 to-indigo-900/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
            Participants & Prize Winners
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating our talented artists and their outstanding achievements — browse winners, recognitions and stats.
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* TOP 3 */}
        <section className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-purple-900/50">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
            Top 3 Winners
          </h2>

          {/* layout: mobile = vertical stack (first, second, third),
              md+ = grid with 3 columns where first is centered */}
          <div className="flex flex-col md:grid md:grid-cols-3 items-start md:items-end gap-6">
            {/* First (center on md) */}
            <div className="w-full md:col-start-2 flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={first.image}
                  alt={first.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-yellow-400"
                />
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="mt-3 text-lg sm:text-xl md:text-2xl font-bold">{first.name}</h3>
              <p className="text-sm sm:text-base text-gray-300">{first.artwork}</p>
              <p className="text-sm text-gray-400 mt-1">Score: {first.score}/100</p>
              <div className="mt-4 px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white font-semibold">
                {first.prize}
              </div>
            </div>

            {/* Second (left on md) */}
            <div className="w-full md:col-start-1 flex flex-col items-center md:items-center text-center">
              <div className="relative">
                <img
                  src={second.image}
                  alt={second.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-gray-400"
                />
                <div className="absolute -top-2 -right-2 bg-gray-400 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              </div>
              <h4 className="mt-3 text-base sm:text-lg font-bold">{second.name}</h4>
              <p className="text-sm text-gray-300">{second.artwork}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Score: {second.score}/100</p>
              <div className="mt-3 px-4 py-1.5 bg-gray-600 text-white rounded-md text-sm font-semibold">
                {second.prize}
              </div>
            </div>

            {/* Third (right on md) */}
            <div className="w-full md:col-start-3 flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={third.image}
                  alt={third.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-amber-700"
                />
                <div className="absolute -top-2 -right-2 bg-amber-700 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              </div>
              <h4 className="mt-3 text-base sm:text-lg font-bold">{third.name}</h4>
              <p className="text-sm text-gray-300">{third.artwork}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Score: {third.score}/100</p>
              <div className="mt-3 px-4 py-1.5 bg-amber-700 text-white rounded-md text-sm font-semibold">
                {third.prize}
              </div>
            </div>
          </div>
        </section>

        {/* Other winners */}
        <section className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-900/50">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300 text-center">
            Other Prize Winners
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherWinners.map((p, idx) => (
              <div key={idx} className="bg-gray-900/70 p-3 rounded-lg border border-gray-700 hover:border-purple-500 transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm md:text-base font-semibold text-white truncate">{p.name}</div>
                    <div className="text-xs md:text-sm text-purple-300">{p.prize}</div>
                    <div className="text-xs text-gray-400 truncate">{p.artwork}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Score: {p.score}/100</div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Recognitions (stack on mobile) */}
        <section className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-900/50">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Special Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-800/40">
              <h4 className="font-semibold text-white mb-2">Emerging Talent</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Young Artist Award: Jamie Wong</li>
                <li>• Student Excellence: Riley Chen</li>
                <li>• First-Time Participant: Morgan Taylor</li>
              </ul>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-800/40">
              <h4 className="font-semibold text-white mb-2">Technical Awards</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Best Digital Art: Alex Johnson</li>
                <li>• Traditional Mastery: Sam Wilson</li>
                <li>• Innovative Medium: Taylor Smith</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistics (compact on mobile) */}
        <section className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-900/50">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Competition Statistics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Total Participants</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">15</div>
              <div className="text-xs sm:text-sm text-gray-300">Prize Categories</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">1000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Submissions</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Participants;
