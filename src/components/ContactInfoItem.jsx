import Icono from "./Icono";

function ContactInfoItem({ icono, titulo, valor }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon-box">
        <Icono nombre={icono} />
      </div>
      <div>
        <strong className="contact-info-label">{titulo}</strong>
        <span className="contact-info-value">{valor}</span>
      </div>
    </div>
  );
}

export default ContactInfoItem;
