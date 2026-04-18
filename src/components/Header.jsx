import logo from '../assets/react.svg'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './header.css'

function Header({ toggleTheme, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const togglerRef = useRef(null)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleSelect = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  // cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !togglerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar px-3">
      <div className="container-fluid">

        {/* LOGO */}
        <button
          className="navbar-brand d-flex align-items-center fw-bold border-0 bg-transparent"
          onClick={() => handleSelect('home')}
          style={{ color: 'inherit' }}
        >
          <img src={logo} width="40" className="me-2" alt="Logo" />
          Andrés Velásquez
        </button>

        {/* BOTÓN MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV */}
        <div
          ref={menuRef}
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav mx-auto gap-2">
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'sobremi', label: 'Sobre mí' },
              { id: 'servicios', label: 'Mis servicios' },
              { id: 'habilidades', label: 'Habilidades' },
              { id: 'portafolio', label: 'Proyectos' },
              { id: 'contacto', label: 'Contacto' }
            ].map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className="nav-link nav-btn"
                  onClick={() => handleSelect(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* DERECHA */}
          <div className="d-flex align-items-center gap-3">

            <button className="btn btn-theme" onClick={toggleTheme}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>

            <button
              className="btn btn-primary px-3 rounded-pill"
              onClick={() => handleSelect('contacto')}
            >
              Hablemos
            </button>

            <div className="d-none d-lg-flex gap-3 ms-2">
              <a href="https://github.com/AndresVelasquezG" target="_blank" rel="noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header