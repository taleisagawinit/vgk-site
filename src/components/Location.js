import React from 'react';

export default function Location(props) {
  return(
    <div id="location">
      <div className="location-content">
        <h2 className="about-title">Where we play</h2>
        <p>{props.strStadiumDescription}</p>
        <div className="location-button">
          <a href="https://goo.gl/maps/aJ3hYb8aRUHwaFNR8" target="_blank" rel="noopener noreferrer">
            Visit us
          </a>
        </div>
      </div>
      <div className="stadium-img">
        <img src={props.strStadiumThumb} alt="vgk stadium"></img>
      </div>
    </div>
  )
}