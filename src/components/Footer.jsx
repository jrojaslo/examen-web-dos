function Footer({ nombreSitio, descripcion, leyenda }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span>
          <strong>{nombreSitio}</strong> &bull; {descripcion}
        </span>
        <span>{leyenda}</span>
      </div>
    </footer>
  );
}

export default Footer;
