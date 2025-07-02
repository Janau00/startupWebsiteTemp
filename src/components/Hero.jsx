import heroImage from '../assets/heroimage.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={heroImage} alt="hero" className="hero-img" />
        <div className="hero-text">
          <h2>Welcome to Our Platform</h2>
          <p>Here you can add a description or your startup slogan!</p>
        </div>
      </div>
    </section>
  );
}
