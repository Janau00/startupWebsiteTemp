function Header() {
  return (
    <header>
      <h1>Startup Name</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#home" aria-label="Home section">Home</a></li>
          <li><a href="#about" aria-label="About section">About</a></li>
          <li><a href="#services" aria-label="Services section">Services</a></li>
          <li><a href="#contact" aria-label="Contact section">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
