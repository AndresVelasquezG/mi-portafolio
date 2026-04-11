import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUsers, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import './servicios.css'

function Servicios() {
  return (
    <section className="services-section py-5 section-surface" id="servicios">
      <div className="container services-container">
        <h2 className="text-center display-5 fw-bold mb-5">Mis Servicios</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          {/* CARD 1 */}
          <div className="col d-flex">
            <div className="card h-100 w-100 border-0 shadow-lg hover-card">
              <div className="card-body text-center">
                <div className="react-icon mb-3">
                  <FontAwesomeIcon icon={faCode} size="3x" className="text-primary" />
                </div>
                <div className="card-content">
                  <h2 className="card-title h4 fw-bold">Desarrollo Frontend</h2>
                  <div className="skills">
                    <span className="badge bg-primary me-2">HTML5</span>
                    <span className="badge bg-primary me-2">CSS3</span>
                    <span className="badge bg-primary me-2">JavaScript</span>
                    <span className="badge bg-primary">React</span>
                    <span className="badge bg-primary">Responsive <br/> design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col d-flex">
            <div className="card h-100 w-100 border-0 shadow-lg hover-card">
              <div className="card-body text-center">
                <div className="react-icon mb-3">
                  <FontAwesomeIcon icon={faUsers} size="3x" className="text-success" />
                </div>
                <div className="card-content">
                  <h2 className="card-title h4 fw-bold">Metodología de desarrollo</h2>
                  <div className="skills">
                    <span className="badge bg-success me-2">Scrum</span>
                    <span className="badge bg-success me-2">Comunicación <br/> efectiva</span>
                    <span className="badge bg-success me-2">Trabajo <br/> en equipo</span>
                    <span className="badge bg-success">Ceremonias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col d-flex">
            <div className="card h-100 w-100 border-0 shadow-lg hover-card">
              <div className="card-body text-center">
                <div className="react-icon mb-3">
                  <FontAwesomeIcon icon={faLaptopCode} size="3x" className="text-warning" />
                </div>
                <div className="card-content">
                  <h2 className="card-title h4 fw-bold">Control de versiones y colaboracion</h2>
                  <div className="skills">
                    <span className="badge bg-warning text-dark me-2">Git</span>
                    <span className="badge bg-warning text-dark me-2">GitHub</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Servicios
