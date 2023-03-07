import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Java from '../assets/Sertificate/Java.png';
import Python from '../assets/Sertificate/python.png';
import Algorithmic from '../assets/Sertificate/Algorithmic.png';
import Basic_digital from '../assets/Sertificate/Basic_digital_skills.png';
import Linux from '../assets/Sertificate/Linux.pdf';
import Java_1 from '../assets/Sertificate/Java_1.png';
import Java_2 from '../assets/Sertificate/Java_2.png';
import Basic_programm from '../assets/Sertificate/Basic_programming.png';
import Oop_Android from '../assets/Sertificate/sertificate_Android_oop.pdf'

function UncontrolledExample() {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={Basic_programm}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Java}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Java_1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Java_2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Python}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Algorithmic}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Basic_digital}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Linux}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Oop_Android}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
