import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="site-name">drexelmeek.com</a>
      </div>
      <nav className="header-right">
        <a href="#about">About Me</a>
        <a href="#anura">Anura</a>
        <a href="#babylon">Babylon Consulting</a>
        <a href="#sgt-sausage">Sgt Sausage</a>
        <a href="#work">Work</a>
      </nav>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          {/* Add your content here */}
        </main>
      </div>
    </>
  )
}

export default App
