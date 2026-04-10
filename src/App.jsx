import React, { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import SobreMi from './components/SobreMi.jsx'
import Servicios from './components/Servicios.jsx'
import Hability from './components/Hability.jsx'
import Portafolio from './components/Portafolio.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  console.log('App is rendering')
  return (
    <div className="container-fluid p-0">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Home />
      <SobreMi />
      <Servicios />
      <Hability />
      <Portafolio isDarkMode={isDarkMode} />
      <Footer />
    </div>
  )
}

export default App
