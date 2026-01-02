export function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "React Native", "Laravel", "Symfony",
    "Node.js", "PHP", "PostgreSQL", "Docker", "AWS", "REST APIs"
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2>Crafting Code Since 2011</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Senior Software Engineer at Byteout Software with over a decade of experience 
              building robust web applications and APIs. My work spans from enterprise solutions 
              to open-source projects that serve the global developer community.
            </p>
            <p>
              Beyond conventional software development, I have a deep passion for space exploration 
              and aerospace technology. This led me to create and maintain NASA's official TLE API, 
              making satellite tracking data accessible to developers worldwide.
            </p>
            <p>
              I believe in writing clean, maintainable code that solves real problems. Every project 
              is approached as a mission where failure is not an option.
            </p>
          </div>
          
          <div className="about-skills">
            <h3>Tech Stack</h3>
            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

