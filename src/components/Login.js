import "../style/Login.css"
import { Link } from "react-router-dom"

const Login = () => {

    return (

        <main>
            <div className="login-container">
                <Link to="/">
                    <div className="discord-logo">
                        <span className="iconify" data-icon="simple-icons:discord"></span>
                        <p>Discord</p>
                    </div>
                </Link>

                <div className="login-text">
                    <h2>Welcome back!</h2>
                    <p>We're exited to see you again!</p>
                </div>

                <form>
                    <label>EMAIL</label>
                    <input type="text" />

                    <label>PASSWORD</label>
                    <input type="text" />

                    <p>Forgot your password?</p>

                    <button type="submit" class="login-btn">Login</button>
                    <p><span>Need an account?</span> Register</p>
                </form>

            </div>
        </main>

    )

}

export default Login;