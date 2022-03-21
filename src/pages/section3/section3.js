import React from 'react';
import "./Section3.css";
import Section3Left from './left/Section3Left';
import Middle from './middle/Middle';
import Section3Right from './right/Section3Right';
import outline3 from "../../assets/images/outline3.png";
import star1 from "../../assets/images/Star1.png";
import star2 from "../../assets/images/Star2.png";
import dot from "../../assets/images/dot.png";
import Rectangle59 from "../../assets/images/Rectangle59.png";

// import {  } from 'react-icons/fa';

const Section3 = () => {
  return (
    <div className='container section3'>
          <div className='section3-header'>
            <h2>Kolayca Kullanın</h2>
            <p>Videoven’ın sade ve kolay kullanılan arayüzü sayesinde <br />
            videolarınızı oluşturmaya başlamak için vakit kaybetmeyin. </p>
          </div>
      <div className="row row-container">
        <div className='outline-hidden'>
          <div className="outline-div">
            <img className="outline3" src={outline3} alt=""/>
            <div className='section3-second'> 
                <img src={dot} alt="" />
                <span>01:22</span></div>
                <img className='restangle59' src={Rectangle59} alt="" />
            <div className='star-container'>
                <div className="star-div">
                  <img className='star1' src={star1} alt="" />
                  <img className='star2' src={star2} alt="" />
                </div>
                <div className="star-di2">
                  <img className='star1' src={star1} alt="" />
                  <img className='star2' src={star2} alt="" />
                </div>
                <div className="star-div3">
                  <img className='star1' src={star1} alt="" />
                  <img className='star2' src={star2} alt="" />
                </div>
            </div>
          </div>
        </div>
      {/* -------------------leftt-------------------- */}
        <div className="col col-lg-2 col-md-12 col-sm-12">
          <Section3Left/>
        </div>
        <div className="col col-lg-6 col-md-12 col-sm-12">
          <Middle/> 
        </div>
        <div className="col col-lg-4 col-md-12 col-sm-12">
          <Section3Right/>
        </div>
      </div>
    </div>
  )
}

export default Section3;
