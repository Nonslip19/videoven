import React from 'react';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';

const Main = () => {
  return (
    <div className='container'>
      <div className="row"> <Section1/></div>
      <div className="row"> <Section2/></div>
      <div className="row"> <Section3/></div>
    </div>
  )
}

export default Main;