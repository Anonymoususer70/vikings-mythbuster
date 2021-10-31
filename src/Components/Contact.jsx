import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <article className="contact">
          <div className="contact-text">
            <h1>Contact the Developer</h1>
            <div className="contact-icons">

              <a href="https://twitter.com/Pranavthedev" target="_blank" rel="noreferrer"><TwitterIcon className="icons" /></a>
 
              <a href="https://github.com/Anonymoususer70" target="_blank" rel="noreferrer"><GitHubIcon className="icons" /></a>

            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Contact;
