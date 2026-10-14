import { useState } from "react";
import { datos } from "../data/libros";
import HeroBanner from "../components/HeroBanner";
import FilterToolbar from "../components/FilterToolbar";
import BookCard from "../components/BookCard";
import EmptyState from "../components/EmptyState";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = Array.from(new Set(datos.map((d) => d.categoria))).sort();

  const termino = busqueda.toLowerCase().trim();

  const resultados = datos.filter((libro) => {
    const coincideTexto =
      libro.titulo.toLowerCase().includes(termino) ||
      libro.autor.toLowerCase().includes(termino) ||
      libro.resumen.toLowerCase().includes(termino) ||
      libro.editorial.toLowerCase().includes(termino);

    const coincideCategoria = categoria === "" || libro.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("");
  };

  return (
    <>
      <HeroBanner
        compacto
        titulo="Colección de Textos & Documentos"
        subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
      />

      <FilterToolbar
        busqueda={busqueda}
        categoria={categoria}
        categorias={categorias}
        textoConteo={`${resultados.length} de ${datos.length} registros`}
        onCambioBusqueda={setBusqueda}
        onCambioCategoria={setCategoria}
      />

      <section>
        <div className="cards-grid">
          {resultados.length === 0 ? (
            <EmptyState
              mensaje="No se encontraron registros con los filtros actuales."
              textoBoton="Limpiar Filtros"
              onLimpiar={limpiarFiltros}
            />
          ) : (
            resultados.map((libro) => <BookCard key={libro.id} libro={libro} />)
          )}
        </div>
      </section>
    </>
  );
}

export default Catalogo;
