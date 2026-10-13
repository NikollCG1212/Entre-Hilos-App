import './App.css'
import { useEffect } from 'react'

const products = [
  {
    name: 'Pulsera Alba',
    category: 'TEJIDA A MANO',
    price: '$18.000',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85',
    className: 'product-image-one',
    number: '01',
  },
  {
    name: 'Detalles que brillan',
    category: 'PIEZAS ESPECIALES',
    price: 'Desde $15.000',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85',
    className: 'product-image-two',
    number: '02',
  },
  {
    name: 'Tu próxima favorita',
    category: 'DISEÑADA CONTIGO',
    price: 'A tu manera',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85',
    className: 'product-image-three',
    number: '03',
  },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.manifesto, .section-heading, .product-card, .custom-copy, .closing-note'
    )

    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-wrapper">
      <div className="announcement">
        Pequeños detalles, grandes historias.
        <span> Hecho con intención ♡</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Entre Hilos, inicio">
          <span className="brand-symbol">e<span>h</span></span>
          <span className="brand-name">
            entre hilos
            <small>ACCESORIOS CON SIGNIFICADO</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#coleccion">La Colección</a>
          <a href="#historia">Nuestra Esencia</a>
          <a href="#personaliza">Personaliza</a>
        </nav>

        <a className="nav-cta" href="#personaliza">
          Crear mi pieza <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              OBJETOS PEQUEÑOS, SENTIMIENTOS ENORMES
            </div>

            <h1>
              Hay historias
              <br />
              que se llevan
              <br />
              <span>puestas.</span>
            </h1>

            <p className="hero-description">
              Accesorios tejidos a mano para contar un poquito de ti.
              Imagina, combina y hagamos juntas una pieza que tenga tu esencia.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#coleccion">
                Explorar colección <span>↗</span>
              </a>
              <a className="text-link" href="#historia">
                Conoce nuestra historia <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-star">✳</span>
              <p>
                No hay dos historias iguales.
                <br />
                Tampoco tienen que existir dos piezas iguales.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90"
                alt="Detalle de accesorios de joyería"
              />

              <div className="photo-label">
                <span>PIEZAS CON ALMA</span>
                <span>001 — ENTRE HILOS</span>
              </div>
            </div>

            <div className="floating-note">
              <span className="floating-flower">✳</span>
              <span>
                Diseñado
                <br />
                contigo ♡
              </span>
            </div>

            <div className="vertical-caption">HECHO A MANO, PENSADO PARA TI</div>

            <span className="hero-decoration decoration-top">✳</span>
            <span className="hero-decoration decoration-bottom">✳</span>
          </div>

          <div className="hero-index">
            <span>01</span>
            <span className="index-line"></span>
            <span>03</span>
          </div>
        </section>

        <section className="manifesto" id="historia">
          <span className="section-kicker">MÁS QUE UN ACCESORIO</span>

          <p>
            Cada hilo tiene su camino.
            <br />
            <span>El tuyo empieza aquí.</span>
          </p>

          <span className="manifesto-flower">✳</span>
        </section>

        <section className="collection section-padding" id="coleccion">
          <div className="section-heading">
            <div>
              <span className="section-kicker">UN UNIVERSO HECHO A MANO</span>
              <h2>
                Piezas para
                <br />
                <span>sentir bonito.</span>
              </h2>
            </div>

            <p>
              Desde ese detalle que te recuerda a alguien especial hasta
              esa pieza que simplemente se siente muy tú.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <a
                  className={`product-photo ${product.className}`}
                  href="#personaliza"
                  aria-label={`Conoce más sobre ${product.name}`}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-number">{product.number}</span>
                  <span className="product-arrow">↗</span>
                </a>

                <div className="product-info">
                  <div>
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="collection-footer">
            <span>Pequeñas piezas, infinitas posibilidades.</span>
            <a href="#personaliza">
              Encuentra la tuya <span>→</span>
            </a>
          </div>
        </section>

        <section className="custom-section" id="personaliza">
          <div className="custom-decoration">e·h</div>

          <div className="custom-copy">
            <span className="section-kicker">TU IDEA TAMBIÉN CUENTA</span>

            <h2>
              No tienes que
              <br />
              imaginarla sola.
            </h2>

            <p>
              Cuéntanos qué colores te gustan, qué quieres transmitir o
              para quién es ese detalle. Podemos crear algo juntas,
              paso a paso.
            </p>

            <a
              className="button-light"
              href="mailto:hola@entrehilos.com?subject=Quiero%20personalizar%20un%20accesorio"
            >
              Hablemos de tu idea <span>↗</span>
            </a>
          </div>

          <div className="custom-side-note">
            <span>HECHO CON CALMA.</span>
            <span>DISEÑADO CON INTENCIÓN.</span>
            <span>TEJIDO CON CARIÑO. ♡</span>
          </div>
        </section>

        <section className="closing-note">
          <span className="closing-star">✳</span>
          <p>
            Que lo que lleves puesto
            <br />
            <span>también cuente quién eres.</span>
          </p>
          <span className="closing-brand">ENTRE HILOS — DESDE EL CORAZÓN</span>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#inicio">
          entre hilos<span>®</span>
        </a>

        <p>Accesorios artesanales, creados contigo.</p>

        <a className="back-to-top" href="#inicio">
          VOLVER ARRIBA ↑
        </a>

        <span className="footer-copy">© 2026 ENTRE HILOS</span>
      </footer>
    </div>
  )
}

export default App


