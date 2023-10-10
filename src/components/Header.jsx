import React from 'react'
import '../styles/Header.scss'

export default function Header() {

  return (
    <header className='header'>
        <nav className='header__nav'>
            <a class="header__nav_a" href="/">Harmonogram</a>
            <a class="header__nav_a" href="/">Bilety</a>
            <a class="header__nav_a" href="/">Jak dojechać?</a>
            <a class="header__nav_a" href="/">nocleg</a>
            <a class="header__nav_a" href="/">galeria</a>
            <a class="header__nav_a" href="/">Regulamin</a>
        </nav>
    </header>
  )
}