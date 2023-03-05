import React from 'react';

function Header() {
    return (
        <header className="header_module">
            <div className="header_module_container">
                <nav className='navbar'>
                    <ul className='menu'>
                        <li className="menu_item">
                            <a href="#aboutMe"><span className='menu_name'>About Me</span></a>
                        </li>

                        <li className="menu_item">
                            <a href="#carrer"><span className='menu_name'>Carrer</span></a>
                        </li>

                        <li className="menu_item">
                            <a href="#skills"><span className='menu_name'>Skills</span></a>
                        </li>

                        <li className="menu_item">
                            <a href="#project"><span className='menu_name'>Project</span></a>
                        </li>

                        <li className="menu_item">
                            <a href="#contact"><span className='menu_name'>Contact</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;