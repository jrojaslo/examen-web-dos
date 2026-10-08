import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEnviar = () => {
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <div className="container">
      <section className="hero-banner">
        <h1 className="hero-title">Contacto & Consultas del Archivo</h1>
        <p className="hero-subtitle">
          Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial.
        </p>
      </section>

      <section className="contact-layout">
        <article className="contact-card">
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '8px',
            }}
          >
            Canales de Atención
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Mail size={18} />
              </div>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                  }}
                >
                  Correo Electrónico
                </strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  contacto@libreria-archivo.org
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Phone size={18} />
              </div>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                  }}
                >
                  Teléfono de Sala
                </strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  +57 (604) 444-2020
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <MapPin size={18} />
              </div>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                  }}
                >
                  Sede Principal
                </strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Calle 48 #72-10, Edificio Bauhaus
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Clock size={18} />
              </div>
              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                  }}
                >
                  Horario de Consulta
                </strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Lunes a Viernes: 08:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </article>

        <article className="contact-card">
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '8px',
            }}
          >
            Enviar Mensaje
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.92rem',
              marginBottom: '24px',
            }}
          >
            Completa el siguiente formulario para radicar tu inquietud.
          </p>

          <form id="formularioContacto" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ej. Ana María Gómez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto" className="form-label">
                Motivo de Consulta
              </label>
              <select
                id="asunto"
                className="form-control"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                required
              >
                <option value="">Selecciona un motivo...</option>
                <option value="prestamo">Consulta de libro en sala</option>
                <option value="donacion">Donación de archivo</option>
                <option value="investigacion">Apoyo en investigación académica</option>
                <option value="general">Información general</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="form-control"
                placeholder="Describe brevemente tu solicitud..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="button"
              id="btnEnviar"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={handleEnviar}
            >
              <Send className="icon-sm" size={14} />
              <span>Enviar Formulario</span>
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}
