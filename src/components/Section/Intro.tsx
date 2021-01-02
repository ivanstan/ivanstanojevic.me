import { Testimonials } from "../Testimonials";

export function Intro() {
  return (
    <section id="intro" className="intro-section"
             style={{ background: 'url(images/desk.png) no-repeat 0 0', backgroundSize: 'cover' }}>
      <meta itemProp="jobTitle" content="Software Developer"/>
      <meta itemProp="givenName" content="Ivan"/>
      <meta itemProp="familyName" content="Stanojević"/>
      <meta itemProp="email" content="ivanstan@gmail.com"/>
      <meta itemProp="gender" content="male"/>

      <div itemProp="worksFor" itemScope itemType="http://schema.org/Organization">
        <meta itemProp="url" content="https://byteout.com"/>
        <meta itemProp="name" content="Byteout Software"/>
      </div>

      <div className="container">
        <div className="vertical-align">
          <div className="logo">
            <img src="images/me.png" className="mb-2 img-fluid"
                 alt="Ivan Stanojević" itemProp="image"/>
          </div>
          <h1 className="text-xs-center name mb-4" itemProp="name">Ivan Stanojević</h1>
          <Testimonials/>
        </div>
      </div>
    </section>
  );
}