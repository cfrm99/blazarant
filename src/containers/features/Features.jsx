import React from 'react';
import { Feature } from '../../components';
import './features.css'

const featuresData = [
  {
    title: 'Sunday',
    text: '6PM-12AM'
  },
  {
    title: 'Monday',
    text: '6PM-12AM'
  },
  {
    title: 'Tuesday',
    text: '6PM-12AM'
  },
  {
    title: 'Wednesday',
    text: 'OFF'
  },
  {
    title: 'Thursday',
    text: 'OFF'
  },
  {
    title: 'Friday',
    text: '5PM-1AM'
  },
  {
    title: 'Saturday',
    text: '5PM-IDK'
  }


]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="schedule">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text"> This is my current streaming schedule on twitch until further notice</h1>
        <p>If streaming time changes I'll notify through Discord.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>

    </div>
  )
}

export default Features