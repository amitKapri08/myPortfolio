import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../../data/portfolioData";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js",
    "Express.js", "MongoDB", "PostgreSQL", "Docker",
  ];

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="num">01.</span> About Me
        </motion.h2>

        <div className="about-grid">
          {/* Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hello! I&apos;m <span className="highlight">{personalInfo.name}</span>, a
              Full Stack Developer based in <span className="highlight">{personalInfo.location}</span>.
              I enjoy creating things that live on the internet, whether that
              be websites, applications, or anything in between.
            </p>
            <p>
              My interest in web development started back when I decided to try
              editing custom Tumblr themes — turns out hacking together a custom
              reblog button taught me a lot about HTML &amp; CSS! Fast-forward to
              today, and I&apos;ve had the privilege of working at a startup, an
              agency, and a large corporation.
            </p>
            <p>
              My main focus these days is building accessible, human-friendly
              products at <span className="highlight">Tech Company Inc</span>. I
              also recently launched a{" "}
              <span className="highlight">course</span> that covers everything
              you need to build a web app with the MERN stack.
            </p>

            <p className="about-tech-title">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="tech-list">
              {technologies.map((tech) => (
                <li key={tech}>
                  <span className="arrow">▹</span> {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Avatar / Photo */}
          <motion.div
            className="about-avatar-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="about-avatar">
              <div className="avatar-initials">
                {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
            <div className="avatar-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
