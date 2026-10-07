import {
  Star,
  BookMarked,
  Calendar,
  Landmark,
  Sliders,
  LayoutGrid,
  Moon,
  Type,
  Box,
  BookOpen
} from 'lucide-react';

function getCategoryClass(categoria) {
  switch (categoria) {
    case 'Arquitectura':
      return 'badge-arquitectura';
    case 'Diseño Industrial':
      return 'badge-industrial';
    case 'Diseño Gráfico':
      return 'badge-grafico';
    case 'Estética':
      return 'badge-estetica';
    case 'Tipografía':
      return 'badge-tipografia';
    default:
      return 'badge-industrial';
  }
}

function renderCategoryIcon(iconName) {
  switch (iconName) {
    case 'landmark':
      return <Landmark size={20} />;
    case 'sliders':
      return <Sliders size={20} />;
    case 'layout-grid':
      return <LayoutGrid size={20} />;
    case 'moon':
      return <Moon size={20} />;
    case 'type':
      return <Type size={20} />;
    case 'box':
      return <Box size={20} />;
    default:
      return <BookOpen size={20} />;
  }
}

export default function BookCard({ libro }) {
  const badgeClass = getCategoryClass(libro.categoria);

  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            {renderCategoryIcon(libro.icono)}
          </div>
          <span className="card-rating-badge">
            <Star className="icon-sm" size={14} />
            <span>{libro.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className={`badge ${badgeClass}`} style={{ marginBottom: '12px' }}>
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
          <BookMarked className="icon-sm" size={14} />
          <span>{libro.paginas} páginas</span>
        </span>
        <span className="card-meta" style={{ color: 'var(--text-muted)' }}>
          <Calendar className="icon-sm" size={14} />
          <span>Edición {libro.anio}</span>
        </span>
      </div>
    </article>
  );
}
