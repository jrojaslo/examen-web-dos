import { Link } from 'react-router-dom';
import { BarChart3, Star, ArrowRight, Book, Tag, FileText } from 'lucide-react';
import { libros } from '../data/libros';
import BookCard from '../components/BookCard';
import StatCard from '../components/StatCard';

export default function Inicio() {
  const totalLibros = libros.length;
  const categoriasUnicas = new Set(libros.map((d) => d.categoria)).size;
  const promedioRating = (
    libros.reduce((acc, d) => acc + d.calificacion, 0) / (totalLibros || 1)
  ).toFixed(1);
  const totalPaginas = libros.reduce((acc, d) => acc + d.paginas, 0);

  const stats = [
    {
      id: 'libros',
      label: 'Libros Indexados',
      valor: totalLibros,
      icon: Book,
      bg: '#eef2ff',
      color: '#4f46e5',
    },
    {
      id: 'categorias',
      label: 'Categorías Temáticas',
      valor: categoriasUnicas,
      icon: Tag,
      bg: '#e0f2fe',
      color: '#0284c7',
    },
    {
      id: 'rating',
      label: 'Calificación Promedio',
      valor: promedioRating,
      icon: Star,
      bg: '#fef3c7',
      color: '#d97706',
    },
    {
      id: 'paginas',
      label: 'Páginas Totales',
      valor: totalPaginas.toLocaleString(),
      icon: FileText,
      bg: '#ecfdf5',
      color: '#059669',
    },
  ];

  const destacados = libros.filter((d) => d.destacado);

  return (
    <div className="container">
      <section className="hero-banner">
        <h1 className="hero-title">Biblioteca de Diseño & Teoría Visual</h1>
        <p className="hero-subtitle">
          Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial.
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">
            <BarChart3 size={20} />
            <span>Resumen del Repositorio</span>
          </h2>
        </div>
        <div className="stats-grid" id="resumenMetricas">
          {stats.map((st) => (
            <StatCard
              key={st.id}
              label={st.label}
              valor={st.valor}
              icon={st.icon}
              bg={st.bg}
              color={st.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Star size={20} />
            <span>Obras Destacadas</span>
          </h2>
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <ArrowRight className="icon-sm" size={14} />
          </Link>
        </div>

        <div className="cards-grid" id="gridDestacados">
          {destacados.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </div>
  );
}
