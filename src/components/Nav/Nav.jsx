import React, {useState, useEffect} from 'react'
import './estilo.css'

const Nav = () => {
    const phrases = [
        'Compra 100% segura!',
        '10% de desconto em pagamentos via pix e boleto',
        'Moda Fitness',
        'Envio para todo o Brasil',
        'Frete grátis em compras acima de R$149,90'
    ]

    // armazena a frase atual
    const  [currentPhrase, setCurrentPhrase] = useState([phrases[0]]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentPhrase((prevPhrase) => {
        
            const currentIndex = phrases.indexOf(prevPhrase);
            const nextIndex = (currentIndex + 1) % phrases.length; // Se chegar ao final, reinicia
            return phrases[nextIndex];
          });
        }, 3000); // Intervalo de 3 segundos
    
        return () => clearInterval(intervalId);
      }, [phrases]);

  return (
    <div>
        <header className='bg'>
            <div className='phrase'>{currentPhrase}</div>
        </header>
    </div>
  )
}

export default Nav