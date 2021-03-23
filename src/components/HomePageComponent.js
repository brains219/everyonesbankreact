import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Pic1 from "./shared/img/pic1.jpg";
import Pic2 from "./shared/img/pic2.jpg";
import Pic3 from "./shared/img/pic3.jpg";

const HomePage = () => {
  return (
    <Carousel className="container">
      <Carousel.Item>
        <img
          className="d-block w-100 myCarouselImg"
          src={Pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 myCarouselImg"
          src={Pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 myCarouselImg"
          src={Pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
