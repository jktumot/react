import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <>
        <div className="education">
            <p className="title">Образование</p>
            <ul>
              <li>
                <div className="date">2020 - 2024</div>
                <div className="info">
                  <h4>
                    Московская финансово-промышленная академия.
                  </h4>
                  <p>Прикладная информатика в сфере экономики</p>
                </div>
              </li>
              <li>
                <div className="date">2010 - 2006</div>
                <div className="info">
                  <h4>
                    Жуковский авиационный техникум им. В.А. Казакова
                  </h4>
                  <p>Государственное и муниципальное управление.</p>
                </div>
              </li>
            </ul>
        </div>
      </>
    );
  }
}
