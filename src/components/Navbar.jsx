import { Link, NavLink } from "react-router-dom";
import Icono from "./Icono";

function Navbar({ nombreSitio, enlaces }) {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="brand">
          <div className="brand-badge">
            <Icono nombre="book-open" />
          </div>
          <span>{nombreSitio}</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {enlaces.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink to={enlace.ruta} end={enlace.ruta === "/"}>
                  <Icono nombre={enlace.icono} className="icon-sm" />
                  <span>{enlace.texto}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
