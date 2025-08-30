import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AIPhotoSection = () => {
  const navigate = useNavigate();
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleItems, setVisibleItems] = useState(8);
  const [apiPhotos, setApiPhotos] = useState([]);
  const [apiVideos, setApiVideos] = useState([]);
  const [mixedContent, setMixedContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingVideos, setPlayingVideos] = useState(new Set());

  const videoRefs = useRef({});

  // Fallback content
  const fallbackPhotos = [
    { id: 1, title: "Tropical Paradise", description: "AI-generated tropical sunset with palm trees", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Landscape", tags: ["Tropical", "Sunset", "Palms"] },
    { id: 2, title: "Ocean Mystery", description: "Deep sea creature in ethereal underwater scene", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Nature", tags: ["Ocean", "Marine", "Mystery"] },
    { id: 3, title: "Cosmic Feline", description: "Adorable cat with cosmic digital art background", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Fantasy", tags: ["Cat", "Cosmic", "Digital Art"] },
    { id: 4, title: "Autumn Dreams", description: "Delicate autumn leaf with morning dew drops", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Nature", tags: ["Autumn", "Macro", "Dew"] }
  ];

  const fallbackVideos = [
    { id: 1, title: "AI Video 1", videoPath: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "AI generated video content", category: "AI Generated", tags: ["AI", "Video", "Animation"] },
    { id: 2, title: "AI Video 2", videoPath: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", description: "AI generated video content", category: "AI Generated", tags: ["AI", "Video", "Creative"] },
    { id: 3, title: "AI Video 3", videoPath: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", description: "AI generated video content", category: "AI Generated", tags: ["AI", "Video", "Effects"] },
    { id: 4, title: "AI Video 4", videoPath: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", description: "AI generated video content", category: "AI Generated", tags: ["AI", "Video", "Adventure"] }
  ];

  // Shuffle function for randomizing content
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Video controls
  const handleVideoPlay = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (playingVideos.has(videoId)) {
        video.pause();
        setPlayingVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(videoId);
          return newSet;
        });
      } else {
        video.play();
        setPlayingVideos(prev => new Set(prev).add(videoId));
      }
    }
  };

  // Fetch photos and videos
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch photos
        const photoResponse = await fetch('https://aipowered5f.com/ifl/backend/photos_api.php');
        let photos = [];
        if (photoResponse.ok) {
          const photoData = await photoResponse.json();
          photos = Array.isArray(photoData) ? photoData.map((photo, index) => ({
            id: photo.id || index + 1,
            title: photo.title || `AI Photo ${index + 1}`,
            description: photo.description || `AI-generated artwork for Season ${photo.season_id || 'Unknown'}`,
            image: photo.url || photo.image_url || photo.image,
            category: photo.category || "AI Generated",
            tags: photo.tags ? (Array.isArray(photo.tags) ? photo.tags : photo.tags.split(',').map(tag => tag.trim())) : ["AI", "Art", "Generated"],
            type: 'photo',
            seasonId: photo.season_id,
            views: photo.views || Math.floor(Math.random() * 2000) + 100,
            likes: photo.likes || Math.floor(Math.random() * 200) + 10,
            downloads: photo.downloads || Math.floor(Math.random() * 100) + 5
          })) : [];
        }

        // Fetch videos
        const videoResponse = await fetch('https://aipowered5f.com/ifl/backend/get_videos.php');
        let videos = [];
        if (videoResponse.ok) {
          const videoData = await videoResponse.json();
          videos = Array.isArray(videoData) ? videoData.map((video, index) => ({
            id: video.id || index + 1,
            title: video.title || `AI Video ${index + 1}`,
            description: video.description || "AI-generated video content",
            videoPath: video.videoUrl || video.video_url || video.videoPath || video.url,
            category: video.category || "AI Generated",
            tags: video.tags ? (Array.isArray(video.tags) ? video.tags : video.tags.split(',').map(tag => tag.trim())) : ["AI", "Video", "Generated"],
            type: 'video',
            likes: video.likes || 0,
            views: video.views || 0,
            downloads: video.downloads || 0,
            duration: video.duration || "0:00",
            artist: video.artist || "Unknown"
          })) : [];
        }

        // Use fallback if no API data
        const finalPhotos = photos.length > 0 ? photos : fallbackPhotos.map(photo => ({ ...photo, type: 'photo' }));
        const finalVideos = videos.length > 0 ? videos : fallbackVideos.map(video => ({ ...video, type: 'video' }));

        setApiPhotos(finalPhotos);
        setApiVideos(finalVideos);

        // Create mixed content array - combine ALL photos and videos, then shuffle
        const allContent = [...finalPhotos, ...finalVideos];
        const shuffledAllContent = shuffleArray(allContent);
        setMixedContent(shuffledAllContent);

      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to load content');
        
        // Use fallback content on error
        const allFallbackPhotos = fallbackPhotos.map(photo => ({ ...photo, type: 'photo' }));
        const allFallbackVideos = fallbackVideos.map(video => ({ ...video, type: 'video' }));

        const allFallbackContent = [...allFallbackPhotos, ...allFallbackVideos];
        const shuffledFallbackContent = shuffleArray(allFallbackContent);
        setMixedContent(shuffledFallbackContent);
        setApiPhotos(allFallbackPhotos);
        setApiVideos(allFallbackVideos);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const ActionButton = ({ onClick, color, children }) => (
    <button onClick={onClick} className={`p-2 rounded-full ${color} backdrop-blur-md transition-all`}>
      {children}
    </button>
  );

  const Modal = ({ isOpen, onClose, children }) => isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-50 p-2 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );

  const LoadingSpinner = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-700 rounded-2xl h-64 w-full"></div>
          <div className="mt-4 space-y-2">
            <div className="bg-gray-700 h-4 rounded w-3/4"></div>
            <div className="bg-gray-700 h-3 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const ErrorMessage = ({ error, onRetry }) => (
    <div className="text-center py-12">
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-md mx-auto">
        <div className="text-red-400 mb-4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-red-400 mb-2">Error Loading Content</h3>
        <p className="text-gray-300 text-sm mb-4">Failed to load content from the server. Using fallback content.</p>
        <p className="text-gray-400 text-xs mb-4">Error: {error}</p>
        <button onClick={onRetry} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          Try Again
        </button>
      </div>
    </div>
  );

  // Mixed Gallery Item Component (handles both photos and videos)
  const MixedGalleryItem = ({ item, index, onClick }) => {
    const isLarge = index % 7 === 0;
    const isMedium = index % 5 === 0 && !isLarge;
    const height = isLarge ? '400px' : isMedium ? '320px' : '240px';
    
    return (
      <div className={`group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2' : isMedium ? 'md:row-span-2' : ''
      }`} onClick={onClick}>
        <div className="relative overflow-hidden">
          {item.type === 'photo' ? (
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              style={{ height }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }}
            />
          ) : (
            <div className="relative" style={{ height }}>
              <video 
                ref={el => videoRefs.current[item.id] = el}
                src={item.videoPath}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                muted
                loop
                preload="metadata"
                onLoadedData={(e) => {
                  // When video loads, seek to 1 second to show first frame
                  const video = e.target;
                  video.currentTime = 1;
                }}
                onError={(e) => {
                  console.log('Video failed to load:', item.videoPath);
                }}
              />
              {/* Video Play/Pause Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoPlay(item.id);
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors backdrop-blur-sm">
                  {playingVideos.has(item.id) ? (
                    <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              </button>

              {/* Video Duration Badge */}
              {item.duration && (
                <div className="absolute bottom-2 right-2">
                  <span className="px-2 py-1 text-xs bg-black/70 text-white rounded backdrop-blur-md">
                    {item.duration}
                  </span>
                </div>
              )}

              {/* Video Type Badge */}
              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 text-xs bg-red-500/80 text-white rounded-full backdrop-blur-md">
                  VIDEO
                </span>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ActionButton color="bg-red-500/20 text-red-400 hover:bg-red-500/80 hover:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </ActionButton>
            <ActionButton color="bg-blue-500/20 text-blue-400 hover:bg-blue-500/80 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4m-4 0l5.657 5.657m11.314 0L16 4m4 0v4m0-4h-4" />
              </svg>
            </ActionButton>
          </div>

          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-white text-sm rounded-full backdrop-blur-md ${
              item.type === 'photo' ? 'bg-purple-500/80' : 'bg-orange-500/80'
            }`}>
              {item.category}
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
          <p className="text-gray-300 text-sm mb-2">{item.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags?.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300">{tag}</span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <button className={`text-sm text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center ${
              item.type === 'photo' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-orange-600 hover:bg-orange-700'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View {item.type === 'photo' ? 'Image' : 'Video'}
            </button>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{item.views || Math.floor(Math.random() * 2000) + 100}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>{item.likes || Math.floor(Math.random() * 200) + 10}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4 4m0 0l4 4m-4-4h12" />
                </svg>
                <span>{item.downloads || Math.floor(Math.random() * 100) + 5}</span>
              </div>
              {item.type === 'video' && item.duration && (
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Photo Modal Component
  const PhotoModal = () => (
    <Modal isOpen={isPhotoModalOpen} onClose={() => setIsPhotoModalOpen(false)}>
      {selectedPhoto && (
        <div className="bg-gray-900 text-white">
          <div className="relative">
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
              <div className="flex flex-wrap gap-2">
                {selectedPhoto.tags?.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 mb-4">{selectedPhoto.description}</p>
            
            {/* Photo Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{selectedPhoto.views || 0}</div>
                <div className="text-sm text-gray-400">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{selectedPhoto.likes || 0}</div>
                <div className="text-sm text-gray-400">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{selectedPhoto.downloads || 0}</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Season {selectedPhoto.seasonId || "N/A"}</div>
                <div className="text-sm text-gray-400">Season ID</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-semibold">{selectedPhoto.category}</span>
              <div className="flex gap-2">
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">Download</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">Share</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );

  // Video Modal Component
  const VideoModal = () => (
    <Modal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)}>
      {selectedVideo && (
        <div className="bg-gray-900 text-white">
          <div className="relative">
            <video 
              src={selectedVideo.videoPath} 
              className="w-full h-96 object-cover" 
              controls 
              autoPlay
              onError={(e) => {
                console.log('Video failed to load in modal:', selectedVideo.videoPath);
              }}
            />
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
              <div className="flex flex-wrap gap-2">
                {selectedVideo.tags?.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
            
            {/* Video Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{selectedVideo.views || 0}</div>
                <div className="text-sm text-gray-400">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{selectedVideo.likes || 0}</div>
                <div className="text-sm text-gray-400">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{selectedVideo.downloads || 0}</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{selectedVideo.duration || "0:00"}</div>
                <div className="text-sm text-gray-400">Duration</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-orange-400 font-semibold">{selectedVideo.category}</span>
                {selectedVideo.artist && (
                  <span className="text-sm text-gray-400">by {selectedVideo.artist}</span>
                )}
              </div>
              <div className="flex gap-2">
                <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors">Download</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">Share</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );

  const retryFetch = () => {
    setError(null);
    setLoading(true);
    
    const fetchContent = async () => {
      try {
        // Fetch photos
        const photoResponse = await fetch('https://aipowered5f.com/ifl/backend/photos_api.php');
        let photos = [];
        if (photoResponse.ok) {
          const photoData = await photoResponse.json();
          photos = Array.isArray(photoData) ? photoData.map((photo, index) => ({
            id: photo.id || index + 1,
            title: photo.title || `AI Photo ${index + 1}`,
            description: photo.description || `AI-generated artwork for Season ${photo.season_id || 'Unknown'}`,
            image: photo.url || photo.image_url || photo.image,
            category: photo.category || "AI Generated",
            tags: photo.tags ? (Array.isArray(photo.tags) ? photo.tags : photo.tags.split(',').map(tag => tag.trim())) : ["AI", "Art", "Generated"],
            type: 'photo'
          })) : [];
        }

        // Fetch videos
        const videoResponse = await fetch('https://aipowered5f.com/ifl/backend/get_videos.php');
        let videos = [];
        if (videoResponse.ok) {
          const videoData = await videoResponse.json();
          videos = Array.isArray(videoData) ? videoData.map((video, index) => ({
            id: video.id || index + 1,
            title: video.title || `AI Video ${index + 1}`,
            description: video.description || "AI-generated video content",
            videoPath: video.videoUrl || video.video_url || video.videoPath || video.url,
            category: video.category || "AI Generated",
            tags: video.tags ? (Array.isArray(video.tags) ? video.tags : video.tags.split(',').map(tag => tag.trim())) : ["AI", "Video", "Generated"],
            type: 'video',
            likes: video.likes || 0,
            views: video.views || 0,
            downloads: video.downloads || 0,
            duration: video.duration || "0:00",
            artist: video.artist || "Unknown"
          })) : [];
        }

        // Use fallback if no API data
        const finalPhotos = photos.length > 0 ? photos : fallbackPhotos.map(photo => ({ ...photo, type: 'photo' }));
        const finalVideos = videos.length > 0 ? videos : fallbackVideos.map(video => ({ ...video, type: 'video' }));

        setApiPhotos(finalPhotos);
        setApiVideos(finalVideos);

        // Create mixed content array - combine ALL photos and videos, then shuffle
        const allContent = [...finalPhotos, ...finalVideos];
        const shuffledAllContent = shuffleArray(allContent);
        setMixedContent(shuffledAllContent);

      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to load content');
        
        // Use fallback content on error
        const allFallbackPhotos = fallbackPhotos.map(photo => ({ ...photo, type: 'photo' }));
        const allFallbackVideos = fallbackVideos.map(video => ({ ...video, type: 'video' }));

        const allFallbackContent = [...allFallbackPhotos, ...allFallbackVideos];
        const shuffledFallbackContent = shuffleArray(allFallbackContent);
        setMixedContent(shuffledFallbackContent);
        setApiPhotos(allFallbackPhotos);
        setApiVideos(allFallbackVideos);
      } finally {
        setLoading(false);
      }
    };
    
    fetchContent();
  };

  return (
    <section id="ai-photo" className="scroll-mt-24">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            AI Media Gallery
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {loading ? "Loading stunning AI-generated content..." : 
             error ? "Showing fallback content due to API error" :
             "Discover stunning AI-generated photos and videos from our exclusive collection"}
          </p>
          {error && (
            <div className="mt-4 text-sm text-yellow-400">
              ⚠️ Unable to load from API, displaying sample content
            </div>
          )}
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error && mixedContent.length === 0 ? (
          <ErrorMessage error={error} onRetry={retryFetch} />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {mixedContent.slice(0, visibleItems).map((item, index) => (
                <MixedGalleryItem 
                  key={`${item.type}-${item.id}`} 
                  item={item} 
                  index={index} 
                  onClick={() => {
                    if (item.type === 'photo') {
                      setSelectedPhoto(item);
                      setIsPhotoModalOpen(true);
                    } else {
                      setSelectedVideo(item);
                      setIsVideoModalOpen(true);
                    }
                  }} 
                />
              ))}
            </div>
            
            <div className="text-center mt-12 space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                {visibleItems > 8 && (
                  <button 
                    onClick={() => setVisibleItems(8)} 
                    className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center">
                      Show Less Content
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                    </span>
                  </button>
                )}
                <button 
                  onClick={() => navigate('/gallery')} 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  View Full Photos Gallery
                </button>
                                <button 
                  onClick={() => navigate('/videos')} 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  View Full Videos Gallery
                </button>
              </div>
              
              {/* Content Summary */}
              <div className="flex justify-center gap-8 text-sm text-gray-400 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>{mixedContent.filter(item => item.type === 'photo').length} Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>{mixedContent.filter(item => item.type === 'video').length} Videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span>{mixedContent.length} Total Items</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <PhotoModal />
      <VideoModal />
    </section>
  );
};

export default AIPhotoSection;
