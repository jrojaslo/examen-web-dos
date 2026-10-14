import Icono from "./Icono";

const clasesCategoria = {
  Arquitectura: "badge-arquitectura",
  "Diseño Industrial": "badge-industrial",
  "Diseño Gráfico": "badge-grafico",
  Estética: "badge-estetica",
  Tipografía: "badge-tipografia",
};

function BookCard({ libro }) {
  const claseBadge = clasesCategoria[libro.categoria] || "badge-industrial";

  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            <Icono nombre={libro.icono} />
          </div>
          <span className="card-rating-badge">
            <Icono nombre="star" className="icon-sm" />
            <span>{libro.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className={`badge badge-spaced ${claseBadge}`}>
          {libro.categoria}
        </span>
        <h3 className="card-title">{libro.titulo}</h3>
        <p className="card-author">
          Por {libro.autor} ({libro.anio})
        </p>
        <p className="card-summary">{libro.resumen}</p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{libro.editorial}</strong>
          </span>
          <span>
            ISBN: <code>{libro.isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icono nombre="book-marked" className="icon-sm" />
          <span>{libro.paginas} páginas</span>
        </span>
        <span className="card-meta card-meta-muted">
          <Icono nombre="calendar" className="icon-sm" />
          <span>Edición {libro.anio}</span>
        </span>
      </div>
    </article>
  );
}

export default BookCard;
