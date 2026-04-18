import logo from '../assets/react.svg'
import { useEffect, useRef } from 'react'
import Collapse from 'bootstrap/js/dist/collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './header.css'
import { color } from 'three/tsl'

function Header({ toggleTheme, isDarkMode }) {
  const collapseRef = useRef(null)
  const togglerRef = useRef(null)
  const bootstrapCollapse = useRef(null)

  const handleSelect = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    if (bootstrapCollapse.current && collapseRef.current?.classList.contains('show')) {
      bootstrapCollapse.current.hide()
    }
  }

  useEffect(() => {
    if (!collapseRef.current) return

    bootstrapCollapse.current = new Collapse(collapseRef.current, {
      toggle: false,
    })

    const handleDocumentClick = (event) => {
      if (!collapseRef.current?.classList.contains('show')) return
      if (togglerRef.current?.contains(event.target)) return
      bootstrapCollapse.current.hide()
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
      bootstrapCollapse.current?.dispose()
      bootstrapCollapse.current = null
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar px-3">

      <div className="container-fluid">

        {/* LOGO + NOMBRE */}
        <button
          className="navbar-brand d-flex align-items-center fw-bold border-0 bg-transparent"
          onClick={(event) => { handleSelect('home'); event.target.blur(); }}
          style={{color: 'inherit'}}
        >
          <img src={logo} width="40" className="me-2" alt="Logo" 
          
          />
          Andrés Velásquez
        </button>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>

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
                  onClick={(event) => { handleSelect(item.id); event.target.blur(); }}
                >
                  {item.label}
                </button>
              </li>
            ))}

          </ul>

          {/* DERECHA */}
          <div className="d-flex align-items-center gap-3">

            {/* THEME */}
            <button
              className="btn btn-theme"
              onClick={toggleTheme}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>

            {/* CTA (MUY PRO) */}
            <button
              className="btn btn-primary px-3 rounded-pill"
              onClick={() => handleSelect('contacto')}
            >
              Hablemos
            </button>

            {/* SOCIALS (más limpio) */}
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