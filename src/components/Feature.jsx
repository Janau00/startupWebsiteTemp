export default function Feature({ icon, title, description }) {
    return (
      <div className="feature-card">
        <img src={icon} alt="icon" className="feature-icon" />
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    );
  }
  