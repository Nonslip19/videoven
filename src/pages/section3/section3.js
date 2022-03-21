import React from 'react';
import "./Section3.css";
import Section3Left from './left/Section3Left';
import Middle from './middle/Middle';
import Section3Right from './right/Section3Right';

// import {  } from 'react-icons/fa';
// import { BsPeople } from "react-icons/bs";

const Section3 = () => {
  return (
    <div className='container section3'>
          <div className='section3-header'>
            <h2>Kolayca Kullanın</h2>
            <p>Videoven’ın sade ve kolay kullanılan arayüzü sayesinde <br />
            videolarınızı oluşturmaya başlamak için vakit kaybetmeyin. </p>
          </div>
      <div className="row">
      {/* -------------------leftt-------------------- */}
        <div className="col col-lg-2">
          <Section3Left/>
        </div>
        <div className="col col-lg-6">
          <Middle/> 
        </div>
        <div className="col col-lg-4">
          <Section3Right/>
        </div>
      </div>
    </div>
  )
}

export default Section3;
