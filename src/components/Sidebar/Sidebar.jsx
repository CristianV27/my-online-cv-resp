import React from "react";
import "./Sidebar.css";
import logofb from "../../images/logofb.png";
import logoig from "../../images/logoig.png";
import logolk from "../../images/logolk.png";

export class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div>
          <a href="https://www.facebook.com/vincze.cristian/" target="blank">
            <img className="logo" src={logofb} id="logoFacebook" width="40" alt="logofb" />
          </a>
          <a href="https://www.instagram.com/cristian.v.27/" target="blank">
            <img className="logo" src={logoig} id="logoInstagram" width="40" alt="logoig" />
          </a>
          <a href="https://www.linkedin.com/in/cristian-vincze-bb1b4b46/" target="blank">
            <img className="logo" src={logolk} id="logoLinkedIn" width="40" alt="logolk" />
          </a>
        </div>
      </aside>
    );
  }
}
