import "../style/Login.css"
import { Link } from "react-router-dom"

const Login = () => {

    return (

        <main className="login-bg">
            <div className="login-container">
                <Link to="/" className="discord-logo">
                    <span className="iconify" data-icon="simple-icons:discord"></span>
                    <p>Discord</p>
                </Link>

                <div className="login-laptop-left">
                    <div className="login-text">
                        <h3>Welcome back!</h3>
                        <p>We're exited to see you again!</p>
                    </div>

                    <form>
                        <div>
                            <label>EMAIL</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>PASSWORD</label>
                            <input type="text" />
                        </div>

                        <p><span>Forgot your password?</span></p>

                        <button type="submit" className="login-btn">Login</button>
                        <p>Need an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>

                <div className="login-laptop-right">
                    <div className="qr-code"></div>
                    <h2>Log in with QR Code</h2>
                    <p>Scan this with the <span>Discord mobile app</span> to log in instantly.</p>
                </div>


            </div>
        </main>

    )

}

export default Login;