import React from 'react';
import "./Section2.css"
import person1 from  "../../assets/images/person1.png";
import person2 from  "../../assets/images/person2.png";
import person3 from  "../../assets/images/person3.png";
import person4 from  "../../assets/images/person4.png";
import person5 from  "../../assets/images/person5.png";
import person6 from  "../../assets/images/person6.png";
// import play from  "../../assets/images/play.png";
import Vector20 from  "../../assets/images/Vector20.png";
import Vector21 from  "../../assets/images/Vector21.png"; 
import section2Left from  "../../assets/images/section2-left.png";
import BG from  "../../assets/images/Background.png";
import BgLine from  "../../assets/images/BG-border.png";
import Rectangle67 from "../../assets/images/Rectangle67.png"
import dottedLine from "../../assets/images/Vector19.png"
import Play91 from "../../assets/images/Play91.png";

const section2 = () => {
  return (
    <div className='BG' style={{ backgroundImage: `url(${BG})` }}>
        <div className='BGLine' style={{ backgroundImage: `url(${BgLine})` }}>
        <div className="container section2">
            <div className="row">
            <div className="col col-lg-4 col-md-12 col-sm-12">
                <div className='section2-left' style={{ backgroundImage: `url(${section2Left})` }}>
                   <img className='left-bg' src={Rectangle67} alt="" />  
                   <p className='watch'>00:06 / 00:09</p>


                   <div className="play-div">
                     <img className="Play91" src={Play91} alt=""/>
                   </div> 

                   <div className="section1-left-boxes"> 
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
                    <p className='section2-left-bottom'>Göndermeden önce alıştırma yapabilirsin</p>
                </div>
            </div>
            <div className="col col-lg-8 col-md-12 col-sm-12">
                <div className='section2-right'>
                    <h2>Güçlü Bir İletişim İçin <br />
                        Videoyla Hitap Edin</h2>
                    <div className='outline-hidden'>
                        <img className='dottedLine' src={dottedLine} alt=""/>
                        <img className='person1 bounce-top' src={person1} alt=""/>
                        <img className='person2 bounce-top' src={person2} alt=""/>
                        <img className='person3 bounce-top' src={person3} alt=""/>
                        <img className='person4 bounce-top' src={person4} alt=""/>
                        <img className='person5 bounce-top' src={person5} alt=""/>
                        <img className='person6 bounce-top' src={person6} alt=""/>
                    </div>
                    <div className='section2-right-text'>
                        <h6>Tanem Seçkin <span className='dot'> · </span> CRO @Koluman</h6>
                        <p>Kısa zamanda, çok daha az eforla, büyük ölçekli geri dönüşler alabildiğimiz için çalışmalarımızdaki verimi ciddi biçimde artırdı Videoven.</p>
                        <img className='vector21' src={Vector21} alt=""/>
                        <img className='vector20' src={Vector20} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default section2;