import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiArrowDown,
} from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  const typingSequence = personalInfo.taglines.flatMap((t) => [t, 2000]);

  return (
    <section id="hero" className="hero">
      {/* Animated background grid */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {personalInfo.name}<span className="accent-dot">.</span>
        </motion.h1>

        <motion.h2
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I&apos;m a{" "}
          <TypeAnimation
            sequence={typingSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </motion.h2>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="projects" smooth duration={500} offset={-70}>
            <span className="btn-outline">View My Work</span>
          </Link>
          <Link to="contact" smooth duration={500} offset={-70}>
            <span className="btn-ghost">Get In Touch</span>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { icon: <FiGithub />, href: personalInfo.socials.github, label: "GitHub" },
            { icon: <FiLinkedin />, href: personalInfo.socials.linkedin, label: "LinkedIn" },
            // { icon: <FiTwitter />, href: personalInfo.socials.twitter, label: "Twitter" },
            // { icon: <FiInstagram />, href: personalInfo.socials.instagram, label: "Instagram" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="social-icon"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Link to="about" smooth duration={500} offset={-70}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
