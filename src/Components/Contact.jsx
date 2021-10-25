import './Contact.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    return (
        <>
          <section className="contact-section">
                <article className = "contact">
                    <div className="contact-text">
                        <h1>Contact the Developer</h1>
                        <div className="contact-icons">
                            <TwitterIcon className="icons"/>
                            <InstagramIcon className="icons"/>
                            <GitHubIcon className="icons"/>
                        </div>
                    </div>
                </article>    
          </section>  
        </>
    )
}

export default Contact
