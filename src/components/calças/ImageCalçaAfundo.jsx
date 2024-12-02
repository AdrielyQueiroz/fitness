import React, { useState } from 'react';
import calça from '../images/calça-preta-1.jpg';
import calçapreta from '../images/calça-preta-2.jpg';
import calçafitness from '../images/calça-preta-3.jpg';
// import './estilo.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const ImageHack = () => {
  const img = [calça, calçapreta, calçafitness];
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
      <img src={img[currentIndex]} alt="fitness" className="image-2" />
      <FaAngleRight className="icon-right" onClick={handleNext} />
    </div>
  );
};

export default ImageHack;