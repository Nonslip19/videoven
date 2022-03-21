import "./Middle.css";
import Section3BG from "../../../assets/images/section3-BG.png";
import Play91 from "../../../assets/images/Play91.png";
//import outline3 from "../../../assets/images/outline3.png";

import React from 'react'

const Middle = () => {
  return (
    <div className="section3-middle">
        <div className="img-bg" style={{ backgroundImage: `url(${Section3BG})` }}>
              <div className="play-div">
                <img className="Play91" src={Play91} alt=""/>
              </div>  
        </div>
    </div>
  )
}

export default Middle;