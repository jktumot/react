import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import resume_one from '../assets/Portfolio/resume_one.png';

function BasicExample() {
  return (
    <>
        <div className='cards'>
            <div className="card">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={resume_one} width="90" height="200" />
                <Card.Body>
                    <Card.Title>Проект-резюме</Card.Title>
                    <Card.Text>
                    Мой проект, он же резюме с использованием HTML, Css и JavaScript.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/jktumot/resume-Mot.git" rel="nofollow" target="_blank">GitHub</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="card">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={resume_one} width="90" height="200" />
                <Card.Body>
                    <Card.Title>Проект-резюме</Card.Title>
                    <Card.Text>
                    Мой проект, он же резюме с использованием HTML, Css и JavaScript.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/jktumot/resume-Mot.git" rel="nofollow" target="_blank">GitHub</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="card">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={resume_one} width="90" height="200" />
                <Card.Body>
                    <Card.Title>Проект-резюме</Card.Title>
                    <Card.Text>
                    Мой проект, он же резюме с использованием HTML, Css и JavaScript.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/jktumot/resume-Mot.git" rel="nofollow" target="_blank">GitHub</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    </>    
  );
}

export default BasicExample;