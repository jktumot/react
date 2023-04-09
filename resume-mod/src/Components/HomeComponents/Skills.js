import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="percent_skills">
          <div className="js">
            <h5 className="name_skill">JavaScript</h5>
            <ProgressBar
              className="skills"
              animated
              now={45}
              label={`${45}%`}
            />
          </div>
          <div className="html">
            <h5 className="name_skill">HTML</h5>
            <ProgressBar
              className="skills"
              animated
              now={80}
              label={`${80}%`}
            />
          </div>
          <div className="css">
            <h5 className="name_skill">CSS</h5>
            <ProgressBar
              className="skills"
              animated
              now={75}
              label={`${75}%`}
            />
          </div>
          <div className="sql">
            <h5 className="name_skill">SQL</h5>
            <ProgressBar
              className="skills"
              animated
              now={35}
              label={`${35}%`}
            />
          </div>
          <div className="react">
            <h5 className="name_skill">React</h5>
            <ProgressBar
              className="skills"
              animated
              now={40}
              label={`${40}%`}
            />
          </div>
          <div className="material">
            <h5 className="name_skill">Material-UI</h5>
            <ProgressBar
              className="skills"
              animated
              now={30}
              label={`${30}%`}
            />
          </div>
          <div className="boot">
            <h5 className="name_skill">Bootstrap</h5>
            <ProgressBar
              className="skills"
              animated
              now={34}
              label={`${34}%`}
            />
          </div>
        </div>
      </div>
    );
  }
}
