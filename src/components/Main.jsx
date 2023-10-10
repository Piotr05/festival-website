import React from 'react'

// components
import Hero from './Hero'
import General from './General'

//styles
import '../styles/Main.scss'

export default function Main() {
  return (
    <main className='main'>
        <Hero/>
        <General/>
    </main>
  )
}
