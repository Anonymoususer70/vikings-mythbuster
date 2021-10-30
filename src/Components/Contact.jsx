import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <article className="contact">
          <div className="contact-text">
            <h1>Contact the Developer</h1>
            <div className="contact-icons">

              <a href="https://twitter.com/Pranavthedev" target="_blank"><TwitterIcon className="icons" /></a>

              <a href="https://github.com/Anonymoususer70" target="_blank"><GitHubIcon className="icons" /></a>

            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Contact;
