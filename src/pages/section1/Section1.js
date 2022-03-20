import React from 'react';
import "./Section1.css";
import background from "../../assets/images/unsplash.png";
import outline1 from "../../assets/images/outline1.png";
import Ellipse10 from "../../assets/images/Ellipse10.png";
import Ellipse11 from "../../assets/images/Ellipse11.png";
import Rectangle44 from "../../assets/images/Rectangle44.png";
import Rectangle45 from "../../assets/images/Rectangle45.png";
import Star42 from "../../assets/images/Star42.png";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";

const Section1 = () => {
  return (
    <div className='container section1'>
      <div className="row">
        <div className="col col-lg-7 col-md-12 col-sm-12">
            <div className='section1-left'>
              <h1>İşinizi Güçlendirecek Videolar</h1>
              <h2>Artık İnteraktif</h2>
              <p>Videoven ile hedeflediğiniz kitleye videolar aracılığıyla ulaşın.
              Tek hamlede binlerce kullanıcıdan zahmetsizce bilgi alın. 
              Maliyetlerinizi azaltın, müşteri memnuniyetini ve satışlarınızı artırın. <br /> <br />
              Anlatan, seçenek sunan, bilgi toplayan videolarla çevrimiçi iletişimin yeni seviyesine adım atın.</p>
              <button className='btn section1-btn'>Hemen Deneyin</button>
              <div className='ellipse-div'>
                <img src={Ellipse10} className="ellipse10" alt=""/>
                <img src={Ellipse11} className="ellipse11" alt=""/>
              </div>
              <div>
                <img src={Vector1} alt="" className='Vector1' />
                <img src={Vector2} alt="" className='Vector2' />
              </div>
            </div>
        </div>

        <div className="col col-lg-5 col-md-12 col-sm-12">
          <div className='section1-right'>
             <div className='section1-right-container' style={{ backgroundImage: `url(${background})` }}>
             
              <img className='outline1' src={outline1} alt="" />
              <div className="merhaba-div">
                <div className="merhaba">
                  Merhaba :) 
                </div>
                <div className='merhaba-border'> </div>

              </div>
              <div className='star-div'>
                <img src={Rectangle44} alt="" className='Rectangle44' />
                <img src={Rectangle45} alt="" className='Rectangle45' />
                <img src={Star42} alt="" className='Star42' />
              </div>
              <div className="section1-right-boxes"> 
                <p>Nasıl cevaplamak istersiniz?</p>
                <div className="boxes">
                  <div className="box">
                    <div className='icon'><p>T</p></div>
                    <div className="box-text">Video</div>
                  </div>
                  <div className="box">
                    <div className='icon'><p>T</p></div>
                    <div className="box-text">Ses Kaydı</div>
                  </div>
                  <div className="box">
                    <div className='icon'><p>T</p></div>
                    <div className="box-text">Yazı</div>
                  </div>
                </div>
              </div>
              <div className="section1-right-bottom">
                  <p>videoven tarafından gönderildi</p>
              </div>
             </div>             
          </div>
        </div>       
      </div>
    </div>
    
  )
}

export default Section1;