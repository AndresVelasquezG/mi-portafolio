import foto from '../assets/images/foto.png'
import './sobremi.css'

function SobreMi() {
  return (
    <section id="sobremi" className="about-section">

      <div className="container">
        <div className="row align-items-center justify-content-center">

          {/* 👇 IMAGEN */}
          <div className="col-12 col-md-5 text-center mb-5 mb-md-0">
            <div className="about-image-wrapper">
              <img
                src={foto}
                alt="Andrés Velásquez"
                className="about-image"
              />
            </div>
          </div>

          {/* 👇 TEXTO */}
          <div className="col-12 col-md-7">

            <h2 className="about-title mb-3">
              Sobre mí
            </h2>

            <h3 className="about-subtitle mb-4">
              Desarrollador Frontend especializado en React
            </h3>

            <p className="about-text mb-3">
              Soy desarrollador frontend enfocado en la creación de interfaces modernas, limpias y funcionales. Me especializo en construir aplicaciones utilizando React, priorizando la experiencia del usuario y el rendimiento.
            </p>

            <p className="about-text mb-4">
              Actualmente estoy fortaleciendo mis habilidades en arquitectura frontend, consumo de APIs y manejo de estado, con el objetivo de desarrollar soluciones escalables y mantenibles.
            </p>

            {/* 👇 BOTONES */}
            <div className="d-flex gap-3 flex-wrap">
              <a
                href="/HV-Andres.pdf"
                download
                className="btn btn-primary px-4 rounded-pill"
              >
                Descargar CV
              </a>

              <button
                className="btn btn-outline-light px-4 rounded-pill"
                onClick={() =>
                  document.getElementById('contacto')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contactarme
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default SobreMi