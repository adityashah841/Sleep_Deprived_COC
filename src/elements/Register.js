import '../css/Register.css'
import { useNavigate } from 'react-router-dom';

export default function Register(){

    let navigate = useNavigate();

    function navToLogin(){
        navigate('/login');
    }

    function toRegisterLogin(){
        navigate('/register/email')
    }

    return(
        <div className="register">
            <div className="register-card">                
                <h1 className="get-started">Register</h1>
                <button onClick={toRegisterLogin} className="register-with-email btn register-btns">Register with Email</button>
                <button className="register-with-phone btn register-btns">Register with Phone Number</button>
                <div className="already-have-acc">Already have an account? <span onClick = {navToLogin} className='login-bold'>Login</span></div>
            </div>
        </div>
    )
}