import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Assuming you have Bootstrap CSS in node_modules
import './App.css'; // Assuming you have the CSS in a separate file
import './carousel.css'; // Assuming you have the CSS in a separate file
import { particlesJS } from 'particles.js';
import 'bootstrap/dist/js/bootstrap.bundle'; // Assuming you have Bootstrap JS in node_modules
import bznsug from './Varios/BznSug.gif';


const App = () => {
  return (
    <div>
      <Carousel />
      <Header />
      
        <Marketing />
        <Footer />
        <initParticles />
      <main>
        
      </main>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="ReLogos/ReLogoDef-T.png" style={{ width: '40%' }} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="horarios.php">Horarios</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Carreras</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <p><a href="https://www.utch.edu.mx/index.php/energias-renovables/">Energías Renovables</a></p>
                  <p><a href="https://www.utch.edu.mx/index.php/procesos-industriales/">Ingeniería Industrial</a></p>
                  <p><a href="https://www.utch.edu.mx/index.php/desarrollo-de-negocios/">Innovación de Negocios</a></p>
                  <p><a href="https://www.utch.edu.mx/index.php/mantenimiento-industrial/">Mantenimiento</a></p>
                  <p><a href="https://www.utch.edu.mx/index.php/mecatronica/">Mecatrónica</a></p>
                  <p><a href="https://www.utch.edu.mx/index.php/tecnologias/">Tecnologías de la Información</a></p>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1" aria-current="true" onClick={(e) => e.preventDefault()}>Extracurriculares</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="biblioteca/index.html" tabIndex="-1" aria-current="true">Biblioteca</a>
              </li>
            </ul>
            <form className="d-flex" style={{ width: '350px', marginLeft: '20px' }}>
              <input className="form-control mr-2" type="search" placeholder="Buscar" aria-label="Search" />
              <div>
                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
              </div>
            </form>
          </div>
          <div id="google_translate_element" style={{ marginLeft: '10px' }}></div>
        </div>
      </nav>
    </header>
  );
};

const Carousel = () => {
  return (
    <div id="IndexRe" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#IndexRe" data-slide-to="0" className="active"></li>
        <li data-target="#IndexRe" data-slide-to="1"></li>
        <li data-target="#IndexRe" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="background-overlay"></div>
          <div className="overlay-image" style={{ backgroundImage: 'url(entrada.jpg)' }}></div>
          <div className="container">
            <div className="carousel-caption text-left">
              <h1>¡Bienvenido!</h1>
              <p>Disfruta de la Experiencia Renova Edutch, Siéntete Libre de Explorar los Apartados que Tenemos para Ofrecer.</p>
              <p><a className="btn btn-lg btn-primary registrarse" href="/Renova Edutch/session/register.php" role="button">Registrarse</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="background-overlay"></div>
          <div className="overlay-image" style={{ backgroundImage: 'url(guiasint.jpg)' }}></div>
          <div className="container">
            <div className="carousel-caption">
              <h1>Explora Nuestras Guías Interactivas</h1>
              <p>Sumérgete en el mundo del aprendizaje interactivo con nuestras guías especializadas. Desde tutoriales paso a paso hasta recursos interactivos, nuestras guías están diseñadas para hacer que tu experiencia de aprendizaje sea emocionante y envolvente.</p>
              <p><a className="btn btn-lg btn-primary custom-button" href="/Renova Edutch/guides/guias.html" role="button">Probar Guías Interactivas</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="background-overlay"></div>
          <div className="overlay-image" style={{ backgroundImage: 'url(HD-wallpaper-teamwork-business-people-team-at-the-table-plan-concepts-teamwork-concepts-business-table-with-business-people-top-view.jpg)' }}></div>
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>Creación del Proyecto y Conformación del Equipo</h1>
              <p>En la sección "Nosotros" de Renova Edutch podrás conocer nuestras motivaciones y cómo estamos conformados. Somos un equipo de estudiantes comprometidos con la modernización tecnológica en la UTCH.</p>
              <p><a className="btn btn-lg btn-primary nosotros-button" target="_blank" href="/Renova Edutch/nosotros/nostrosb.html" role="button">Nosotros</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#IndexRe" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#IndexRe" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
export { Carousel };

const Marketing = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <img src={bznsug} className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Actividades" />
          <h2>Buzón de Sugerencias</h2>
          <p>¿Tienes alguna sugerencia para hacer que la plataforma sea más fácil de usar? ¿Ideas para nuevos contenidos o características? ¿O simplemente quieres expresar lo que más te gusta de Renova Edutch? ¡Estamos ansiosos por escucharte!</p>
          <p><a className="btn btn-secondary sugerencia" href="buzon/indexb.php" role="button">« Hacer una Sugerencia »</a></p>
        </div>
        <div className="col-lg-4">
          <img src="curso.gif" className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Actividades" />
          <h2>Cursos con Certificación</h2>
          <p>Nos enorgullece ofrecer una amplia variedad de cursos con certificación diseñados para potenciar habilidades y conocimientos en áreas clave. Estos cursos brindan una oportunidad única para el aprendizaje especializado y la obtención de certificaciones reconocidas.</p>
          <p><a className="btn btn-secondary ver-cursos" href="https://cursos.utch.edu.mx/" role="button">« Ver Cursos »</a></p>
        </div>
        <div className="col-lg-4">
          <img src="PrGif3.gif" className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Actividades" />
          <h2>Proyecta Utch</h2>
          <p>En Proyecta UTCH nos encargamos de proporcionarte acceso a herramientas esenciales para tu vida académica. Desde el manejo de tu correo institucional hasta la gestión de documentos, información personal y más, estamos aquí para facilitar tu experiencia educativa.</p>
          <p><a className="btn btn-secondary proyecta-utch" href="https://proyecta.utch.edu.mx/" role="button"> « Ir a Proyecta Utch &raquo;</a></p>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Nuestras Redes Sociales. <span className="text-muted">Síguenos para más información.</span></h2>
          <div>
            <a href="https://www.facebook.com/utchoficial/" target="_blank"rel="noopener noreferrer" style={{ color: '#1877f2' }}><i className="fab fa-facebook social-icons"></i></a>
            <a href="https://twitter.com/utch_oficial?lang=es" target="_blank"rel="noopener noreferrer" style={{ color: '#1da1f2' }}><i className="fab fa-twitter social-icons"></i></a>
            <a href="https://www.instagram.com/utch_oficial/?hl=es-la" target="_blank"rel="noopener noreferrer"><i className="fab fa-instagram social-icons"></i></a>
            <a href="https://www.youtube.com/user/utchoficial" target="_blank"rel="noopener noreferrer" style={{ color: '#ff0000' }}><i className="fab fa-youtube social-icons"></i></a>
            <a href="https://wa.link/967gni" target="_blank" rel="noopener noreferrer"style={{ color: '#25d366' }}><i className="fab fa-whatsapp social-icons"></i></a>
          </div>
        </div>
        <div className="col-md-5">
          <img src="cazador-fichas.png" className="bd-placeholder-img rounded-circle" width="425" height="425" alt="Actividades" />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2 text-center">
          <h2 className="featurette-heading">Becas y Servicios Comunitarios. <span className="text-muted">Te invitamos a echar un vistazo a las becas que ofrecemos.</span></h2>
          <p className="lead">Entendemos la importancia de apoyar a los estudiantes no solo en su crecimiento académico, sino también en su desarrollo personal y servicio a la comunidad. Ofrecemos diversas oportunidades de becas para aliviar la carga financiera y fomentar la excelencia académica.</p>
          <p><a className="btn btn-lg btn-primary color-carousel arrow-btn" href="exten/becas.html" role="button">Ver Becas</a></p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src="Becas Utch.jpg" className="bd-placeholder-img rounded-circle" width="425" height="425" alt="Actividades" />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 text-center">
          <h2 className="featurette-heading">Rutas de Transporte. <span className="text-muted">Explora el mapa y simplifica tu trayecto diario.</span></h2>
          <p className="lead">Descubre nuestro práctico mapa que muestra el recorrido detallado de los camiones que transportan a nuestros alumnos. Este recurso interactivo te permitirá visualizar de manera clara las rutas y paradas de los camiones urbanos que facilitan el transporte hacia y desde la UTCH. Planifica tu viaje con anticipación, conoce las paradas estratégicas y asegúrate de llegar a tiempo a tus compromisos académicos.</p>
          <p className="text-center"><a className="btn btn-lg btn-warning ver-rutas" target="_blank" rel="noopener noreferrer"href="http://www.utch.edu.mx/wp-content/uploads/2023/05/rutas2023v2.pdf" role="button"><i className="fas fa-bus"></i> Ver Rutas</a></p>
        </div>
        <div className="col-md-5">
          <img src="school-bus.gif" className="bd-placeholder-img rounded-circle" width="425" height="425" alt="Actividades" />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="container">
      <section className="ubicacion-section">
        <h2>Nuestra Ubicación</h2>
        <p>UTCH, Av. Montes Americanos, Sector 35, 31216 Chihuahua, Chih., Mexico</p>
        <p>Teléfono: (614) 4 32 20 00</p>
      </section>
      <section className="mapa-section">
        <div id="map"></div>
      </section>
      <p className="float-right"><a href="#IndexRe" id="scrollToTop">Volver Arriba</a></p>
      <p>&copy; 2023-2023 Renova Edutch &middot; <a target="_blank" href="session/priv.html">Privacidad</a> &middot; <a target="_blank" href="session/terms.html">Términos</a> &middot; <a target="_blank" href="preguntas-frecuentes/indexp.html">FAQ</a></p>
    </footer>
  );
};


const scrollToTop = (event) => {
  event.preventDefault();
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });
};
export { scrollToTop };

const initParticles = () => {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#20b0f1', '#2ae860'],
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#20b0f1',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
};
export { initParticles };

export default App;
