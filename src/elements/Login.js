import '../css/Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login(){

    let navigate = useNavigate();

    function navToRegister(){
        navigate('/register');
    }

    function toEmailLogin(){
        navigate('/login/email')
    }

    return(
        <div className="login">
            <div className="login-card">                
                <h1 className="get-started">Login</h1>
                <button onClick={toEmailLogin} className="login-with-email btn login-btns">Login with Email</button>
                <button className="login-with-phone btn login-btns">Login with Phone Number</button>
                <div className="dont-have-acc">Don't have an account? <span onClick = {navToRegister} className='register-bold'>Register</span></div>
            </div>
        </div>
    )
}