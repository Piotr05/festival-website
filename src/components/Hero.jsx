import React from 'react'
import '../styles/Hero.scss'
import logo from '../assets/images/logo.svg'
import Video from './Video'
import Button from './Button'

export default function Hero() {

  return (
    <section className='hero'>
        <Video/>
        <div className="hero-content-wrapper">
            <img className='hero__logo' src={logo} alt='oundFusionFest Logo' draggable='false' />
            <Button text={'kup bilet'}/>
        </div>
    </section>
  )
}
