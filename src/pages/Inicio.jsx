import { Link } from "react-router-dom";
import { datos } from "../data/libros";
import HeroBanner from "../components/HeroBanner";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import BookCard from "../components/BookCard";
import Icono from "../components/Icono";

function Inicio() {
  const totalLibros = datos.length;
  const categoriasUnicas = new Set(datos.map((d) => d.categoria)).size;
  const promedioRating = (
    datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros
  ).toFixed(1);
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0);

  const metricas = [
    { etiqueta: "Libros Indexados", valor: totalLibros, icono: "book", fondo: "#eef2ff", color: "#4f46e5" },
    { etiqueta: "Categorías Temáticas", valor: categoriasUnicas, icono: "tag", fondo: "#e0f2fe", color: "#0284c7" },
    { etiqueta: "Calificación Promedio", valor: promedioRating, icono: "star", fondo: "#fef3c7", color: "#d97706" },
    { etiqueta: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "file-text", fondo: "#ecfdf5", color: "#059669" },
  ];

  const destacados = datos.filter((d) => d.destacado);

  return (
    <>
      <HeroBanner
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <div className="section-header">
          <SectionTitle icono="bar-chart-3" texto="Resumen del Repositorio" />
        </div>
        <div className="stats-grid">
          {metricas.map((m) => (
            <StatCard
              key={m.etiqueta}
              etiqueta={m.etiqueta}
              valor={m.valor}
              icono={m.icono}
              fondo={m.fondo}
              color={m.color}
            />
          ))}
        </div>
      </section>

      <section className="section-spaced">
        <div className="section-header">
          <SectionTitle icono="star" texto="Obras Destacadas" />
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <Icono nombre="arrow-right" className="icon-sm" />
          </Link>
        </div>

        <div className="cards-grid">
          {destacados.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
