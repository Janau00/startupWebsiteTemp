// import heroImage from '../assets/icon.png';
import heroPic from '../assets/Online world-rafiki.png'

export default function Hero() {
  return (
    <section className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h1>Unleash the Power of AI</h1>
      <p>Boost your business with cutting-edge AI tools and automation designed for startups and creators.</p>
      <div className="hero-buttons">
        <button className="cta-button">Get Started</button>
        <button className="cta-button secondary">Learn More</button>
      </div>
    </div>
    <div className="hero-image">
      <img src={heroPic} alt="AI Illustration" />
    </div>
  </div>
</section>

  );
}