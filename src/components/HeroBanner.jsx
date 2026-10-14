function HeroBanner({ titulo, subtitulo, compacto }) {
  const clase = compacto ? "hero-banner hero-banner-compact" : "hero-banner";

  return (
    <section className={clase}>
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{subtitulo}</p>
    </section>
  );
}

export default HeroBanner;
