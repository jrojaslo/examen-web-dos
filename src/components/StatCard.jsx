import Icono from "./Icono";

function StatCard({ etiqueta, valor, icono, fondo, color }) {
  return (
    <article className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={{ backgroundColor: fondo, color: color }}
      >
        <Icono nombre={icono} />
      </div>
      <div className="stat-content">
        <span className="stat-number">{valor}</span>
        <span className="stat-label">{etiqueta}</span>
      </div>
    </article>
  );
}

export default StatCard;
