import React, { useState } from 'react';
import Smith from '../conjuntos/Smith';
import Hack from '../conjuntos/Hack';
import Calça from '../calças/Calça';
import CalçaAfundo from '../calças/CalçaAfundo';
import SubFooter from '../footer/SubFooter';
import Footer from '../footer/Footer';
import './estilo.css';

const SectioHome = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Controlando o estado de preenchimento
  };

  return (
    <div>
      <section className="group">
      <Smith />
        <Hack />
        <Calça />
        <CalçaAfundo />
      </section>
      <section>
        <SubFooter />
        <Footer />
      </section>
    </div>
  );
};

export default SectioHome;
