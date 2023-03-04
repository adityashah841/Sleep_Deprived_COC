import '../css/SwipeMain.css'
import girlImg from '../assets/girl_img.jpg'

export default function SwipeMain() {
    return(
        <div className="swipe-main">
            <div className="people-cards">
                <img src={girlImg} alt="" />
                <div className="profile-desc">
                    <div className="profile-desc-main">
                        <div className="name-age">Sahil Doshi, 20</div>
                        <div className="college-name">DJ Sanghvi, 2024</div>
                    </div>
                    <div className="profile-desc-about">
                        <div className="about-title">About Sahil</div>
                        <div className="about-btns">

                        </div>
                    </div>
                    <div className="profile-desc-location">
                        <div className="location-title">Sahil's Location</div>
                        <div className="location">Mumbai</div>
                        <div className="distance">3km Away</div>
                    </div>
                </div>
            </div>
        </div>
    )
}