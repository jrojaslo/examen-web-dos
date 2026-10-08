import { useState } from 'react';
import { Search, Layers } from 'lucide-react';
import { libros } from '../data/libros';
import BookCard from '../components/BookCard';

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');

  const categorias = Array.from(new Set(libros.map((d) => d.categoria))).sort();

  const librosFiltrados = libros.filter((item) => {
    const termino = busqueda.toLowerCase().trim();
    const coincideTexto =
      termino === '' ||
      item.titulo.toLowerCase().includes(termino) ||
      item.autor.toLowerCase().includes(termino) ||
      item.resumen.toLowerCase().includes(termino) ||
      item.editorial.toLowerCase().includes(termino);

    const coincideCategoria =
      categoria === '' || item.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('');
  };

  return (
    <div className="container">
      <section className="hero-banner" style={{ padding: '28px 36px' }}>
        <h1 className="hero-title">Colección de Textos & Documentos</h1>
        <p className="hero-subtitle">
          Explora el catálogo completo de publicaciones, ensayos y tratados de diseño.
        </p>
      </section>

      <section className="filter-toolbar">
        <div className="search-group">
          <Search className="search-icon-pos icon-sm" size={16} />
          <input
            type="text"
            id="inputBusqueda"
            className="search-input"
            placeholder="Buscar por título, autor o concepto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <select
          id="selectCategoria"
          className="select-category"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <span className="badge badge-neutral" id="conteoResultados">
          <Layers className="icon-sm" size={14} />
          <span id="textoConteo">
            {librosFiltrados.length} de {libros.length} registros
          </span>
        </span>
      </section>

      <section>
        <div className="cards-grid" id="gridCatalogo">
          {librosFiltrados.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                padding: '48px',
                background: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px dashed var(--border-medium)',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                No se encontraron registros con los filtros actuales.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={limpiarFiltros}
              >
                Limpiar Filtros
              </button>
            </div>
          ) : (
            librosFiltrados.map((libro) => (
              <BookCard key={libro.id} libro={libro} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
