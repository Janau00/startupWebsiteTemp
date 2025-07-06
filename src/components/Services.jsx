
import { ServicesList } from '../data.js';


export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">OUR SERVICES</h2>
      <p className="section-subtitle">
      Here you can write a description of the services your startup offers.
      </p>
      <div className="services-container">
        {ServicesList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

// merged inner component
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <img src={icon} alt="Service icon" className="service-icon" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}
