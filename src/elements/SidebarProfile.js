import '../css/SidebarProfile.css'
import RangeSlider from '../elements/RangeSlider'
import DistanceSlider from '../elements/DistanceSlider'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';


export default function SidebarProfile(){

    const [distValue, setDistValue] = useState(30);

    const handleDistChange = (event, newValue) => {
      setDistValue(newValue);
    };

    function valuetext(value) {
        return `${distValue}`;
    }

    const [value, setValue] = useState([18, 30]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div className="sidebar-profile">
            <div className="subscription">
                Cupid Pro
            </div>
            <div className="subscription">
                Cupid Plus
            </div>
            <div className="account-settings">
                <h2 className='acc-set-title'>Account Settings</h2>
                <div className="acc-set-email acc-set-btn">
                    <span>Email</span>
                    <span className='acc-set-btn-small-span'>sahildsh@gmail.com</span>
                </div>
                <div className="acc-set-phNo acc-set-btn">
                    <span>Phone Number</span>
                    <span className='acc-set-btn-small-span'>9029380899</span>
                </div>
            </div>
            <div className="discovery-settings">
                <h2 className='desc-set-title'>Discovery Settings</h2>
                <div className='slider'>
                    <div className="age-pref">
                        <span className="age-pref-title">Age Preference</span>
                        <span className='age-pref-value'>{value[0]}-{value[1]}</span>
                    </div>
                    <Box sx={{ width: 275 }}>
                        <Slider
                        getAriaLabel={() => 'Age Preference'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min = {18}
                        max = {30}
                        />
                    </Box>
                </div>
                <div className='slider'>
                    <div className="dist-pref">
                        <span className='dist-pref-title'>Distance Preference</span>
                        <span className='dist-pref-value'>{distValue}</span>
                    </div>
                    <Box sx={{ width: 275}}>
                        <Slider
                            getAriaLabel={() => 'Age Preference'}
                            value={distValue}
                            onChange={handleDistChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            max = {30}
                        />
                    </Box>
                </div>
            </div>
            <div className="help-and-support">
                <h2 className='set-title'>Help & Support</h2>
            </div>
            <div className="safety">
                <h2 className='set-title'>Safety</h2>
            </div>
            <div className="legal">
                <h2 className='set-title'>Legal</h2>
            </div>
        </div>
    )
}