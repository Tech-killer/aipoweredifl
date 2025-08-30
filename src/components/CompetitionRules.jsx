import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompetitionRules = () => {
  const navigate = useNavigate();

  const competitionRules = {
    general: [
      "All artwork must be original and created solely by the participant.",
      "Submissions must be received by the specified deadline to be eligible.",
      "Artwork should follow the theme specified for the competition.",
      "Digital and traditional media are both acceptable.",
      "Each participant can submit up to 3 pieces of artwork.",
      "Judges' decisions are final and cannot be appealed.",
      "Winners will be notified via email and announced on our website.",
      "By entering, participants agree to have their work displayed in our gallery.",
      "Artwork containing offensive or inappropriate content will be disqualified.",
      "Participants must be at least 18 years old or have parental consent.",
      "All submitted artwork must be available for exhibition for at least 3 months.",
      "The organization reserves the right to use submitted artwork for promotional purposes."
    ],
    technical: [
      "Digital files must be in JPEG or PNG format, minimum 3000px on the longest side.",
      "Video submissions must be in MP4 format, maximum 5 minutes duration.",
      "For physical artwork, high-quality photographs must be submitted for initial judging.",
      "File size must not exceed 20MB for images and 100MB for videos.",
      "Each file must be named with the artist's name and artwork title.",
      "Include a description of the artwork (max 200 words) with each submission."
    ],
    judging: [
      "Artwork will be judged on creativity, originality, technical skill, and adherence to theme.",
      "There will be three rounds of judging by a panel of professional artists.",
      "Judging criteria will be made available to all participants before submission.",
      "Community voting will account for 20% of the final score in select categories.",
      "Winners will be selected in multiple categories including Best Technical Skill and Most Innovative Concept."
    ]
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="w-full transition-all duration-500 bg-gray-900/90 backdrop-blur-lg shadow-2xl border-b border-purple-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between h-auto sm:h-20 items-center py-3 sm:py-0 space-y-3 sm:space-y-0">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="https://i.postimg.cc/76srhKx4/ArtWork.png"
                alt="AI Powered Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 mr-3 rounded-full shadow-lg border-2 border-purple-500 bg-white object-contain"
              />
              <div className="text-left">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Powered
                </span>
                <div className="text-xs sm:text-sm font-bold text-gray-300 tracking-wide">
                  Indian Fashion League
                </div>
              </div>
            </button>

            {/* Button */}
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-all duration-300"
              >
                Back to Art Gallery
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[30vh] sm:min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            Competition Rules
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Official guidelines and requirements for our AI-powered art competition
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-purple-900/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(competitionRules).map(([key, rules]) => (
              <div key={key} className="bg-gray-900/70 p-5 sm:p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-purple-300">
                  {key === 'general'
                    ? 'General Guidelines'
                    : key === 'technical'
                    ? 'Technical Requirements'
                    : 'Judging Criteria'}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  {rules.map((rule, index) => (
                    <li key={`${key}-${index}`} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>

                {key === 'judging' && (
                  <div className="mt-6 bg-purple-900/30 p-4 rounded-lg border border-purple-700/50">
                    <h4 className="font-medium text-purple-200 mb-2 text-sm sm:text-base">
                      Scoring Breakdown
                    </h4>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      {[
                        ['Creativity (30%)', '30 pts'],
                        ['Technical Skill (25%)', '25 pts'],
                        ['Originality (25%)', '25 pts'],
                        ['Theme Adherence (20%)', '20 pts']
                      ].map(([label, points]) => (
                        <div key={label} className="flex justify-between">
                          <span>{label}</span>
                          <span>{points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-5 sm:p-6 rounded-xl border border-purple-800/50">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Submission Process</h3>
              <ol className="text-gray-300 text-sm space-y-2">
                <li>1. Register for an account on our platform</li>
                <li>2. Complete the artist profile section</li>
                <li>3. Upload your artwork following technical guidelines</li>
                <li>4. Fill out the submission form with artwork details</li>
                <li>5. Submit before the deadline</li>
                <li>6. Await confirmation email</li>
              </ol>
            </div>
            <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-5 sm:p-6 rounded-xl border border-indigo-800/50">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Important Dates</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Submission Opens:</span>
                  <span className="text-purple-300">January 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Submission Deadline:</span>
                  <span className="text-purple-300">March 31, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Judging Period:</span>
                  <span className="text-purple-300">April 1-30, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Winners Announced:</span>
                  <span className="text-purple-300">May 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompetitionRules;
