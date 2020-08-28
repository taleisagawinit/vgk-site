import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer(props) {
  return(
    <div id="footer">
      <div className="footer-content">
        <h2 className="footer-title">Connect with us</h2>
        <img className="footer-logo" src={"https://www.thesportsdb.com/images/media/team/logo/kkjapg1554753374.png"} alt="vgk logo"></img>
        <div className="footer-links">
          <div className="facebook">
            <a href={"http://" + props.strFacebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="twitter">
            <a href={"http://" + props.strTwitter} target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare />
            </a>
          </div>
          <div className="instagram">
            <a href={"http://" + props.strInstagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className="youtube">
            <a href={"http://" + props.strYoutube} target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>  
    </div>
  )
}