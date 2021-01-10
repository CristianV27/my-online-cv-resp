import React from "react";
import "./AboutMe.css";
import face from "../../images/about-01.jpg";
import ab1 from "../../images/about-02.jpg";
import ab2 from "../../images/about-03.jpg";
import ab3 from "../../images/about-04.jpg";
import ab4 from "../../images/about-05.jpg";
import ab5 from "../../images/about-06.jpg";

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me-container">
        <div className="picture-container">
          <img
            className="about-me-pic"
            src={face}
            alt="about-01"
          />
        </div>
        <div className="about-me-text">
          <div className="about-me-subtitle">SHORT BIO</div>
          <p>
            I was born in a small town in Salaj county, in the north-west part
            of Romania, near the city of Cluj Napoca. As a little child, I liked
            to see how things work, how they function, what are the components,
            I liked to take them apart to see the insides, and after that to put
            them back together.
          </p><br/>
          <p>
            During high-school, I discovered I have a tallent and an inclination
            to art, I started to get myself different craions and tools, and I
            started to experiment different styles of painting and drawing
          </p><br/>
          <p>
            The need for knowledge grew higher, so I apllied at the local
            Technical College in my city, computer science field. I was lucky
            enough to have parrents that understood that investing into your
            child and suporting him was very beneficial with the rise of todays
            technology, so they got me my first computer, and so my life in the
            field of computers and engineering has started :D.
          </p>
          <div className="about-me-subtitle">INTERESTS</div>
          <p>
            My interests are all related to art and technology. It doesn't matter
            if the topics are only art, or only technology, I am like an open
            book, and I have enough knowledge to entertain anyone in any basic
            life topic.
          </p>
          <div className="about-me-subtitle">WHY I DO WHAT I DO</div>
          <p>
            I like to see that what I do workes. The satisfaction, when you see a
            thing that you build works, is priceless. The satisfaction of
            knowing that you have created something valuable, or not ... it
            doesn't matter, it's priceless. In the end, it's all about helping
            you and the people around you, it's about knowing that you did
            something good for the human kind. Maybe it's not that big, small
            things also count, when added together.
          </p>
        </div>
        <div className="about-me-row">
          <div className="about-me-column">
            <img src={ab1} alt="ab1" width="120" />
          </div>
          <div className="about-me-column">
            <img src={ab2} alt="ab2" width="120" />
          </div>
          <div className="about-me-column">
            <img src={ab3} alt="ab3" width="120" />
          </div>
          <div className="about-me-column">
            <img src={ab4} alt="ab4" width="120" />
          </div>
          <div className="about-me-column">
            <img src={ab5} alt="ab5" width="270" />
          </div>
        </div>
      </div>
    );
  }
}
