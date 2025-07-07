function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="logo">Startup Name</h1>

        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-buttons">
          <button className="btn btn-secondary">EN</button>
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
