import React, { Component } from "react";
import Education from "../Components/HomeComponents/Education";
import Skills from "../Components/HomeComponents/Skills";
import VisitCard from "../Components/HomeComponents/VisitCard";
import Sertificate from "../Components/HomeComponents/Sertificate";
import AboutMe from "../Components/HomeComponents/AboutMe";
import Courses from "../Components/HomeComponents/Courses";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="block_top">
          <VisitCard />
          <Skills />
        </div>
        <div className="block_middle">
          <AboutMe />
          <Education />
        </div>
        <div className="block_bottom">
          <Courses />
          <div className="sertificate">
            <Sertificate />
          </div>
        </div>
      </div>
    );
  }
}
