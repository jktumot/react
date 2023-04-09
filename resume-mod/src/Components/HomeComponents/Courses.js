import React, { Component } from "react";

export default class Courses extends Component {
  render() {
    return (
      <div>
        <div class="courses">
          <div class="title">
            <p>Дополнительное образование</p>
          </div>
          <ul>
            <li>
              <div class="date">2021</div>
              <div class="info">
                <h4>Корпоративный университет Сбербанка</h4>
                <ul>
                  <li>Основы Разработки на Java</li>
                  <li>Основы программирования на Java I</li>
                  <li>Основы программирования на Java II</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="date">2021</div>
              <div class="info">
                <h4>Корпоративный университет Сбербанка</h4>
                <ul>
                  <li>Основы решения алгоритмических задач</li>
                  <li>Основы программирования</li>
                  <li>Основы Python</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="date">2022</div>
              <div class="info">
                <h4>Национальный исследовательский Томский государственный университет</h4>
                <p>Системный Администратор Linux: Devops с нуля</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
