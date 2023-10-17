import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="percent_skills">
          <div className="react">
            <h5 className="name_skill">React</h5>
            <ProgressBar
              className="skills"
              animated
              now={60}
              label={`${60}%`}
            />
          </div>
          <div className="js">
            <h5 className="name_skill">JavaScript</h5>
            <ProgressBar
              className="skills"
              animated
              now={65}
              label={`${65}%`}
            />
          </div>
          <div className="html">
            <h5 className="name_skill">HTML</h5>
            <ProgressBar
              className="skills"
              animated
              now={85}
              label={`${85}%`}
            />
          </div>
          <div className="css">
            <h5 className="name_skill">CSS</h5>
            <ProgressBar
              className="skills"
              animated
              now={80}
              label={`${80}%`}
            />
          </div>
          <div className="sql">
            <h5 className="name_skill">SQL</h5>
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
              now={50}
              label={`${50}%`}
            />
          </div>
          <div className="boot">
            <h5 className="name_skill">Node.js</h5>
            <ProgressBar
              className="skills"
              animated
              now={30}
              label={`${30}%`}
            />
          </div>
        </div>
      </div>
    );
  }
}
