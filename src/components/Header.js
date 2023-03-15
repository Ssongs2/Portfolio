import React, { useState } from 'react';
import Navbar from './view/Navbar';

function Header() {
    const [isToggle, setToggle] = useState(true);

    const handleToggle = isToggle => {
        setToggle(!isToggle);

        const navbar = document.getElementsByClassName("navbar")[1];
        console.log("handleToggle", isToggle)
        if (isToggle) {
            navbar.style.display = "block";
        } else {
            navbar.style.display = "none";
        }

    }

    return (
        <header className="header_module">
            <div className="header_module_container">
                <div className="mobile_navbar">
                    <button onClick={() => handleToggle(isToggle)} aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" className="mobile_navbar_btn">
                        <svg aria-hidden="true" height={24} viewBox="0 0 16 16" version="1.1" width={24} data-view-component="true" className="">
                            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                        </svg>
                    </button>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;