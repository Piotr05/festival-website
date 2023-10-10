import React from 'react'

// styles
import '../styles/Button.scss'

export default function Button({text}) {
  return (
    <a href='/'>
        <button className='btn'>
            <span className='btn__text'>{text}</span>
        </button>
    </a>
  )
}
