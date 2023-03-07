import React, { Component } from "react";


export default class Education extends Component {
  render() {
    return (
      <>
        <div className="edu">
          <div className="education">
            <div className="bold">Образование</div>
            <ul>
              <li>
                <div className="date">2020 - 2024</div>
                <div className="info">
                  <p className="semi-bold">
                    Московская финансово-промышленная академия.
                  </p>
                  <p>Прикладная информатика в сфере экономики</p>
                </div>
              </li>
              <li>
                <div className="date">2010 - 2006</div>
                <div className="info">
                  <p className="semi-bold">
                    Жуковский авиационный техникум им. В.А. Казакова
                  </p>
                  <p>Государственное и муниципальное управление.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="add_education">
            <div className="title">
              <p className="bold">Курсы</p>
            </div>
            <ul className="add_list">
              <li className="manager">
                <div className="date">2021</div>
                <div className="info">
                  <p className="semi-bold">Корпоративный университет Сбербанка</p>
                  <ul>
                    <li>Основы Разработки на Java</li>
                    <li>Основы программирования на Java I</li>
                    <li>Основы программирования на Java II</li>
                  </ul>
                </div>
              </li>
              <li className="manager">
                <div className="date">2021</div>
                <div className="info">
                  <p className="semi-bold">Корпоративный университет Сбербанка</p>
                  <ul>
                    <li>Основы решения алгоритмических задач</li>
                    <li>Основы программирования</li>
                    <li>Основы Python</li>
                  </ul>
                </div>
              </li>
              <li className="system_admin">
                <div className="date">2022</div>
                <div className="info">
                  <p className="semi-bold">Томский государственный университет</p>
                  <p>Системный Администратор Linux: Devops с нуля</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
