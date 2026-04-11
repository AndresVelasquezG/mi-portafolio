import foto from '../assets/images/foto.png'
import './sobreMi.css'

function SobreMi() {
  return (
    <section id="sobremi" className="sobremi-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img src={foto} alt="Imagen de Andrés Velásquez" loading="lazy" className="img-fluid rounded-circle shadow" />
          </div>
          <div className="col-12 col-md-6">
            <div className="card-sobremi border-0 shadow-sm">
              <div className="card-body">
                <h2 className="card-title display-5 fw-bold mb-3">Sobre Mí</h2>
                <h3 className="h4 text-primary mb-4">Hola, soy Andrés Velásquez</h3>
                <p className="lead">Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Con habilidades en HTML, CSS, JavaScript y frameworks modernos, me esfuerzo por construir sitios web que no solo sean visualmente impresionantes, sino también intuitivos y accesibles para todos los usuarios.</p>
                <a href="/HV-Andres.pdf" download className="btn btn-primary rounded-pill mt-3">Descargar CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi;