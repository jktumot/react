import Card from 'react-bootstrap/Card';
import portfolio_pic from '../../assets/Portfolio/resume_one.png'
import portfolio_pic2 from '../../assets/Portfolio/resume_two.png'
import portfolio_pic3 from '../../assets/Portfolio/resume_three.png'
import { Button } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup className='portfolio'>
      <Card>
        <Card.Img variant="top" src={portfolio_pic} />
        <Card.Body>
          <Card.Title>Resume First-project</Card.Title>
          <Card.Text>
            Это мой первый проект-резюме. Который я сделал в процессе самостоятельного изучения языков разметки.
          </Card.Text>
          <Button variant="primary" href="https://github.com/jktumot/resume-Mot.git" rel="nofollow" target="_blank"> GitHub <AiFillGithub /></Button>
        </Card.Body>
        <Card.Footer className="text-muted">HTML, CSS</Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={portfolio_pic3} />
        <Card.Body>
          <Card.Title>Этот сайт проект на Bootstrap</Card.Title>
          <Card.Text>
            Этот сайт я разрабатывал как резюме. Он так же демонстрирует мои знания{' '}
          </Card.Text>
          <Button variant="primary" href="https://github.com/jktumot/resume-Mot.git" rel="nofollow" target="_blank"> GitHub <AiFillGithub /></Button>
        </Card.Body>
        <Card.Footer className="text-muted">React, Bootstrap, CSS</Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={portfolio_pic2} />
        <Card.Body>
          <Card.Title>Project Material-UI</Card.Title>
          <Card.Text>
            Этот проект создан с помощью компонентов Material-UI. Использовались знания из различных уголков интеренета.
          </Card.Text>
          <Button variant="primary" href="https://github.com/jktumot/resume-Mot.git" rel="nofollow" target="_blank"> GitHub <AiFillGithub /></Button>
        </Card.Body>
        <Card.Footer className="text-muted">React, Material-UI</Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;