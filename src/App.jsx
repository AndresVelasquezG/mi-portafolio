import { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import SobreMi from './components/SobreMi.jsx'
import Servicios from './components/Servicios.jsx'
import Hability from './components/Hability.jsx'
import Portafolio from './components/Portafolio.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode)

  return (
    <div className="app-wrapper container-fluid p-0">
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
