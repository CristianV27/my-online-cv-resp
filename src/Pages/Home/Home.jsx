import React from "react";
import face from "../../images/home.jpg";

import "./Home.css";
import "../../App.css";

export class Home extends React.Component {
  render () {
    return (
      <div className="home-container">
        <div className="home-picture">
          <img className="poza" src={face} id="face" alt="face" />
        </div>
        <div className="home-text">
          <div className="crs">
            Cristian <b>Vincze</b>
          </div>
          <div className="designer">DESIGNER</div>
          <p style={{ color: "white" }}>
            I am currently on a journey into the world of web development, using
            platforms and HTML, CSS & javaScript to bring to life beautifull
            aplications. I also finished a class of User Experience Design (UXD)
            from Informal School of IT, I have graphic design experience, and a
            strong technical background, beeing a graduate of the Technical
            University of Cluj napoca (UTCN). I am a creative person and have a
            lot of attention to details. I like to participate at brainstorming
            sessions, I like to generate new ideas and make sketches, and I
            believe in my ability of solving problems. I think team work is a must
            in order for a team to succeed and to advance towards succes.
          </p>
        </div>
      </div>
    );
  }  
}

export default Home;
