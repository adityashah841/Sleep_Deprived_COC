import '../css/ProfileMain.css'
import guyImg from '../assets/guy_img.jpg'
import editInfoImg from '../assets/info.svg'

export default function ProfileMain(){

    const about = [`173cm`, `Sometimes`, `In College`, `Rarely`, `Never`, `Aries`]

    return(
        <div className="profile-main">
            <div className="profile-cards">
                <img className="editInfoImg" src={editInfoImg} alt="" />
                <img src={guyImg} alt="personal-profile-images" />
                <div className="profile-desc">
                    <div className="profile-desc-main">
                        <div className="name-age">Sahil Doshi, 20</div>
                        <div className="college-name">DJ Sanghvi, 2024</div>
                    </div>
                    <div className="profile-desc-about">
                        <div className="about-title">About Sahil</div>
                        <div>
                            {about.map((item,index) => {
                                return(
                                    <button className="about-btns"
                                    key={index}>
                                        {item}
                                    </button>
                                )
                            })}
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