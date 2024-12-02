import React, { useState } from 'react';
// import './estilo.css';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Quantidade from '../btn/Quantidade';
import Button from '../button/Button';
import Tamanho from '../btn/Tamanho';
import ImageCalçaAfundo from "../calças/ImageCalçaAfundo"

const Afundo = () => {
  const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);  //controlando o estado de preenchimento
    }

  return (

    <div className='container'>
            <section className='smith'>
                <ImageCalçaAfundo/>
                <div className='car'>
                    <h1>Calça Afundo</h1>
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
                    <p>Calça esportiva modelo Afundo</p>
                    <p className='values'>R$:99,90</p>
                    <p className='new-price'>R$:79,90</p>
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

export default Afundo;