import React from "react";
import ImageSliderFoto from "../../components/Slider/ImageSliderFoto";
import ImageSliderDance from "../../components/Slider/ImageSliderDance";
import ImageSliderMtb from "../../components/Slider/ImageSliderMtb";
import ImageSliderSnow from "../../components/Slider/ImageSliderSnow";
import { SliderDataDance, SliderDataFoto, SliderDataMtb, SliderDataSnow } from "../../components/Slider/SliderData";
import "./Hobbies.css";

export class Hobbies extends React.Component {
  render() {
    return (
      <div className="hobbies-container">
        <div className="hobbies-title">WE CAN TALK ABOUT... </div>
        <div className="hobbies-row">
          <div className="hobbies-text">
            <p className="hobbies-subtitle">PHOTOGRAPHY</p>
            <p>
              When I got my first camera, it was a bridge camera. Not a DSLR,
              but not a cheap camera either. I was on a work and travel program
              in the United States, so I had time to test it and felt in love
              with photography. This is an area in witch you find the limits of
              your equipment very fast, and need to get a little higher. So
              after a while I got my first DSLR. But the need for money to buy
              lenses increased, so I decided to shoot events to finance my
              hobby. Not a lot of my friends have this hobbie, so I can practice
              shooting them and their families.
            </p>
          </div>
          <ImageSliderFoto slides={SliderDataFoto} className="hobbies-photos-container"/>
        </div>
        <div className="hobbies-row">
          <div className="hobbies-text">
            <p className="hobbies-subtitle">DANCE</p>
            <p>
              Do you rememver the time you were in the first grade and wanted to
              look cool in front of your classmates? I do! All of the cool kids
              went to this place where you could do extraculicular activities
              after school. I went also because, off course, all the cool kids
              went. I stopped at the dance room. At that time it was a
              folclorique dance curriculum, a lot of children were there, a good
              chance for me to make new friends and to get over my shiness. And
              I still do that to this day. Travelling the world and meating new
              people.
            </p>
          </div>
          <ImageSliderDance slides={SliderDataDance} className="hobbies-photos-container"/>
        </div>
        <div className="hobbies-row">
          <div className="hobbies-text">
            <p className="hobbies-subtitle">DOWN-HILL</p>
            <p>
              The advantages of living in a small city between hills, is that
              you have access to those hills relatively easy. I had a city bike
              when I was a kid, used it to just go arround the city and go to my
              granparents. But when I first went on a hill and got down from
              there on my bike, I was hooked. Goy lucky enough to get a city
              mountain bike, and the little engineer inside me surfaced and
              prepared the mountain bike for down-hill. I still do that
              till this day, but with a more suitable bike and on hills that
              have down-hill tracks.
            </p>
          </div>
          <ImageSliderMtb slides={SliderDataMtb} className="hobbies-photos-container"/>
        </div>
        <div className="hobbies-row">
          <div className="hobbies-text">
            <p className="hobbies-subtitle">SNOW-BOARDING</p>
            <p>
              With the need for adrenaline from down-hill, in the winter I had
              do to something also. So I tried some winter sports, startes with
              skying, but it was not for me. Long story short, got a friend to
              borrow me a snow-board, didn't even had boots, and went down a small
              hill. I was hooked :D. Since then, I got better and better, and
              started to roam my country in the winter time, to the slopes,
              trying to go in a different city each year.
            </p>
          </div>
          <ImageSliderSnow slides={SliderDataSnow} className="hobbies-photos-container"/>
        </div>
      </div>
    );
  }
}
