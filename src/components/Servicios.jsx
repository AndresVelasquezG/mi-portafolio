import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUsers, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import './servicios.css'

const services = [
  {
    icon: faCode,
    title: 'Desarrollo Frontend',
    description: 'Construcción de interfaces modernas, responsivas y optimizadas utilizando React y tecnologías actuales.',
  },
  {
    icon: faUsers,
    title: 'Trabajo en equipo',
    description: 'Experiencia colaborando en entornos ágiles, participando en metodologías como Scrum y comunicación efectiva.',
  },
  {
    icon: faLaptopCode,
    title: 'Control de versiones',
    description: 'Gestión de proyectos con Git y GitHub, asegurando control de cambios y trabajo colaborativo eficiente.',
  },
]

function Servicios() {
  return (
    <section className="services-section" id="servicios">

      <div className="container">

        {/* TITULO */}
        <div className="text-center mb-5">
          <h2 className="services-title">Servicios</h2>
          <p className="services-subtitle">
            Cómo puedo aportar valor a tus proyectos
          </p>
        </div>

        {/* GRID */}
        <div className="services-grid">

          {services.map((service, index) => (
            <div key={index} className="service-card">

              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="service-title">
                {service.title}
              </h3>

              <p className="service-description">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Servicios