import { Url } from "../../bit/url";

export function Projects() {
  return (
    <section id="projects" className="even">
      <div className="container">

        <div className="vertical-align">
          <h2>Projects</h2>

          <div className="media mt-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://api.nasa.gov/" external={true}> NASA TLE API</Url>
              </h3>
              Creator and maintainer of NASA's TLE API. Info available at <Url
              external={true}>https://api.nasa.gov/</Url>
            </div>
          </div>

          <div className="media mt-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://data.ivanstanojevic.me/" external={true}> OpenData</Url>
              </h3>
              In October 2018 I started this open data initiative with goal to make bulky scientific data
              available for web developers.
            </div>
          </div>

          <div className="media mt-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://2015.spaceappschallenge.org/project/around-earth/" external={true}> Around
                  Earth</Url>
              </h3>
              People's award winning project presented on NASA's SpaceApps 2015 at ESA center in
              Noordwijk, which main goal is
              visualisation of LEO satellites and real time orbital situation awareness.
            </div>
          </div>

          <div className="media mt-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://packagist.org/packages/yswery/dns" external={true}> Contributor
                  of PHP DNS
                  server project.</Url>
              </h3>
              Implementation of Authoritative DNS Server written in pure PHP.
            </div>
          </div>

          <div className="media mt-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="http://cafemusic.rs" external={true}> Caffe Music</Url>
              </h3>
              Coffee Shop web site with eCommerce created with Drupal.
            </div>
          </div>

          <div className="media mt-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://play.google.com/store/apps/details?id=com.ivanstan.glutenfree"
                     external={true}> GlutenFree</Url>
              </h3>
              GlutenFree contains a list of gluten-free products, their details and descriptions, making
              life
              easier
              for people suffering from gluten intolerance or those who simply want to eat healthy and
              follow the
              latest nutrition trends.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}