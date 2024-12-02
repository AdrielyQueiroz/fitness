import React from 'react'
import './estilo.css'
import { ImAccessibility } from "react-icons/im";
import { BsQuestionCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
        <nav className='navigation'>
            <ul className='list'>
                <li className='li'>Tops</li>
                <li className='li'>Calças</li>
                <li className='li'>Blusas de frio</li>
                <li className='li'>Shorts</li>
                <li className='li'>Conjuntos</li>
                <li className='li'>Macacão</li>
                <li className='li'>Acessórios</li>
            </ul>
        </nav>
        <section>
  <div className="icon">
    <div className="style">
      <ImAccessibility />
      <p>Acessibilidade</p>
    </div>
    <div className="style">
      <BsQuestionCircle />
      <p>Dúvidas frequentes</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Navbar