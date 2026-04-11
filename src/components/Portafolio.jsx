import './portafolio.css';
import { useState, useEffect, useMemo } from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

// Mapeo de colores para lenguajes
const LENGUAJES_CONFIG = {
    'JavaScript': { color: '#F7DF1E', bg: '#FFF9E6' },
    'Python': { color: '#3776AB', bg: '#E8F0F7' },
    'TypeScript': { color: '#3178C6', bg: '#E8F1FF' },
    'Java': { color: '#007396', bg: '#E8F3F7' },
    'C++': { color: '#00599C', bg: '#E8F1F7' },
    'CSS': { color: '#1572B6', bg: '#E8F1FF' },
    'HTML': { color: '#E34C26', bg: '#FFE8E8' },
    'Vue': { color: '#4FC08D', bg: '#E8F7ED' },
    'Node.js': { color: '#339933', bg: '#E8F7E8' },
    'Go': { color: '#00ADD8', bg: '#E8F7FF' },
    'Rust': { color: '#CE422B', bg: '#FFE8E3' },
    'PHP': { color: '#777BB4', bg: '#F0E8FF' },
    'Kotlin': { color: '#7F52FF', bg: '#F4E8FF' },
};

function Portafolio({ isDarkMode }) {
    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [indiceCarrusel, setIndiceCarrusel] = useState(0);
    const USUARIO_GITHUB = 'AndresVelasquezG'; // Cambia esto con tu usuario de GitHub

    const obtenerConfigLenguaje = (lenguaje) => {
        return LENGUAJES_CONFIG[lenguaje] || { color: '#666', bg: '#F5F5F5' };
    };

    const projectChunks = useMemo(() => {
        return Array.from({ length: Math.ceil(proyectos.length / 3) }, (_, idx) => proyectos.slice(idx * 3, idx * 3 + 3));
    }, [proyectos]);

    useEffect(() => {
        const controller = new AbortController();
        const obtenerProyectos = async () => {
            try {
                const respuesta = await fetch(`https://api.github.com/users/${USUARIO_GITHUB}/repos?sort=updated&per_page=9`, {
                    signal: controller.signal,
                });
                if (!respuesta.ok) {
                    throw new Error('No se pudieron cargar los repositorios');
                }
                const datos = await respuesta.json();
                setProyectos(datos);
                setCargando(false);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
                setCargando(false);
            }
        };

        obtenerProyectos();
        return () => controller.abort();
    }, []);

    return (
        <div id="portafolio" className={`portafolio-wrapper ${isDarkMode ? 'dark-portafolio' : ''}`}>
            <Container className="portafolio-container">
                <div className="header-section">
                    <h1 className="main-title">Mi Portafolio</h1>
                    <p className="subtitle">Explora mis proyectos destacados de GitHub</p>
                </div>
                
                {cargando && (
                    <div className="loading-section">
                        <div className="spinner"></div>
                        <p>Cargando proyectos...</p>
                    </div>
                )}
                
                {error && (
                    <div className="alert alert-danger alert-custom" role="alert">
                        <strong>Error:</strong> {error}
                    </div>
                )}
                
                {!cargando && !error && proyectos.length > 0 && (
                    <div className="carousel-section">
                        <Carousel 
                            activeIndex={indiceCarrusel}
                            onSelect={(selectedIndex) => setIndiceCarrusel(selectedIndex)}
                            className="custom-carousel"
                            controls={true}
                            indicators={true}
                            pause="hover"
                        >
                            {projectChunks.map((chunk, idx) => (
                                <Carousel.Item key={idx} className="carousel-item-custom">
                                    <Row className="g-4 proyectos-row">
                                        {chunk.map((proyecto) => {
                                            const configLenguaje = obtenerConfigLenguaje(proyecto.language);
                                            return (
                                                <Col key={proyecto.id} lg={4} md={6} className="proyecto-col">
                                                    <Card className="proyecto-card-bs">
                                                        <div 
                                                            className="card-banner"
                                                            style={{ backgroundColor: configLenguaje.color }}
                                                        >
                                                            <div className="banner-content">
                                                                <span className="language-badge" style={{ 
                                                                    backgroundColor: configLenguaje.bg,
                                                                    color: configLenguaje.color
                                                                }}>
                                                                    {proyecto.language || 'Code'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        
                                                        <Card.Body className="card-body-custom">
                                                            <Card.Title className="proyecto-titulo">
                                                                {proyecto.name}
                                                            </Card.Title>
                                                            
                                                            <Card.Text className="proyecto-description">
                                                                {proyecto.description || 'Proyecto sin descripción'}
                                                            </Card.Text>
                                                            
                                                            <div className="proyecto-stats-custom">
                                                                <div className="stat-item">
                                                                    <span className="stat-icon">⭐</span>
                                                                    <span className="stat-value">{proyecto.stargazers_count}</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-icon">🔀</span>
                                                                    <span className="stat-value">{proyecto.forks_count}</span>
                                                                </div>
                                                                <div className="stat-item">
                                                                    <span className="stat-icon">👁️</span>
                                                                    <span className="stat-value">{proyecto.watchers_count}</span>
                                                                </div>
                                                            </div>
                                                            
                                                            <a 
                                                                href={proyecto.html_url} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="btn btn-proyecto"
                                                            >
                                                                Ver en GitHub →
                                                            </a>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )}
                
                {!cargando && !error && proyectos.length === 0 && (
                    <div className="no-projects">
                        <p>No se encontraron repositorios públicos</p>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Portafolio;