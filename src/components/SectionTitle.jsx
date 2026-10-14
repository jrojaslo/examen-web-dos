import Icono from "./Icono";

function SectionTitle({ icono, texto }) {
  return (
    <h2 className="section-title">
      <Icono nombre={icono} />
      <span>{texto}</span>
    </h2>
  );
}

export default SectionTitle;
