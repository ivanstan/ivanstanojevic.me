export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="images/me.png" alt="Ivan Stanojević" />
        </div>
        
        <h1 className="hero-title">Ivan Stanojević</h1>
        
        <p className="hero-subtitle">
          Senior Software Engineer & NASA API Contributor
        </p>
        
        <div className="hero-tagline">
          <span className="dot" />
          <span>Building software that reaches for the stars</span>
        </div>
        
        <div className="hero-links">
          <a 
            href="https://github.com/ivanstan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            <i className="fab fa-github" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/ivan-stanojevic-1405988" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            <i className="fab fa-linkedin" />
            LinkedIn
          </a>
          <a 
            href="mailto:ivanstan@gmail.com"
            className="hero-link"
          >
            <i className="fa fa-envelope" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

