import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import contactInfo from "../data/contact.json"; // adjust path if needed

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            {/* Logo */}
            <div className="logo"><p>Erica-Livia</p></div>

            {/* Desktop Navigation */}
            <div className={`nav ${isOpen ? "nav-open" : ""}`}>
                <ul className="links-container">
                    <li className="links"><a href='#about'>About</a></li>
                    <li className="links"><a href='#experience'>Experiences</a></li>
                    <li className="links"><a href='#projects'>Projects</a></li>
                    <li className="links"><a href='#contact'>Contact Me</a></li>
                </ul>
            </div>

            {/* Social Media */}
            <div className="sm">
                <ul className="links-container">
                    <li className="links">
                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="links">
                        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="links">
                        <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Icon */}
            <div className="toolbar" onClick={toggleMenu}>
                <FaBars />
            </div>
        </div>
    );
}

export default Navbar;
