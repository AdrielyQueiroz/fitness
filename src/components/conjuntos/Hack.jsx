import React, { useState } from 'react';
import './estilo.css';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Quantidade from '../btn/Quantidade';
import Button from '../button/Button';
import Tamanho from '../btn/Tamanho';
import ImageHack from "../conjuntos/ImageHack"

const Hack = () => {
  const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);  //controlando o estado de preenchimento
    }

  return (

    <div className='container'>
            <section className='smith'>
                <ImageHack />
                <div className='car'>
                    <h1>Conjunto Hack</h1>
                    <IoCartOutline className='iconcar' />
                    
                    <div onClick={toggleFavorite} className='heart-icon'>
                        {isFavorite ? (
                            <FaHeart style={{ color: 'red' }} />
                        ) : (
                            <FaRegHeart style={{ color: 'gray' }} />
                        )}
                    </div>
                </div>
                <section>
                    <p>Conjunto para academia feminino</p>
                    <p className='values'>R$:220,00</p>
                    <p className='new-price'>R$:149,90</p>
                </section>
                <Tamanho />
                <div>
                <Quantidade />
                <Button />
                </div>
            </section>
        </div>
  );
};

export default Hack;