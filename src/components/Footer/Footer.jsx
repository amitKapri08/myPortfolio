import { FiHeart, FiGithub } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p>
        Designed &amp; Built with <FiHeart className="heart" /> by{" "}
        <span className="footer-name">{personalInfo.name}</span>
      </p>
      <div className="footer-links">
        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
          <FiGithub /> Source Code
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
