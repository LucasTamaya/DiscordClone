import "../style/Register.css"
import { Link } from "react-router-dom";

const Register = () => {

    return (

        <main className="login-bg">

            <div className="login-container">
                <Link to="/" className="discord-logo">
                    <span className="iconify" data-icon="simple-icons:discord"></span>
                    <p>Discord</p>
                </Link>

                <div className="register-text">
                    <h3>Create an account</h3>
                </div>

                <form>
                    <div>
                        <label>EMAIL</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>USERNAME</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input type="text" />
                    </div>

                    <button type="submit" className="login-btn">Continue</button>
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
        </main>

    )

}

export default Register;