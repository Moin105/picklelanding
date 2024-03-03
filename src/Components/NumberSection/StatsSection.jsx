import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './State.css'

const NumberSection = ({ heading, endValue,plus }) => {
  
  
    return (
      <div className='statBox'>
       <p> <CountUp end={endValue} />{plus ? '+' : ''}
       </p> 
        <h2>{heading}</h2>
      </div>
    );
  };
export default NumberSection;
