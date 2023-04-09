import Card from "react-bootstrap/Card";
import portfolio_pic from "../../assets/Portfolio/resume_one.png";
import portfolio_pic2 from "../../assets/Portfolio/resume_two.png";
import portfolio_pic3 from "../../assets/Portfolio/resume_three.png";
import portfolio_pic4 from "../../assets/Portfolio/resume_four.jpg";
import { Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import CardGroup from "react-bootstrap/CardGroup";

function GroupExample() {
  return (
    <CardGroup className="portfolio">
      <Card className="card_view">
        <Card.Img variant="top" src={portfolio_pic} />
        <Card.Body>
          <Card.Title>Resume First-project</Card.Title>
          <Card.Text>
            Это мой первый проект-резюме. Который я сделал в процессе
            самостоятельного изучения языков разметки.
          </Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          href="https://github.com/jktumot/resume-Mot.git"
          rel="nofollow"
          target="_blank"
        >
          {" "}
          GitHub <AiFillGithub />
        </Button>
        <Card.Footer className="text-muted">HTML, CSS</Card.Footer>
      </Card>
      <Card className="card_view">
        <Card.Img variant="top" src={portfolio_pic2} />
        <Card.Body>
          <Card.Title>Этот сайт проект на Bootstrap</Card.Title>
          <Card.Text>
            Этот адаптивный сайт - мое резюме. Он так же демонстрирует мои
            знания. Использовал React-Bootstrap и свои стили CSS  {" "}
          </Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          href="https://github.com/jktumot/react/tree/main/resume-mod"
          rel="nofollow"
          target="_blank"
        >
          {" "}
          GitHub <AiFillGithub />
        </Button>
        <Card.Footer className="text-muted">React, Bootstrap, CSS</Card.Footer>
      </Card>
      <Card className="card_view">
        <Card.Img variant="top" src={portfolio_pic3} />
        <Card.Body>
          <Card.Title>Project Material-UI</Card.Title>
          <Card.Text>
            Этот проект создан с помощью компонентов Material-UI. Адаптивный сайт с меню, с окном регистрации и выбора постов. 
          </Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          href="https://github.com/jktumot/react/tree/main/material-resume"
          rel="nofollow"
          target="_blank"
        >
          {" "}
          GitHub <AiFillGithub />
        </Button>
        <Card.Footer className="text-muted">React, Material-UI</Card.Footer>
      </Card>
      <Card className="card_view">
        <Card.Img variant="top" src={portfolio_pic4} />
        <Card.Body>
          <Card.Title>Сервер + БД + Клиент</Card.Title>
          <Card.Text>
            Данный проект включает в себя сервеную часть, которая принимает
            запросы от клиента и отвечает информацией из базы данных.
            Запуск сервера Node.JS,установка связи с Postgres pgAdmin и взаимодествие с фронтом.
          </Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          href="https://github.com/jktumot/ServerClient.git"
          rel="nofollow"
          target="_blank"
        >
          {" "}
          GitHub <AiFillGithub />
        </Button>
        <Card.Footer className="text-muted">
          React, Node.js, Express, PostgreSQL
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
