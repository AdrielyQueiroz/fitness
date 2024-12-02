import React, {useState} from 'react'
import calça from "../images/image-5.jpg"
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Tamanho from '../btn/Tamanho';
import Quantidade from '../btn/Quantidade';
import Button from "../button/Button"
// import './estilo.css'


const Calça = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);  //controlando o estado de preenchimento
    } 

  return (
    <div className='container'>
            <section className='smith'>
                <img src={calça} alt="calça" className='image-3'/>
                <div className='car'>
                    <h1>calça shein</h1>
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
                    <p>Calça esportiva shein</p>
                    <p className='values'>R$:79,90</p>
                    <p className='new-price'>R$:49,90</p>
                </section>
                <Tamanho />
                <div>
                <Quantidade />
                <Button />
                </div>
            </section>
        </div>
  )
}

export default Calça