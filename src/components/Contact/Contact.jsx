import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
} from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";
import "./Contact.css";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up EmailJS or backend here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="num">05.</span> Get In Touch
        </motion.h2>

        <div className="contact-grid">
          {/* Left Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Let&apos;s Talk!</h3>
            <p>
              I&apos;m currently open to new opportunities. Whether you have a
              project, a question, or just want to say hi — my inbox is always
              open. I&apos;ll try my best to get back to you!
            </p>

            <ul className="contact-details">
              <li>
                <FiMail />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <FiPhone />
                <span>{personalInfo.phone}</span>
              </li>
              <li>
                <FiMapPin />
                <span>{personalInfo.location}</span>
              </li>
            </ul>

            <div className="contact-socials">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin />
              </a>
              {/* <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer">
                <FiTwitter />
              </a> */}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {sent ? (
                "Message Sent! 🎉"
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
