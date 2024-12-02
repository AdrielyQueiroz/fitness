import React from 'react'
import './estilo.css'
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div className='container-footer'>
        <footer>
            <div className='footer'>
                <p>Os preços, promoções, condições de pagamento,
                frete e produto são válidos exclusivamente para compras realizadas via internet.
                </p>
            <div className='social-media'>
                <p>Nos sigam nas redes sociais:</p>
                    <FaInstagram className='icons'/>
                    <AiFillTikTok className='icons'/>
                    <FaWhatsapp className='icons'/>
                    <IoLogoFacebook className='icons'/>
            </div>
            </div>
            <div className='copy'>
                <p>Fotos meramente ilustrativas. &copy; 2024 - OnFit.com.br. Todos os direitos reservados.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer