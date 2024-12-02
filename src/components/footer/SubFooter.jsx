import React from 'react'
import codigo from '../images/codigo.png'
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import elo from '../images/elo.png'
import pix from '../images/pix.jpg'

const SubFooter = () => {
  return (
    <div className='subfooter'>
        <h1>Formas de pagamento</h1>
        <div className='payment'>
            <img src={codigo} alt="codigo de barras" className='logo'/>
            <img src={visa} alt="visa" className='logo'/>
            <img src={mastercard} alt="mastercard" className='mastercard'/>
            <img src={elo} alt="elo" className='elo'/>
            <img src={pix} alt="pix" className='elo'/>
        </div>
    </div>
  )
}

export default SubFooter