import React, { useState, useEffect, useRef } from "react";

const Photo = () => {
  const [photos] = useState([
    { id: 1, src: "https://www.milesit.com/wp-content/uploads/shutterstock_1663029574.jpg" },
    { id: 2, src: "https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models" },
    { id: 3, src: "https://edure.in/wp-content/uploads/2025/02/ai-tools.webp" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  // Load Swiper
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js";
    script.onload = () => {
      if (window.Swiper && swiperRef.current && photos.length > 0) {
        initSwiper();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.Swiper && swiperRef.current && photos.length > 0) {
      initSwiper();
    }
  }, [photos]);

  const initSwiper = () => {
    if (swiperRef.current.swiper) {
      swiperRef.current.swiper.destroy();
    }

    new window.Swiper(swiperRef.current, {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      effect: "slide",
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: function () {
          setCurrentIndex(this.realIndex);
        },
        init: function () {
          setCurrentIndex(this.realIndex);
        },
      },
    });
  };

  return (
    <div className="relative w-full mx-auto my-4">
      <div
        className="swiper rounded-lg overflow-hidden bg-black h-[400px] sm:h-[300px]"
        ref={swiperRef}
      >
        <div className="swiper-wrapper">
          {photos.map((photo) => (
            <div key={photo.id} className="swiper-slide relative">
              <img
                src={photo.src}
                alt={`Slide ${photo.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* Pagination */}
        <div className="swiper-pagination !bottom-3"></div>
      </div>

      {/* Custom Arrow Styling */}
      <style>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 22px !important;
          color: white !important;
          font-weight: bold;
        }

        .swiper-button-prev,
        .swiper-button-next {
          position: absolute !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 56px !important;
          height: 56px !important;
          margin: 0 !important;
          border-radius: 50% !important;
          background: rgba(0, 0, 0, 0.5) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 10 !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }

        .swiper-button-prev {
          left: 8px !important;
        }

        .swiper-button-next {
          right: 8px !important;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Photo;
