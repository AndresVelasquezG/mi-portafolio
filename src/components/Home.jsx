import './home.css'
import fondo from '../assets/images/fondo.png'



const Home = () => {

    return (

        <div className='home-container container-fluid d-flex align-items-center justify-content-center vh-100' id="home" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="row justify-content-center align-items-center h-100 w-100">
                <div className="col-12 col-md-10 col-lg-8 text-center text-white">
                    <p className='welcome display-6 mb-3 animate__animated animate__fadeInDown'>Bienvenido</p>
                    <h1 className="title display-4 fw-bold mb-4 animate__animated animate__fadeInUp">Soy Andrés Velásquez y este es Mi Portafolio.</h1>
                    <h2 className='ability h4 mb-4 animate__animated animate__fadeIn'>Mis habilidades:</h2>
                    <div className='skills-container bg-dark-custom bg-opacity-50 p-4 rounded animate__animated animate__fadeInUp animate__delay-1s'>
                        <p className='skillss lead'>Soy desarrollador Front End junior, con bases sólidas en la creación de interfaces modernas, limpias y funcionales. Me destaco por mi aprendizaje continuo, atención al detalle y compromiso con escribir código claro y mantenible. Disfruto transformar ideas en experiencias visuales intuitivas y seguir creciendo constantemente como profesional.</p>
                    </div>
                    <button className="btn btn-primary btn-lg mt-4 rounded-pill animate__animated animate__bounceIn animate__delay-2s" onClick={() => document.getElementById('sobremi').scrollIntoView({ behavior: 'smooth' })}>
                        Conoce Más
                    </button>
                </div>
            </div>
        </div>

    )

}

  





export default Home;
