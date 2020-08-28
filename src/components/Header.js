import React from 'react';

export default function Header(props) {
  return(
    <div id="header" style={{backgroundImage: "url(" + props.strTeamFanart3 + ")"}}>
      <div className={"header-content"}>
        <img className={"header-logo"} src={props.strTeamLogo} alt="vgk logo"></img>
      </div>
    </div>
  )
}