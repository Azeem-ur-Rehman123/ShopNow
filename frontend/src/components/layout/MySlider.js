import React from 'react';
import '../css/slider.css';
const MySlider = () => {
  return (
    <div
      data-aos="fade-right"
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Sport Shoes</h5>
            <p>We are having awesome sport shoes collections</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7bad8c93546277.5f48a570f12f8.jpg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Gadgets</h5>
            <p>We are having awesome Gadgets collections</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99969d36776659.5728f30440912.jpg"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Mobile</h5>
            <p>We are having awesome Mobile collections</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default MySlider;
