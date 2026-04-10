import logo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './header.css'


function Header({ toggleTheme, isDarkMode }) {
  const handleSelect = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home" onClick={() => handleSelect('home')}>
          <img src={logo} width="45" className="logonk me-2" alt="Logo" />
          Andrés Velásquez
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => handleSelect('home')}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobremi" onClick={() => handleSelect('sobremi')}>Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios" onClick={() => handleSelect('servicios')}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades" onClick={() => handleSelect('habilidades')}>Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portafolio" onClick={() => handleSelect('portafolio')}>Portafolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto" onClick={() => handleSelect('contacto')}>Contacto</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-light me-3 rounded-pill" onClick={toggleTheme}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
            <div className="d-none d-lg-flex">
              <a href="https://github.com/AndresVelasquezG" target="_blank" rel="noreferrer" className="text-light me-3 fs-5">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-light me-3 fs-5">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-light me-3 fs-5">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-light fs-5">
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