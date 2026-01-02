export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              Have a project in mind or just want to chat about space tech? 
              I'm always open to interesting conversations and collaboration opportunities.
            </p>
            
            <ul className="contact-links">
              <li>
                <a href="mailto:ivanstan@gmail.com">
                  <i className="fa fa-envelope" />
                  ivanstan@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ivan-stanojevic-1405988" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ivanstan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <form 
            action="https://formspree.io/ivanstan@gmail.com" 
            method="POST"
            className="contact-form"
          >
            <input 
              type="text" 
              name="name" 
              className="form-input" 
              placeholder="Your name"
              required
            />
            <input 
              type="email" 
              name="_replyto" 
              className="form-input"
              placeholder="Your email"
              required
            />
            <textarea 
              name="message"
              className="form-input"
              placeholder="Your message"
              rows={5}
              required
            />
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

