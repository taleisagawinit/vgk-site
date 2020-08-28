import React from 'react';

export default function LogoSection(props) {
  return(
    <div id="logo-section" style={{backgroundImage: "url(" + props.strTeamFanart2 + ")"}}>
      <div className={"logo-img"}>
        <img src={props.strTeamBadge} alt="vgk badge logo"></img>
      </div>
    </div>
  )
}