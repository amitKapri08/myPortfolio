import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "../../data/portfolioData";
import "./Experience.css";

const Experience = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="num">03.</span> Where I&apos;ve Worked
        </motion.h2>

        <div className="exp-layout">
          {/* Company Tabs */}
          <motion.div
            className="exp-tabs"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {experience.map((exp, i) => (
              <button
                key={exp.id}
                className={`exp-tab-btn ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            className="exp-content"
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="exp-role">
              {experience[active].role}{" "}
              <span className="exp-company">@ {experience[active].company}</span>
            </h3>
            <p className="exp-period">
              {experience[active].period} · {experience[active].location}
            </p>

            <ul className="exp-duties">
              {experience[active].description.map((duty, i) => (
                <li key={i}>
                  <span className="arrow">▹</span> {duty}
                </li>
              ))}
            </ul>

            <div className="exp-tech-tags">
              {experience[active].tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
