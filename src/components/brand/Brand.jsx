import React from 'react';
import './brand.css';
import { overwatch2, dbd, ark, elden, genshin } from './imports';

const Brand = () => {
  return (
    <div className= "gpt3__brand section__padding">
      <div>
        <img src={overwatch2} alt="google" />
      </div>
      <div>
        <img src={dbd} alt="atlassian" />
      </div>
      <div>
        <img src={ark} alt="atlassian" />
      </div>
      <div>
        <img src={elden} alt="dropbox" />
      </div>
      <div>
        <img src={genshin} alt="shopify" />
      </div>

    </div>
  )
}

export default Brand