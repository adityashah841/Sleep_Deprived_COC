import '../css/LoginEmail.css'
import { useNavigate } from 'react-router-dom';

export default function LoginEmail(){

    let navigate = useNavigate();
    
    function navToRegister(){
        navigate('/register');
    }

    function navToApp(){
        navigate('/app');
    }

    return(
        <div className="login-email">
                <form className="login-email-card">
                    <h1 className="get-started">Get Started</h1>
                    <div className="email-input">
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className="pass-input">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <button onClick ={navToApp} className='btn login-btns'>
                        Login
                    </button>
                    <div className="dont-have-acc">Don't have an account? <span onClick = {navToRegister} className='register-bold'>Register</span></div>
                </form>
        </div>
    )
}