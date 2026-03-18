import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return <div>No images</div>;

  return (
    <div className="image-carousel">
      <img src={images[current]} alt={`carousel-${current}`} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
      <div style={{ marginTop: '0.5rem' }}>
        <button className="carousel-btn" onClick={prevImage}>&lt;</button>
        <button className="carousel-btn" onClick={nextImage}>&gt;</button>
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{current + 1} / {images.length}</div>
    </div>
  );
};

export default ImageCarousel;
