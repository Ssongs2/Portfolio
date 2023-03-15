import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className='menu'>
                    <li className="menu_item">
                        <Link to="aboutMe" spy={true} smooth={true}>
                            <span className='menu_name'>AboutMe</span>
                        </Link>
                    </li>

                    <li className="menu_item">
                        <Link to="carrer" spy={true} smooth={true}>
                            <span className='menu_name'>Carrer</span>
                        </Link>
                    </li>

                    <li className="menu_item">
                        <Link to="skill" spy={true} smooth={true}>
                            <span className='menu_name'>Skills</span>
                        </Link>
                    </li>

                    <li className="menu_item">
                        <Link to="project" spy={true} smooth={true}>
                            <span className='menu_name'>Project</span>
                        </Link>
                    </li>

                    <li className="menu_item">

                        <Link to="contact" spy={true} smooth={true}>
                            <span className='menu_name'>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;