import "./navbar.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const links = [
  { label: "Home", href: "#Homepage" },
  { label: "Portfolio", href: "#Portfolio" },
  { label: "Services", href: "#Services" },
  { label: "Contact", href: "#Contact" },
];

const Navbar = () => {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${elevated ? "is-stuck" : ""}`}>
      <Sidebar />
      <div className="wrapper">
        <motion.a
          href="#Homepage"
          className="logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Wendel<span className="accent">.dev</span>
        </motion.a>

        <nav aria-label="Primary">
          <ul className="navlinks">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="social">
          <a href="https://www.linkedin.com/in/wendel-de-lana/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/wendel.lana" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://amzn.to/4d3jgpk" target="_blank" rel="noopener noreferrer">
            <img src="/amazon.webp" alt="Amazon" />
          </a>
          <a href="https://github.com/WendelLana" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
