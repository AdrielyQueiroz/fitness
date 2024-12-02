import React, { useState } from 'react'; 
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import './estilo.css';
import Smith from '../conjuntos/Smith';
import Hack from '../conjuntos/Hack';
import Calça from '../calças/Calça';
import CalçaAfundo from '../calças/CalçaAfundo';

const Navigation = () => {
  const [search, setSearch] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [textColor, setTextColor] = useState('#000');
  const [paragraphColor, setParagraphColor] = useState('#000');

  const components = {
    smith: <Smith />,
    hack: <Hack />,
    calça: <Calça />,
    'calça afundo': <CalçaAfundo />, 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedSearch = search.trim().toLowerCase();
    if (components[normalizedSearch]) {
      setSelectedComponent(components[normalizedSearch]);
      setTextColor('white');
      setParagraphColor('green');
    } else {
      setSelectedComponent(<p>Componente não encontrado.</p>);
      setTextColor('red');
      setParagraphColor('red');
    }
    setSearch('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="O que você está procurando?" 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          onKeyDown={handleKeyPress} // Detecta o Enter
          className="input" 
        />
        <label htmlFor="text" className="lupa-container">
          <HiOutlineMagnifyingGlass className="lupa" />
        </label>
      </div>

      <div className="component-display" style={{ color: textColor }}>
        {selectedComponent}
      </div>

      <div className="text-display" style={{ color: paragraphColor }}>
      </div>
    </div>
  );
};

export default Navigation;
