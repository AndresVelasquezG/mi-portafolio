import logo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './header.css'

function Header({ toggleTheme, isDarkMode }) {
  const handleSelect = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top header-navbar shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#home" onClick={() => handleSelect('home')}>
          <img src={logo} width="45" className="logonk me-2" alt="Logo" />
          Andrés Velásquez
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="nav-link btn-link" onClick={() => handleSelect('home')}>Inicio</button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link btn-link" onClick={() => handleSelect('sobremi')}>Sobre Mí</button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link btn-link" onClick={() => handleSelect('servicios')}>Servicios</button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link btn-link" onClick={() => handleSelect('habilidades')}>Habilidades</button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link btn-link" onClick={() => handleSelect('portafolio')}>Portafolio</button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link btn-link" onClick={() => handleSelect('contacto')}>Contacto</button>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-primary btn-theme me-3" onClick={toggleTheme} aria-label="Cambiar tema">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
            <div className="d-none d-lg-flex social-links align-items-center">
              <a href="https://github.com/AndresVelasquezG" target="_blank" rel="noreferrer" className="social-link me-3">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-link me-3">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link me-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-link">
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