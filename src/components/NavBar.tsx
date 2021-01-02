import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollspyNav from "react-scrollspy-nav";

export class NavBar extends React.Component<any, any> {
  render() {
    return <nav className="navbar fixed-top py-4" id="nav-main">
      <div className="container">
        <div className="row flex-grow-1">
          <div className="col-xl-5 offset-xl-2 col-md-9 col-8">

            <ScrollspyNav
              scrollTargetIds={["intro", "about", "projects", "other", "contact"]}
              activeNavClass="active"
              scrollDuration="1000"
              offset={-1}
            >
              <ul className="nav nav-pills main-menu">
                <li className="nav-item aside-toggle">
                  <AnchorLink className="nav-link" href="#" id="nav-aside-toggle"><i
                    className="fas fa-bars"/></AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link active" href="#intro">Intro</AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#about">About</AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#projects">Projects</AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#other">Other</AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </ScrollspyNav>
            <aside id="nav-aside" className="p-3" style={{ top: 88 }}>
              <a href="#" id="nav-aside-close"/>
              <ul className="nav nav-pills main-menu">
                <li className="nav-item">
                  <a className="nav-link" href="https://ivanstanojevic.me/#intro">Intro</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://ivanstanojevic.me/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://ivanstanojevic.me/#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://ivanstanojevic.me/#other">Other</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://ivanstanojevic.me/#contact">Contact</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </nav>;
  }
}