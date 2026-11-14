import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import "./Navbar.css";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  // { name: "Blog", to: "blog" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="nav-logo">
          &lt;AMIT /&gt;
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="active"
                className="nav-link"
              >
                <span className="nav-num">0{i + 1}.</span> {link.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href={personalInfo.resumeLink || `${import.meta.env.BASE_URL}resume.pdf`}
              className="btn-outline nav-resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <ul className="mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-70}
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-num">0{i + 1}.</span>
                    <br />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeLink || `${import.meta.env.BASE_URL}resume.pdf`}
                  className="btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
