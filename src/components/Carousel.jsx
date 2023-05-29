import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import Image1 from '../images/star-wars-stormtroopers-Edouard-Groult.jpg';
import Image2 from '../images/Star_Wars_Art_Concept_Illustration_M01.jpg';

function Carousela() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First Slide" />
        <Carousel.Caption>
          <h3>You shall not pass</h3>
          <p>Brief description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second Slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousela;
