import React from 'react'
import './estilo.css'

const Tamanho = () => {
  return (
    <div>
        <p>Tamanho:</p>
        <div className='conjunto'>
            <button className='p-m-g'>P</button>
            <button className='p-m-g'>M</button>
            <button className='p-m-g'>G</button>
            <button className='p-m-g'>GG</button>
            <button className='p-m-g'>XG</button>
        </div>
    </div>
  )
}

export default Tamanho