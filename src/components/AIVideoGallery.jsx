import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Heart, Download, Play, Pause, Maximize2 } from 'lucide-react';

const AIVideoGallery = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [playingVideos, setPlayingVideos] = useState(new Set());
  const [visibleVideos, setVisibleVideos] = useState(8);
  const [galleryVideos, setGalleryVideos] = useState([]);

  const videoRefs = useRef({});

  // Fisher-Yates shuffle
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://aipowered5f.com/ifl/backend/get_videos.php");
        const videos = await response.json();
        setGalleryVideos(shuffleArray(videos));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
      setIsLoading(false);
    };
    fetchVideos();
  }, []);

  const filteredVideos = galleryVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleLike = (videoId) =>
    setLikedVideos((prev) => {
      const newLiked = new Set(prev);
      newLiked.has(videoId) ? newLiked.delete(videoId) : newLiked.add(videoId);
      return newLiked;
    });

  const togglePlay = (videoId, event) => {
    event.stopPropagation();
    setPlayingVideos((prev) => {
      const newPlaying = new Set(prev);
      if (newPlaying.has(videoId)) {
        newPlaying.delete(videoId);
        videoRefs.current[videoId]?.pause();
      } else {
        newPlaying.clear();
        Object.values(videoRefs.current).forEach((vid) => vid?.pause());
        newPlaying.add(videoId);
        videoRefs.current[videoId]?.play().catch(() => {});
      }
      return newPlaying;
    });
  };

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => {
    setSelectedVideo(null);
    setPlayingVideos(new Set());
    Object.values(videoRefs.current).forEach((vid) => vid?.pause());
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading videos...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 h-auto py-4 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            AI Video Gallery
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
              />
            </div>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition font-semibold text-sm"
            >
              Back to Art Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.slice(0, visibleVideos).map((video, i) => (
            <div
              key={video.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}
              onClick={() => openModal(video)}
            >
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.videoUrl}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                playsInline
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* play/pause button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => togglePlay(video.id, e)}
                  className="p-4 bg-blue-500/80 text-white rounded-full hover:bg-blue-600/80 transition"
                >
                  {playingVideos.has(video.id) ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8" />
                  )}
                </button>
              </div>

              {/* like + expand */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(video.id);
                  }}
                  className={`p-2 rounded-full ${
                    likedVideos.has(video.id)
                      ? 'bg-red-500/80 text-white'
                      : 'bg-black/50 text-white'
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={likedVideos.has(video.id) ? 'currentColor' : 'none'}
                  />
                </button>
                <button className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-500/80 transition">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* title + desc */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-sm sm:text-base">{video.title}</h3>
                <p className="text-xs sm:text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-4 flex-wrap">
            {visibleVideos < filteredVideos.length && (
              <button
                onClick={() =>
                  setVisibleVideos((prev) =>
                    Math.min(prev + 8, filteredVideos.length)
                  )
                }
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:scale-105 transition text-sm sm:text-base"
              >
                Load More
              </button>
            )}
            {visibleVideos > 8 && (
              <button
                onClick={() => setVisibleVideos(8)}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-xl hover:scale-105 transition text-sm sm:text-base"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90">
          <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl bg-gray-900">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-64 sm:h-96 lg:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 sm:p-6 text-white">
                <h2 className="text-xl sm:text-2xl font-bold">{selectedVideo.title}</h2>
                <p className="text-gray-300 text-sm sm:text-base">{selectedVideo.description}</p>
                <div className="flex justify-between mt-4 text-gray-400 text-xs sm:text-sm">
                  <span>{selectedVideo.views} Views</span>
                  <span>{selectedVideo.likes} Likes</span>
                </div>
                <button
                  onClick={() => toggleLike(selectedVideo.id)}
                  className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm sm:text-base ${
                    likedVideos.has(selectedVideo.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  <Heart className="w-5 h-5 inline mr-2" />
                  {likedVideos.has(selectedVideo.id) ? 'Liked' : 'Like'}
                </button>
                <button className="mt-3 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-sm sm:text-base">
                  <Download className="w-5 h-5 inline mr-2" /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIVideoGallery;
