import React from 'react';
import './styles.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Background1 from './../../Asset/home-default-1.jpg'

const Sliders = props => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div className="single-hero-slider-five background-slider-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content-wrap">
                <div className="hero-text-five mt-lg-5">
                  <h6 className="mb-30 small-title border-h6">Chair<br />Collection<br />2021</h6>
                  <h1>Chanel Chair <br /> High Quality Walnut</h1>
                  <div className="button-box section-space--mt_60">
                    <Link to="/search" className="text-btn-normal font-weight--reguler font-lg-p">
                      Discover Collection
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-hero-slider-five background-slider-2" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content-wrap">
                <div className="hero-text-five mt-lg-5">
                  <h6 className="mb-30 small-title border-h6">Chair<br />Collection<br />2021</h6>
                  <h1>Chanel Chair <br /> High Quality Walnut</h1>
                  <div className="button-box section-space--mt_60">
                    <Link to="/search" className="text-btn-normal font-weight--reguler font-lg-p">
                      Discover Collection
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-hero-slider-five background-slider-3" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content-wrap">
                <div className="hero-text-five mt-lg-5">
                  <h6 className="mb-30 small-title border-h6">Chair<br />Collection<br />2021</h6>
                  <h1>Chanel Chair <br /> High Quality Walnut</h1>
                  <div className="button-box section-space--mt_60">
                    <Link to="/search" className="text-btn-normal font-weight--reguler font-lg-p">
                      Discover Collection
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Sliders;