export function Project() {
  return (
    <section id="project">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Featured Project</span>
          <h2>Open Source Contribution</h2>
        </div>
        
        <div className="project-featured">
          <span className="project-badge">
            <i className="fa fa-rocket" />
            NASA Official API
          </span>
          
          <h3 className="project-title">Two-Line Element (TLE) API</h3>
          
          <p className="project-description">
            Creator and maintainer of NASA's official TLE API, providing real-time orbital data 
            for thousands of satellites and space objects. The API powers applications ranging 
            from amateur satellite tracking to professional aerospace tools.
          </p>
          
          <div className="project-stats">
            <div className="stat">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Daily Requests</div>
            </div>
            <div className="stat">
              <div className="stat-value">15K+</div>
              <div className="stat-label">Tracked Objects</div>
            </div>
            <div className="stat">
              <div className="stat-value">2018</div>
              <div className="stat-label">Launched</div>
            </div>
          </div>
          
          <a 
            href="https://api.nasa.gov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Explore API Documentation
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

