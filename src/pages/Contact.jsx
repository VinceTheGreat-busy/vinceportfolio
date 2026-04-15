import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGitlab,
    faFacebook,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/contact.css';

function Contact() {
    return (
        <main>
            <div className="contact-page">
                <h1>Let’s Connect</h1>

                <div className="contact-grid">

                    <a className="contact-card" href="https://github.com/VinceTheGreat-busy" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>GitHub</p>
                    </a>

                    <a className="contact-card" href="https://gitlab.com/@vincepalaming2108" target="_blank">
                        <FontAwesomeIcon icon={faGitlab} />
                        <p>GitLab</p>
                    </a>

                    <a className="contact-card" href="https://facebook.com/only.vince01" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                        <p>Facebook</p>
                    </a>

                    <a className="contact-card" href="mailto:vincepalaming2108@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Gmail</p>
                    </a>

                    <a className="contact-card" href="https://instagram.com/v_nc.who/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                        <p>Instagram</p>
                    </a>

                    <a className="contact-card" href="https://linkedin.com/in/vince-palaming-549b1935b/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </a>

                </div>
            </div>
        </main>
    );
}

export default Contact;