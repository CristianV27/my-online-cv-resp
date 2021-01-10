import React from "react";
import "./Resume.css";

export class Resume extends React.Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-column">
          <div className="resume-title">PROFESSIONAL EXPERIENCE</div>
          <div className="resume-subtitle01">2018 - Present | Seko Sieta</div>
          <div className="resume-subtitle02">
            Technical Documentation Specialist
          </div>
          <div className="resume-text">
            <p>Instructions manual design</p>
            <p>
              3D renderings for different customers in order to make a
              personalized offer
            </p>
            <p>Graphic design for the product labels</p>
            <p>
              Photo-manipulation for different offers for clients, to offer a
              glimpse of the product in the customers company colors
            </p>
          </div>
          <div className="resume-subtitle01">2010 - 2018 | DocEssensis</div>
          <div className="resume-subtitle02">Layouter / Graphic Designer</div>
          <div className="resume-text">
            <p>
              Layout-ing different projects from Imprimerie Centrale du
              Luxembourg, a Luxembourg based typography that has the main
              contractor the United Nations, along with several European banks.
            </p>
            <p>
              In charge of all the projects that had arabic and hindu languages.
            </p>
            <p>Designing several brochures, books, statistic magazines.</p>
            <p>
              In charge of designing all the charts that were needed for most of
              the team projects.
            </p>
            <p>
              Corect, edit or photo-manipulate different picture and photographs
              for the main purpose of the project.
            </p>
          </div>
          <div className="resume-subtitle01">2009 - 2010 | Auchan Cluj</div>
          <div className="resume-subtitle02">Decorator</div>
          <div className="resume-text">
            <p>Receciving orders on prints that are needen in the store</p>
            <p>Designing and printing them, finishing touches, placing them</p>
            <p>Other visuals that were needed in the store</p>
          </div>
          <div className="resume-subtitle01">2008 - 2009 | Kantor Impex</div>
          <div className="resume-subtitle02">Print Operator</div>
          <div className="resume-text">
            <p>Received images under tiff format, prepare for DTP printing</p>
            <p>Setting up the machine, finalizing the print</p>
            <p>
              Manually applying and creating the print job on different surfaces
            </p>
          </div>
        </div>
        <div className="resume-column">
          <div className="resume-title">PROFESSIONAL TRAININGS</div>
          <div className="resume-subtitle01">2020 | INFORMAL SCHOOL OF IT</div>
          <div className="resume-subtitle02">Web Development | Java Script</div>
          <div className="resume-text">
            <p>
              During this class, I’ve learned and implemented in a project,
              knowledge about research, design thinking, usability, user
              interviews, user research techniques, interaction design,
              information architecture, and learned about different guidelines
              from big companies.
            </p>
          </div>
          <div className="resume-subtitle01">2018 | INFORMAL SCHOOL OF IT</div>
          <div className="resume-subtitle02">User Experience Design</div>
          <div className="resume-text">
            <p>
              During this class, I’ve learned to build the front-end of an
              application, using the latest standards. I've learned basic
              programing knowledge. I've learned how to code in JavaScript, and
              also the use of React framework
            </p>
          </div>
          <div className="resume-title">LANGUAGES</div>
          <div className="resume-subtitle02">ENGLISH</div>
          <meter value="0.9" title="GB"></meter>
          <div className="resume-subtitle02">HUNGARIAN</div>
          <meter value="0.3" title="GB"></meter>
          <div className="resume-subtitle02">GERMAN</div>
          <meter value="0.2" title="GB"></meter>
        </div>
        <div className="resume-column">
          <div className="resume-title">EDUCATION</div>
          <div className="resume-subtitle01">
            2009 - 2011 | Technical University of Cluj Napoca
          </div>
          <div className="resume-subtitle02">
            Masters Degree - Industrial Design
          </div>
          <div className="resume-text">
            <p>
              Advanced studies in the field of industrial design, research and
              development, marketing and adverstising, brainstorming sessions,
              different techniques at implementing ideeas into production.
            </p>
          </div>
          <div className="resume-subtitle01">2010 | HAMK University</div>
          <div className="resume-subtitle02">Erasmus scholarship</div>
          <div className="resume-text">
            <p>
              Spent s semester in a foreign country, at a mechanical engineering
              university in Finland, learnd a lot about production techniques,
              mechanical engineering design, research and development.
            </p>
          </div>
          <div className="resume-subtitle01">
            2004 - 2009 | Technical University of Cluj Napoca
          </div>
          <div className="resume-subtitle02">
            Bachelors Degree - Industrial Design
          </div>
          <div className="resume-text">
            <p>
              Studies in the field of industrial design, research and
              development, marketing and adverstising, brainstorming sessions,
              different techniques at implementing ideeas into production. Basic
              knowledge in the field of research and development in the
              mechanical engineering department.
            </p>
          </div>
          <div className="resume-subtitle01">
            2000 - 2004 | Iuliu Maniu Technical College
          </div>
          <div className="resume-subtitle02">Computer Science High School</div>
          <div className="resume-text">
            <p>
              Learned about basic programing, algorithms, pseudo-code, used
              different softwares for media editing.
            </p>
          </div>
          <div className="resume-title">SKILLS & ABILITIES</div>
          <div className="skills">
            <mark> Photoshop</mark>
            <mark> Lightroom</mark>
            <mark> Illustrator</mark>
            <mark> InDesign</mark>
            <mark> PremierPro</mark>
            <mark> Keyshot</mark>
            <mark> 3D Max</mark>
            <mark> SolidWorks</mark>
            <mark> Office</mark>
          </div>
        </div>
      </div>
    );
  }
}
