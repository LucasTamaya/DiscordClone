import { useEffect, useState } from "react"
import "../style/Header.css"

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const closeMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    console.log(toggleMenu)

    return (

        <header>
            <div className="banner" >
                <div className="mobile-banner-left">
                    <span className="iconify" data-icon="simple-icons:discord"></span>
                    <p>Discord</p>
                </div>

                <div className="mobile-banner-right">
                    <p>Login</p>
                    <i className="fas fa-bars" onClick={openMenu}></i>
                </div>
            </div>

            {toggleMenu && (
                <div className="menu" >
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
            )}

        </header>



    )

}

export default Header;