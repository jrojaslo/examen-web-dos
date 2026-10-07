export default function StatCard({ label, valor, icon: Icon, bg, color }) {
  return (
    <article className="stat-card">
      <div className="stat-icon-wrapper" style={{ backgroundColor: bg, color: color }}>
        <Icon size={20} />
      </div>
      <div className="stat-content">
        <span className="stat-number">{valor}</span>
        <span className="stat-label">{label}</span>
      </div>
    </article>
  );
}
