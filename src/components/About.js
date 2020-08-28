import React from 'react';

export default function About(props) {
  return(
    <div id="about">
      <div className="about-content">
        <h2 className="about-title">Who we are</h2>
        <p>{props.strDescriptionEN}</p>
        <div className="about-button">
          <a href={props.strWebsite}>Learn more</a>
        </div>
      </div>
      <div className="jersey-img">
        <img src={props.strTeamJersey} alt="vgk jersey"></img>
      </div>
    </div>
  )
}