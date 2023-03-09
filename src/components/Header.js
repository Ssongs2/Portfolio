import React from 'react';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header className="header_module">
            <div className="header_module_container">
                <nav className='navbar'>
                    <ul className='menu'>
                        <li className="menu_item">
                            <Link to="aboutMe" spy={true} smooth={true}>
                                <span className='menu_name'>About Me</span>
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
            </div>
        </header>
    )
}

export default Header;