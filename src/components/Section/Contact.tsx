import { Url } from "../../bit/url";

export function Contact() {
  return (
    <section id="contact">
      <div className="vertical-align">
        <h2 className="d-none">Contact</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="contact">
                <li>
                  <Url external={true}
                       href="mailto:ivanstan@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"/> ivanstan@gmail.com
                  </Url>
                </li>
                <li>
                  <Url external={true}
                       href="//www.linkedin.com/in/ivan-stanojevic-1405988">
                    <i className="fab fa-linkedin" aria-hidden="true"/> LinkedIn
                  </Url>
                </li>
                <li>
                  <Url external={true}
                       href="//github.com/ivanstan">
                    <i className="fab fa-github"/> GitHub
                  </Url>
                </li>
                <li>
                  <Url external={true}
                       href="skype:ivanstan88?call">
                    <i className="fab fa-skype" aria-hidden="true"/> ivanstan88
                  </Url>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <form action="https://formspree.io/ivanstan@gmail.com" method="POST">
                <div className="form-group">
                  <input type="text" name="name" id="name" className="form-control" required
                         placeholder="Your name"/>
                </div>
                <div className="form-group">
                  <input type="email" name="_replyto" id="email" className="form-control"
                         placeholder="Your email" required/>
                </div>
                <div className="form-group">
                                        <textarea placeholder="Your message" rows={5 as number} required
                                                  className="form-control"/>
                </div>
                <input type="submit" className="btn btn-success" value="Send"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}