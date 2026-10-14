import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const nombreSitio = "Librería Archivo";

const enlaces = [
  { ruta: "/", texto: "Inicio", icono: "home" },
  { ruta: "/catalogo", texto: "Catálogo", icono: "grid" },
  { ruta: "/contacto", texto: "Contacto", icono: "mail" },
];

function Layout() {
  return (
    <>
      <Navbar nombreSitio={nombreSitio} enlaces={enlaces} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer
        nombreSitio={nombreSitio}
        descripcion="Catálogo bibliográfico de diseño"
        leyenda="Colección abierta para consulta"
      />
    </>
  );
}

export default Layout;
