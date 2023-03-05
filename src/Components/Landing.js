import '../css/Landing.css'
import Navbar from '../elements/Navbar'
import { useNavigate } from "react-router-dom";

export default function Landing(){

    let navigate = useNavigate(); 
    const createAccount = () =>{ 
      let path = `/register`; 
      navigate(path);
    }

    const login = () => {
        navigate('/login')
    }

    return(
        <div className="landing">
            <Navbar className="navbar"/>
            <main>
                <div className="tagline">Finding Partners</div>
                <div className="sign-in">
                    <button onClick = {login} className='login-btn'>Login</button>
                    <button onClick = {createAccount} className='sign-up-btn'>Sign Up</button>
                </div>
            </main>

        </div>
    )
}