import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="about">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="Who is Blazarant" text="I love playing video games from FPS to Horror genre. Some of my favorite games are Overwatch 2, Dead by Daylight, Ark: Survival Evolved and Elden Ring."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text"> Here is some information about me.</h1>
        <p> Follow on Twitch</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Favorite Music Artists/Shows" text="Lana Del Rey, Omar Apollo. Stranger Things, Supernatural, The White Lotus"/>
        <Feature title="Hobbies" text="Gaming, Netflix, Reading Books, Musics, Eating "/>
        <Feature title="Education" text="University of Houston. Got a BS in Computer Science - GO COOOGS"/>
      </div>

    </div>
  )
}

export default WhatGPT3