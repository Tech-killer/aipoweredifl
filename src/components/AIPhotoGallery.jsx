import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Heart, Download, Maximize2 } from 'lucide-react';

const AIPhotoGallery = () => {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPhotos, setLikedPhotos] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [visiblePhotos, setVisiblePhotos] = useState(8);
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  // Shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Fetch photos from backend
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setIsInitialLoading(true);
        const res = await fetch("https://aipowered5f.com/kapil/backend/photos_api.php");
        const data = await res.json();
        const shuffledData = shuffleArray(data);
        setGalleryPhotos(shuffledData);
      } catch (err) {
        console.error("Error fetching photos:", err);
      } finally {
        setIsInitialLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  // Search filter
  const filteredPhotos = galleryPhotos.filter(photo => {
    const titleMatch = (photo.title || "").toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch;
  });

  const visibleFilteredPhotos = filteredPhotos.slice(0, visiblePhotos);

  const toggleLike = (photoId) => {
    setLikedPhotos(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(photoId)) {
        newLiked.delete(photoId);
      } else {
        newLiked.add(photoId);
      }
      return newLiked;
    });
  };

  const loadMorePhotos = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePhotos(prev => prev + 8);
      setIsLoading(false);
    }, 500);
  };

  const showLessPhotos = () => setVisiblePhotos(8);

  const openModal = (photo) => setSelectedPhoto(photo);
  const closeModal = () => setSelectedPhoto(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 h-auto py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-center sm:text-left">
            AI Photo Gallery
          </h1>

          {/* Search + Back button */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
              />
            </div>
            <button 
              onClick={() => navigate('/')} 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm w-full sm:w-auto"
            >
              Back to Art Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isInitialLoading ? (
          // Loader
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Loading stunning AI-generated artwork...
              </h3>
              <p className="text-gray-400 animate-pulse">
                Preparing your visual journey through creativity
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        ) : visibleFilteredPhotos.length === 0 ? (
          <p className="text-center text-gray-400">No photos found.</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {visibleFilteredPhotos.map((photo, index) => (
              <div
                key={photo.id || index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer break-inside-avoid mb-6"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  onClick={() => openModal(photo)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Like + View buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-md transition-all ${
                      likedPhotos.has(photo.id)
                        ? 'bg-red-500/80 text-white'
                        : 'bg-black/50 text-white hover:bg-red-500/80'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={likedPhotos.has(photo.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(photo);
                    }}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-blue-500/80 backdrop-blur-md transition-all"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/60">
                  <h3 className="text-lg font-bold">{photo.title || "Untitled"}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More / Show Less */}
        {!isInitialLoading && (
          <div className="text-center mt-12 space-y-4">
            {visiblePhotos < filteredPhotos.length && (
              <button 
                onClick={loadMorePhotos}
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mr-0 sm:mr-4"
              >
                {isLoading ? 'Loading...' : 'Load More Photos'}
              </button>
            )}
            {visiblePhotos > 8 && (
              <button 
                onClick={showLessPhotos}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Show Less Photos
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-full rounded-2xl bg-gray-900 shadow-2xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col lg:flex-row max-h-full">
              {/* Image */}
              <div className="flex-1 flex items-center justify-center bg-black p-4">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
              {/* Details */}
              <div className="w-full lg:w-96 p-6 space-y-4 overflow-y-auto max-h-[50vh] lg:max-h-full">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title || "Untitled"}</h2>
                <p className="text-gray-300">Season: {selectedPhoto.season_id || "N/A"}</p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => toggleLike(selectedPhoto.id)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      likedPhotos.has(selectedPhoto.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="w-5 h-5 inline mr-2" fill={likedPhotos.has(selectedPhoto.id) ? 'currentColor' : 'none'} />
                    {likedPhotos.has(selectedPhoto.id) ? 'Liked' : 'Like'}
                  </button>
                  <a
                    href={selectedPhoto.url}
                    download
                    className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                  >
                    <Download className="w-5 h-5 inline mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIPhotoGallery;
