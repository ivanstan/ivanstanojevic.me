import React from 'react';
import { NavBar } from "./NavBar";
import { Contact } from "./Section/Contact";
import { About } from "./Section/About";
import { Intro } from "./Section/Intro"
import { Projects } from "./Section/Projects";
import { Other } from "./Section/Other";

function App() {
  return (
    <>
      <NavBar/>
      <div style={{scrollSnapType: "y mandatory"}}>
        <Intro/>
        <About/>
        <Projects/>
        <Other/>
        <Contact/>
      </div>

    </>
  );
}

export default App;
