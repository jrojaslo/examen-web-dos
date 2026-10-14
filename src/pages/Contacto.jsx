import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import ContactInfoItem from "../components/ContactInfoItem";
import CampoFormulario from "../components/CampoFormulario";
import Icono from "../components/Icono";

const canales = [
  { icono: "mail", titulo: "Correo Electrónico", valor: "contacto@libreria-archivo.org" },
  { icono: "phone", titulo: "Teléfono de Sala", valor: "+57 (604) 444-2020" },
  { icono: "map-pin", titulo: "Sede Principal", valor: "Calle 48 #72-10, Edificio Bauhaus" },
  { icono: "clock", titulo: "Horario de Consulta", valor: "Lunes a Viernes: 08:00 - 18:00" },
];

const motivos = [
  { valor: "prestamo", texto: "Consulta de libro en sala" },
  { valor: "donacion", texto: "Donación de archivo" },
  { valor: "investigacion", texto: "Apoyo en investigación académica" },
  { valor: "general", texto: "Información general" },
];

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <>
      <HeroBanner
        titulo="Contacto & Consultas del Archivo"
        subtitulo="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="contact-layout">
        <article className="contact-card">
          <h2 className="contact-card-title">Canales de Atención</h2>
          <p className="contact-card-text">
            Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
          </p>

          <div className="contact-info-list">
            {canales.map((canal) => (
              <ContactInfoItem
                key={canal.titulo}
                icono={canal.icono}
                titulo={canal.titulo}
                valor={canal.valor}
              />
            ))}
          </div>
        </article>

        <article className="contact-card">
          <h2 className="contact-card-title">Enviar Mensaje</h2>
          <p className="contact-card-text contact-card-text-spaced">
            Completa el siguiente formulario para radicar tu inquietud.
          </p>

          <div>
            <CampoFormulario id="nombre" etiqueta="Nombre Completo">
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ej. Ana María Gómez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </CampoFormulario>

            <CampoFormulario id="email" etiqueta="Correo Electrónico">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </CampoFormulario>

            <CampoFormulario id="asunto" etiqueta="Motivo de Consulta">
              <select
                id="asunto"
                className="form-control"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              >
                <option value="">Selecciona un motivo...</option>
                {motivos.map((motivo) => (
                  <option key={motivo.valor} value={motivo.valor}>
                    {motivo.texto}
                  </option>
                ))}
              </select>
            </CampoFormulario>

            <CampoFormulario id="mensaje" etiqueta="Mensaje">
              <textarea
                id="mensaje"
                className="form-control"
                placeholder="Describe brevemente tu solicitud..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </CampoFormulario>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={limpiarFormulario}
            >
              <Icono nombre="send" className="icon-sm" />
              <span>Enviar Formulario</span>
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Contacto;
