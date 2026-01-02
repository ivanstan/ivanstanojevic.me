import { useState, useEffect, useCallback } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" }
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
