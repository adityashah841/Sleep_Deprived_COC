import '../css/Landing.css'
import Navbar from '../elements/Navbar'

export default function Landing(){
    return(
        <div className="landing">
            <Navbar className="navbar"/>
            <main>
                <div className="tagline">Finding Partners</div>
                <div className="sign-in">
                    <button className='login-btn'>Login</button>
                    <button className='sign-up-btn'>Sign Up</button>
                </div>
            </main>

        </div>
    )
}