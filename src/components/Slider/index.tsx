import './index.less';
import creditCardImg from '../../images/credit card.png';
import secondSlider from '../../images/erol-ahmed-9ZWtkOCMxbM-unsplash.jpg';
import thirdSlider from '../../images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg';
import { Carousel, Image } from 'react-bootstrap';
import React from 'react';
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 sliderImage"
          src={creditCardImg}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="slider-text"> 
          <h3>Try Mony</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 sliderImage"
          src={secondSlider}
          alt="Second slide"
        />
        <Carousel.Caption>
           <div className="slider-text"> 
          <h3>Your account is safe with us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src={thirdSlider}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="slider-text"> 
          <h3>Instant Credit Card</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
