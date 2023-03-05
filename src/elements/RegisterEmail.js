import '../css/LoginEmail.css'
import { useNavigate } from 'react-router-dom';

export default function RegisterEmail(){

    let navigate = useNavigate();
    
    function navToCreateAccount(){
        navigate('/create-account');
    }

    function navToLogin(){
        navigate('/login');
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
                    <button onClick ={navToCreateAccount} className='btn login-btns'>
                        Register
                    </button>
                    <div className="dont-have-acc">Already have an account? <span onClick = {navToLogin} className='register-bold'>LogIn</span></div>
                </form>
        </div>
    )
}