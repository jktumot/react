import React, { Component } from "react";
import Me from "../assets/me.jpg";
import Slider from "../Components/Slider";
import Progress from "../Components/Progress";
import BackgroundOffice from "../assets/bg/office.png";
import Visitcard from "../Components/Visitcard";
import AboutMe from "../Components/AboutMe";

export default class Home extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="left_block">
          <div className="resume">
            <div className="my_photo">
              <img src={Me} width="270" height="340" />
            </div>
            <Visitcard />
          </div>
          
          <div>
            <Progress />
          </div>

          <div className="sertificate">
            <Slider />
          </div>
        </div>

        <div className="right_block">
          <AboutMe />
        </div>
      </div>
    );
  }
}
