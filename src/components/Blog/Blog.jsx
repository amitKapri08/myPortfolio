import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar, FiClock, FiArrowUpRight } from "react-icons/fi";
import { blogPosts } from "../../data/portfolioData";
import "./Blog.css";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref}>
      {/* <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="num">05.</span> Blog &amp; Articles
        </motion.h2>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>

              <h3 className="blog-title">
                <a href={post.link} target="_blank" rel="noreferrer">
                  {post.title}
                </a>
              </h3>

              <p className="blog-summary">{post.summary}</p>

              <div className="blog-meta">
                <span>
                  <FiCalendar /> {post.date}
                </span>
                <span>
                  <FiClock /> {post.readTime}
                </span>
              </div>

              <a href={post.link} target="_blank" rel="noreferrer" className="blog-read-more">
                Read Article <FiArrowUpRight />
              </a>
            </motion.article>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Blog;
