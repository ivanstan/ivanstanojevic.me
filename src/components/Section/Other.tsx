import { Url } from "../Url";

export function Other() {
  return (
    <section id="other" className="odd">
      <div className="container">

        <div className="vertical-align">
          <h2 className="mb-2">Certifications</h2>

          <div className="media">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://www.dropbox.com/s/t84db32ap20nspe/SpaceApps2018.pdf?dl=0"
                     external={true}>SpaceApps 2018 local lead recognition</Url>
              </h3>
              Acknowledgement letter as local lead for NASA Space Apps Challenge 2018 in Belgrade,
              Serbia.
            </div>
          </div>

          <div className="media">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://www.dropbox.com/s/dpoc8ib5u70amg0/654286_1569494.pdf?dl=0"
                     external={true}>Basic Life Support - BLS</Url>
              </h3>
              CPR (Adult / Child / Infant / Choking) AED / First-Aid / Bloodborne Pathogens
            </div>
          </div>

          <div className="media mb-1">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://www.dropbox.com/s/h2aem5ghay9chby/EPFLxEE585xCertificate_edX.pdf?dl=0"
                     external={true}>Space Mission Design and Operations</Url>
              </h3>
              This course builds on university-level mechanics to introduce and illustrate orbital
              dynamics as
              they are applied in the design of space missions. Course lecturer , ESA astronaut Claude
              Nicollier in his teaching focuses on conceptual understanding of space mechanics,
              maneuvers,
              propulsion and control systems used in all spacecraft.
            </div>
          </div>

          <h2 className="mt-2 mb-2">Publications</h2>

          <div className="media">
            <div className="media-body">
              <h3 className="media-heading">
                <Url href="https://www.dropbox.com/s/nni364cor5lesg5/SpaceMissionPreliminaryAnalisys.pdf?dl=0"
                     external={true}>Space Mission Preliminary Analysis - Lunar Far
                  Side Radio Communications</Url>
              </h3>
              Publication written as a final assignment of course "Space Exploration and Rocket
              Science",
              discusses the possibility of communicating with lunar far side using relay satellite
              positioned
              in
              Lagrange points in the Earth - Moon system.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}