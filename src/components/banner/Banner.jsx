import React from 'react'
import Navigation from '../navigation/Navigation'
import './estilo.css'

const Banner = () => {
  return (
    <div className='nav'>
        <h1 className='title'>Black <span className='span'>November</span></h1>
        <Navigation />
    </div>
  )
}

export default Banner