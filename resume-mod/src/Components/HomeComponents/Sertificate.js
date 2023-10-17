import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Java from '../../assets/Sertificate/Java.png';
import Python from '../../assets/Sertificate/python.png';
import Algorithmic from '../../assets/Sertificate/Algorithmic.png';
import Basic_digital from '../../assets/Sertificate/Basic_digital_skills.png';
import Linux from '../../assets/Sertificate/Linux.pdf';
import Java_1 from '../../assets/Sertificate/Java_1.png';
import Java_2 from '../../assets/Sertificate/Java_2.png';
import Basic_programm from '../../assets/Sertificate/Basic_programming.png';
import Modal from 'react-bootstrap/Modal';

function SlideSertificate() {
  const valuesImg = [
    Basic_programm,
    Java,
    Java_1,
    Java_2,
    Python,
    Algorithmic,
    Basic_digital,
    Linux,
  ];
  const [modalShow, setModalShow] = useState(false);
  const [numberValue, setNumberValue] = useState(null);
  const handleClose = () => setModalShow(false);
  const handleShow = (e) => {
    setNumberValue(e);
    setModalShow(true);
  };

  return (
    <>
      <Modal show={modalShow} onHide={handleClose}>
        <img
          src={valuesImg[numberValue]}
          alt="img"
          style={{ width: '700px' }}
        />
      </Modal>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Basic_programm}
            alt="First slide"
            onClick={() => handleShow(0)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Java}
            alt="Second slide"
            onClick={() => handleShow(1)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Java_1}
            alt="Third slide"
            onClick={() => handleShow(2)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Java_2}
            alt="Four slide"
            onClick={() => handleShow(3)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Python}
            alt="Five slide"
            onClick={() => handleShow(4)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Algorithmic}
            alt="Six slide"
            onClick={() => handleShow(5)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Basic_digital}
            alt="Seven slide"
            onClick={() => handleShow(6)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Linux}
            alt="Eight slide"
            onClick={() => handleShow(7)}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default SlideSertificate;
