import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const displayOthers = showAll ? others : others.slice(0, 3);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="num">04.</span> Things I&apos;ve Built
        </motion.h2>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              className={`featured-card ${i % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
            >
              {/* Project Image / Placeholder */}
              <div className="featured-image">
                <div className="featured-image-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="featured-info">
                <p className="featured-label">Featured Project</p>
                <h3 className="featured-title">{project.title}</h3>
                <div className="featured-desc">
                  <p>{project.description}</p>
                </div>
                <ul className="featured-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="featured-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {/* <motion.h3
          className="other-title"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Other Noteworthy Projects
        </motion.h3> */}

        {/* <div className="other-projects-grid">
          {displayOthers.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.5, duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <div className="card-top">
                <FiFolder className="folder-icon" />
                <div className="card-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <h4 className="card-title">{project.title}</h4>
              <p className="card-desc">{project.description}</p>
              <ul className="card-tags">
                {project.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div> */}

        {others.length > 3 && (
          <motion.div
            className="show-more-wrapper"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <button
              className="btn-outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
