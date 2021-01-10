import React from "react";
import "./Portfolio.css";
import pfLayout1 from "../../images/pfLayout01.png";
import pfLayout2 from "../../images/pfLayout02.png";
import pfLayout3 from "../../images/pfLayout03.png";
import pfLogo from "../../images/pfLogo.png";
import pfLogoFoto from "../../images/pfLogoFoto.png";

export class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-title">
          WEB DEVELOPMENT - HTML, CSS, JAVASCRIPT{" "}
        </div>
        <div className="portfolio-web-development-container"></div>
        <a
          href="https://github.com/CristianV27"
          className="showMore"
          target="blank"
          rel="noreferrer"
        >
          GitHub (Informal School of IT - Personal Projects & assignments)
        </a>

        <div className="portfolio-title">GRAPHIC DESIGN | LAYOUT </div>
        <div className="portfolio-layout">
          <img src={pfLayout1} alt="pfLayout1" width="140" />
          <img src={pfLayout2} alt="pfLayout2" width="140" />
          <img src={pfLayout3} alt="pfLayout3" width="140" />
        </div>
        <a
          href="https://www.dropbox.com/sh/2q1l9qw8y827xl3/AAAcYK0KBYr3R5d5XGFkom6sa?dl=0"
          className="showMore"
          target="blank"
          rel="noreferrer"
        >
          Show more...
        </a>

        <div className="portfolio-title">GRAPHIC DESIGN | LOGO </div>
        <a
          href="https://www.behance.net/cristianv27"
          target="_blank"
          className="portfolio-logo"
          rel="noreferrer"
        >
          <img src={pfLogo} alt="pfLogo" width="240" />
        </a>
        <a
          href="https://www.dropbox.com/sh/9jaq19ui7oee03w/AACX--mQsRGaArqYoLD0b3oca?dl=0"
          className="showMore"
          target="blank"
          rel="noreferrer"
        >
          Show more...
        </a>

        <div className="portfolio-title">PHOTOGRAPHY | EVENTS </div>
        <a
          href="https://www.facebook.com/media/set/?vanity=FotoCristian27&set=a.2881203428561847"
          className="portfolio-logo"
          target="blank"
          rel="noreferrer"
        >
          <img src={pfLogoFoto} alt="pfLogoFoto" width="240" />
        </a>

        <div className="portfolio-title">PHOTOGRAPHY | SHOOTINGS </div>
        <a
          href="https://www.facebook.com/media/set/?vanity=FotoCristian27&set=a.653788421303370"
          className="portfolio-logo"
          target="blank"
          rel="noreferrer"
        >
          <img src={pfLogoFoto} alt="pfLogoFoto" width="240" />
        </a>
      </div>
    );
  }
}
