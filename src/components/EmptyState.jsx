function EmptyState({ mensaje, textoBoton, onLimpiar }) {
  return (
    <div className="empty-state">
      <p>{mensaje}</p>
      <button type="button" className="btn btn-secondary" onClick={onLimpiar}>
        {textoBoton}
      </button>
    </div>
  );
}

export default EmptyState;
