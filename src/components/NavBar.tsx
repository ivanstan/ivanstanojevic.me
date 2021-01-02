import React from "react";

export class NavBar extends React.Component<any, any> {
  render() {
    return <nav className="navbar fixed-top py-4" id="nav-main">
      <div className="container">
        <div className="row flex-grow-1">
          <div className="col-xl-5 offset-xl-2 col-md-9 col-8">
              <ul className="nav nav-pills main-menu">
                <li className="nav-item aside-toggle">
                  <a className="nav-link" href="#" id="nav-aside-toggle"><i
                    className="fas fa-bars"/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#intro">Intro</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#other">Other</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
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