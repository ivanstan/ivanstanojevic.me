import { NavBar } from "./NavBar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Project } from "./sections/Project";
import { Recognition } from "./sections/Recognition";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <div className="bg-pattern" />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Project />
        <Recognition />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Ivan Stanojević. Built with React.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
