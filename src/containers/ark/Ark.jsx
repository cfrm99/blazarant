import React, {useState} from 'react';
import './ark.css'
import possibilityImage from '../../assets/possibility.png';
import shadow from '../../assets/shadow.png';
import { ArrowBackIos} from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';

const Possibility = () => {

  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h4></h4>
        <h1 className="gradient__text"> These are the current ARK PVE Official Servers I play in: </h1>
        <p>The Island: 50</p>
        <p>Aberration: 318</p>
        <p>Extinction: 730</p>
        <p>Genesis 2: 993</p>
        <p>Crystal Isles: 834</p>
        <h4>I am mainly a solo player but will help others that are in need. Love doing the Master Controller Boss and the Dragon </h4>
      </div>

      <div className="gpt3__possibility-image">
         <img src={shadow} alt="widow" /> 

      </div>
    
    </div>
  )
}

export default Possibility