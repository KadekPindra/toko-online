import React, { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
  className?: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Move to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="w-full bg-white shadow-2xl border-2 rounded-2xl flex justify-center h-full">
      <div className={`relative ${className}`} >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          
        >
          <img className="w-full h-full rounded-lg" src={image} />
        </div>
      ))}
      {/* Tombol panah sebelumnya */}
      <button
        className="absolute top-1/2 left-4  transform -translate-y-1/2 text-white text-4xl"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      {/* Tombol panah berikutnya */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default Slideshow;
