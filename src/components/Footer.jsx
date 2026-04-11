

function Footer() {
  return (
    <footer id="contacto" className="site-footer bg-white-custom text-muted py-5 mt-5">
      <div className="container">
        <div className="row gy-4">
            <div className="col-12 col-md-6">
              <h5>Andrés Velásquez</h5>
              <p>Desarrollador Frontend Junior</p>
              <p>Creando experiencias web modernas y funcionales.</p>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <h5>Contacto</h5>
              <p>Email: andresvg0328@gmail.com</p>
              <p>Teléfono: +57 319 337 2539</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">&copy; 2026 Andrés Velásquez.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;