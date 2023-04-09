import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="resume_about">
          <p className="title">Обо мне</p>
          <p className="red_stroke">
            {" "}
            Приветствую <strong>Вас!</strong> Меня зовут Олег, я начинающий
            фронтенд разработчик. На данный момент обучаюсь в
            <strong> Московской Финансово-Промышленной Академии</strong> на
            факультете "Прикладная Информатика в сфере экономики". Помимо этого
            проходил дополнительное обучение в таких организациях как:{" "}
            <strong>Корпоративный Университет Сбербанка</strong> и{" "}
            <strong>Томский Государственный Университет</strong> с
            сертификацией.
          </p>
        </div>
      </div>
    )
  }
}
