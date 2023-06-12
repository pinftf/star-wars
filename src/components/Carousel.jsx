import React from 'react';
import './Carousel.css';
import Image1 from '../images/darthvader.jpg';
import Image2 from '../images/yoda.jpg';
import Image3 from '../images/obiwan.jpg';
import Image4 from '../images/hansolo.jpg';

function Carousela() {
  return (
    <div className="container">
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" className="carousel__slide">
            <img src={Image1} alt="" />
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
            <div className="carousel__caption">
              I am your father - Darth Vader
            </div>
          </li>
          <li id="carousel__slide2" className="carousel__slide">
            <img src={Image2} alt="Image2" />
            <div className="carousel__snapper" />
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
            <div className="carousel__caption">
              Try no. DO or do not. There is no try - Yoda
            </div>
          </li>
          <li id="carousel__slide3" className="carousel__slide">
            <img src={Image3} alt="Image1" />
            <div className="carousel__snapper" />
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
            <div className="carousel__caption">
              Who’s the more foolish: the fool or the fool who follows him?
              —Obi-Wan Kenobi
            </div>
          </li>
          <li id="carousel__slide4" className="carousel__slide">
            <img src={Image4} alt="Image2" />
            <div className="carousel__snapper" />
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
            <div className="carousel__caption">
              Great, kid, don’t get cocky. - Han Solo
            </div>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </div>
  );
}

export default Carousela;
