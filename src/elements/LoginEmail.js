import '../css/LoginEmail.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginEmail(){

    let navigate = useNavigate();
    
    function navToRegister(){
        navigate('/register');
    }

    function navToApp(){
        if (userName === email && password === passWord) {
            navigate('/app');
        }
        else {
            alert('Wrong username or password');
        }
    }

    let userName = 'sahildoshi10@gmail.com';
    let passWord = 'abcd1234';

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <div className="login-email">
                <form className="login-email-card">
                    <h1 className="get-started">Get Started</h1>
                    <div className="email-input">
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="pass-input">
                        <label htmlFor="">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button onClick ={navToApp} className='btn login-btns'>
                        Login
                    </button>
                    <div className="dont-have-acc">Don't have an account? <span onClick = {navToRegister} className='register-bold'>Register</span></div>
                </form>
        </div>
    )
}