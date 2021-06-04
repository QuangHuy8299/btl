import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import ImgAbout from './../../Asset/video-about.jpg';
import ImgMd1 from './../../Asset/im-md-1-780x770.jpg';
import ImgMd2 from './../../Asset/im-md-2-380x380.jpg';
import ImgMd3 from './../../Asset/im-md-3.jpg';
import ImgMd4 from './../../Asset/im-md-4-380x380.jpg';
import ImgMd5 from './../../Asset/im-md-5-780x380.jpg';

const AboutUS = props => {
  return [
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row breadcrumb_box  align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                <h2 className="breadcrumb-title">About Us</h2>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-6">
                <div className="breadcrumb-list text-center text-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                  </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    About Us
                </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="main-wrapper">
      <div className="site-wrapper-reveal border-bottom">
        <div className="about-us-pages-area">
          <div className="banner-video-area overflow-hidden section-space--pt_90">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-video-box">
                    <img src={ImgAbout} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-customer-suppoer-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="single-support-item">
                    <div className="header-support">
                      <div className="icon">
                        <i className="icon-bag2"></i>
                      </div>
                      <h6>
                        <Link>Shop online</Link>
                      </h6>
                    </div>
                    <div className="iconbox-desc">
                      <p>There are many variations pasbut the majority have suffered.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="single-support-item">
                    <div className="header-support">
                      <div className="icon">
                        <i className="icon-cash-dollar"></i>
                      </div>
                      <h6>
                        <Link>Payment methods</Link>
                      </h6>
                    </div>
                    <div className="iconbox-desc">
                      <p>Letraset sheets containing Lorem Ipsum publishing software.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="single-support-item">
                    <div className="header-support">
                      <div className="icon">
                        <i className="icon-paper-plane"></i>
                      </div>
                      <h6>
                        <Link>Free shipping</Link>
                      </h6>
                    </div>
                    <div className="iconbox-desc">
                      <p>when an unknown printer took a make a type book.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="single-support-item">
                    <div className="header-support">
                      <div className="icon">
                        <i className="icon-history"></i>
                      </div>
                      <h6>
                        <Link>Return policy</Link>
                      </h6>
                    </div>
                    <div className="iconbox-desc">
                      <p>Various versions have evolved over the years purpose.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="perfection-area section-space--pt_90">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="perfection-dec mr-lg-5">
                    <h5 className="mb-10">
                      Functionality meets perfection
                    </h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete at the system, expound the actual teachings of the great of the truth, the human happiness was born. teachings of the great of the truth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-preduct-wrapper section-space--pt_90">
            <div className="container">
              <div className="row row--6">
                <div className="col-lg-8 col-md-8" style={{ paddingLeft: '0px' }}>
                  <div className="banner-product-image mt-10">
                    <Link>
                      <img src={ImgMd1} />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4" style={{ paddingLeft: '0px' }}>
                  <div className="banner-product-image mt-10">
                    <Link>
                      <img src={ImgMd2} />
                    </Link>
                  </div>
                  <div className="banner-product-image mt-10">
                    <Link>
                      <img src={ImgMd3} />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4" style={{ paddingLeft: '0px' }}>
                  <div className="banner-product-image mt-10">
                    <Link>
                      <img src={ImgMd4} />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8" style={{ paddingLeft: '0px' }}>
                  <div className="banner-product-image mt-10">
                    <Link>
                      <img src={ImgMd5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="addres-area section-space--pb_90">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="helendo-section-title text-left section-space--mt_60">
                    <h3>Ha Noi</h3>
                    <div className="description">
                      <p>
                        Dai Co Viet, Hai Ba Trung, Ha Noi, Viet Nam
                        <br />
                        +0853806740
                        <br />
                        huypq234@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"><div className="helendo-section-title text-left section-space--mt_60">
                    <h3>Nam Dinh</h3>
                    <div className="description">
                      <p>
                        Dai Co Viet, Hai Ba Trung, Ha Noi, Viet Nam
                        <br />
                        +0853806740
                        <br />
                        huypq234@gmail.com
                      </p>
                    </div>
                  </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];
}

export default AboutUS;