import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function Footer() {
  return (
    <footer id="contacto" className="footer">

      <div className="container">

        <div className="footer-content">

          {/* 👇 INFO */}
          <div className="footer-left">
            <h3 className="footer-name">Andrés Velásquez</h3>
            <p className="footer-role">Desarrollador Frontend</p>
            <p className="footer-text">
              Construyendo experiencias web modernas, funcionales y centradas en el usuario.
            </p>
          </div>

          {/* 👇 CONTACTO */}
          <div className="footer-right">
            <h4 className="footer-title">Contacto</h4>

            <p className="footer-item">
              andresvg0328@gmail.com
            </p>

            <p className="footer-item">
              +57 319 337 2539
            </p>

            {/* 👇 REDES */}
            <div className="footer-socials">
              <a href="https://github.com/AndresVelasquezG" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

        </div>

        {/* 👇 COPYRIGHT */}
        <div className="footer-bottom">
          <p>© 2026 Andrés Velásquez. Todos los derechos reservados.</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer