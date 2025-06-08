// import { FaCircleUser } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
// import {useState} from "react";


function Navbar(){

    // function toggleToolBar() {
    //     setShow(prev => !prev);
    // }


    return (
        <>
            <div className="navbar">
                {/* Logo or Icon */}
                {/*<div><FaCircleUser /></div>*/}
                <div className="logo"><p>Erica-Livia</p></div>

                {/* Links */}
                <div className="nav">
                    <ul className="links-container">
                        <li className="links"><a href='#about'>About</a></li>
                        <li className="links"><a href='#experience'>Experiences</a></li>
                        <li className="links"><a href='#projects'>Projects</a></li>
                        <li className="links"><a href='#contact'>Contact Me</a></li>
                    </ul>
                </div>

                {/* Link to social Medial */}
                <div className="sm">
                    <ul className="links-container">
                        <li className="links"><a href=''><FaLinkedinIn/></a></li>
                        <li className="links"><a href=''><FaGithub/></a></li>
                        <li className="links"><a href=''><FaInstagram/></a></li>
                    </ul>
                </div>

                {/* Mobile view*/}
                <div className="toolbar" >
                    <FaBars />
                </div>

                {/*{show && (*/}
                {/*    */}
                {/*)}*/}

            </div>
        </>
    )
}

export default Navbar;