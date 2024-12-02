import React, { useState } from 'react';
import image from '../images/image-2.jpg';
import images from '../images/img-2.jpg';
import './estilo.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const ImageSmith = () => {
  const img = [image, images];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-container">
      <FaAngleLeft className="icon-left" onClick={handlePrevious} />
      <img src={img[currentIndex]} alt="fitness" className="image-1" />
      <FaAngleRight className="icon-right" onClick={handleNext} />
    </div>
  );
};

export default ImageSmith;
