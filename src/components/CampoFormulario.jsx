function CampoFormulario({ id, etiqueta, children }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {etiqueta}
      </label>
      {children}
    </div>
  );
}

export default CampoFormulario;
