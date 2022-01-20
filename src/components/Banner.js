import {Link} from "react-router-dom"

const Banner = () => {

    const openMenu = () => {
        document.querySelector(".menu").classList.toggle("disable");
    };

    const closeMenu = () => {
        document.querySelector(".menu").classList.toggle("disable");
    };

    return (
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
                <Link class="to-login-page" to="/login">Login</Link>
                <i className="fas fa-bars" id="open-menu" onClick={openMenu}></i>
            </div>
        </div>

    )

}

export default Banner;