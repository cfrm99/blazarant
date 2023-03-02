import React, {useState} from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';
import widowmaker from '../../assets/widow.png';
import { ArrowBackIos} from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';

import { images } from "./slideshow";

const Possibility = () => {

  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
         <img src={widowmaker} alt="widow" /> 

      </div>
      <div className="gpt3__possibility-content">
        <h4></h4>
        <h1 className="gradient__text"> My Most Played Heroes in Overwatch 2:</h1>
        <p>Widowmaker, Ana, Moira, Zarya, Hanzo, and Sigma .</p>
        <h4>Season 3 Ranks: Tank: Gold 1, Damage: Gold 1; Support: Gold 1</h4>
      </div>
    
    </div>
  )
}

export default Possibility