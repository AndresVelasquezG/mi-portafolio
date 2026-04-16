import './portafolio.css'
import { useEffect, useState } from 'react'

function Portafolio() {
  const [proyectos, setProyectos] = useState([])
  const [loading, setLoading] = useState(true)

  const USER = 'AndresVelasquezG'

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${USER}/repos?sort=updated&per_page=6`
        )
        const data = await res.json()
        setProyectos(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <section id="portafolio" className="projects-section">

      <div className="container">

        {/* TITULO */}
        <div className="text-center mb-5">
          <h2 className="projects-title">Mis Proyectos</h2>
          <p className="projects-subtitle">
            Algunos de mis trabajos recientes
          </p>
        </div>

        {/* LOADING */}
        {loading && <p className="text-center">Cargando proyectos...</p>}

        {/* GRID */}
        <div className="projects-grid">

          {proyectos.map((repo) => (
            <div key={repo.id} className="project-card">

              <h3 className="project-name">
                {repo.name}
              </h3>

              <p className="project-description">
                {repo.description || 'Proyecto sin descripción'}
              </p>

              <div className="project-footer">
                <span className="project-language">
                  {repo.language || 'Code'}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Ver código →
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Portafolio