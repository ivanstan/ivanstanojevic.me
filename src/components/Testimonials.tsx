import Slider from "react-slick";
import { Url } from "./Url";

const listStyle = { float: 'left', listStyle: 'none', position: 'relative', width: 1110 } as any;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export function Testimonials() {
  return (
    <div className="slider" style={{ maxWidth: '100%' }}>
      <Slider {...settings}>
        <div
          style={listStyle}
          className="bx-clone" aria-hidden="true">
          <blockquote>
            <p className="mb-0">From our working experience together I
              absolutely appreciate the open
              communication and meticulously-sent updates!</p>
            <footer className="blockquote-footer">Raluca Hreniuc, <Url
              external={true}
              href="https://www.esome.com/">eSome Advertising</Url> Manager
            </footer>
          </blockquote>
        </div>
        <div
          style={listStyle}
          aria-hidden="true">
          <blockquote>
            <p className="mb-0"> ...is the most talented athlete in
              Byteout, always pushing the limits. With his
              endurance he also
              outperforms everybody in programming when he sits in
              front of his computer and gets "into
              the zone".
              Always trying out new trends, he is a technology surfer,
              riding the first wave.</p>
            <footer className="blockquote-footer">Dušan Popović, <Url
              href="http://byteout.com/" external={true}>Byteout</Url>
              &nbsp;CEO
            </footer>
          </blockquote>
        </div>
        <div
          style={listStyle}
          aria-hidden="true">
          <blockquote>
            <p className="mb-0">I can tell you have a wide skillset and
              from all of the examples I can think of
              not one comes to mind in which I expected something from
              your side and it was not delivered
              as expected! Aside from that I appreciate the very clear
              explanations as from my side there
              are never outstanding questions once you have taken your
              time to clarify something, which
              you always do, thank you!</p>
            <footer className="blockquote-footer">Raluca Hreniuc, <a
              href="https://www.esome.com/">eSome
              Advertising</a> Manager
            </footer>
          </blockquote>
        </div>
      </Slider>

      <div className="bx-viewport" aria-live="polite"
           style={{ width: '100%', overflow: 'hidden', position: 'relative', height: 123 }}>
        <div className="slider"
             style={{
               width: '3215%',
               position: 'relative',
               transitionDuration: '0s',
               transform: 'translate3d(-3330px, 0px, 0px)'
             }}>

        </div>
      </div>
    </div>
  );
}