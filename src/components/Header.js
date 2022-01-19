// import { useEffect, useState } from "react"
import "../style/Header.css"

const Header = () => {

    const openMenu = () => {
        document.querySelector(".menu").classList.toggle("disable");
    };

    const closeMenu = () => {
        document.querySelector(".menu").classList.toggle("disable");
    };

    return (

        <header>
            <div className="banner" >
                <div className="mobile-banner-left">
                    <span className="iconify" data-icon="simple-icons:discord"></span>
                    <p>Discord</p>
                </div>

                <div className="menu disable" >
                    <nav>
                        <div className="nav-top">
                            <div className="discord-logo-nav">
                                <span className="iconify" data-icon="simple-icons:discord"></span>
                                <p>Discord</p>
                            </div>
                            <i className="fas fa-times" onClick={closeMenu}></i>
                        </div>
                        <ul className="navigation">
                            <li>Download</li>
                            <li>Nitro</li>
                            <li>Safety</li>
                            <li>Support</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </nav>
                </div>

                <div className="mobile-banner-right">
                    <p class="login-btn">Login</p>
                    <i className="fas fa-bars" id="open-menu" onClick={openMenu}></i>
                </div>
            </div>

        </header>



    )

}

export default Header;