import contactInfo from '../data/contact.json';
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">

                {/* Contact Info Section */}
                <div className="footer-info">
                    <h2>Contact</h2>
                    <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                    <p>Phone: {contactInfo.phone}</p>
                    <div className="social-icons">
                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
                        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                        <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="footer-form">
                    <h2>Send a Message</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows={4} required />
                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2025 Erica-Livia Ingabire. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
