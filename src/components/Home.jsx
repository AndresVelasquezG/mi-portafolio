import './home.css'
import GalaxyBackground from '../components/GalaxyBackground'

const Home = () => {

  return (
    <section
      className='home-container d-flex align-items-center justify-content-center'
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      {/* 🌌 Fondo galaxia */}
      <GalaxyBackground />
      <GalaxyBackground
        color="#6366f1"
        size={0.2}
        opacity={0.4}
      />

      {/* 👇 Contenido */}
      <div
        className="text-center px-3"
        style={{
          maxWidth: '800px',
          position: 'relative',
          zIndex: 1
        }}
      >

        <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Andrés Velásquez
        </h1>

        <h2 className="mb-3 text-primary" style={{ fontWeight: 500 }}>
          Desarrollador Frontend especializado en React
        </h2>

        <p className="mb-4 text-light" style={{ fontSize: '1.1rem', opacity: 0.85 }}>
          Construyo aplicaciones web modernas, rápidas y centradas en la experiencia del usuario.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-primary btn-lg px-4 rounded-pill"
            onClick={() => document.getElementById('portafolio').scrollIntoView({ behavior: 'smooth' })}
          >
            Ver proyectos
          </button>

          <button
            className="btn btn-outline-light btn-lg px-4 rounded-pill"
            style={{ color: 'white' }}
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          >
            Contactarme
          </button>
        </div>

      </div>
    </section>
  )
}

export default Home