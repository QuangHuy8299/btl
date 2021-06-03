import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import df1 from './../../Asset/df-1.png';
import df2 from './../../Asset/df-2.png';
import df3 from './../../Asset/df-3.png';

const FeaturedProduct = props => {
  return [
    <div className="featuted-product-wrap section-space--pt_120">
      <div className="container">
        <div className="row align-items-center featuted-product-one">
          <div className="col-lg-6 col-md-6 order-md-1 order-1">
            <div className="product-thumbnail">
              <Link to="/">
                <img src={df1} className="img-fluid hover-zoom" alt="Featured Image" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-md-2 order-1">
            <div className="featured-product-contect">
              <h6 className="sub-heading mb-2">
                FEATURED PRODUCT
              </h6>
              <h2 className="section-title--one">
                <Link to="/">
                  Nancy Chair
                </Link>
              </h2>
              <p className="mt-30">
                When an unknown printer took a galley of type and scrambled it to make a
                type specimen book. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia.
              </p>
              <div className="button-box section-space--mt_60">
                <Link className="btn btn--md btn--border_1">
                  Only $90
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="featuted-product-wrap section-space--pt_120">
      <div className="container">
        <div className="row align-items-center featuted-product-one">
          <div className="col-lg-6 col-md-6 order-md-2 order-1">
            <div className="featured-product-contect">
              <h6 className="sub-heading mb-2">
                FEATURED PRODUCT
              </h6>
              <h2 className="section-title--one">
                <Link to="/">
                  Table Wood Pine
                </Link>
              </h2>
              <p className="mt-30">
                Excepteur sint occaecat cupidatat non proident, sunt in culpaqui
              </p>
              <div className="button-box section-space--mt_60">
                <Link className="btn btn--md btn--border_1">
                  Only $90
                <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-md-1 order-1">
            <div className="product-thumbnail">
              <Link to="/">
                <img src={df2} className="img-fluid hover-zoom" alt="Featured Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="featuted-product-wrap section-space--pt_120">
      <div className="container">
        <div className="row align-items-center featuted-product-one">
          <div className="col-lg-6 col-md-6 order-md-1 order-1">
            <div className="product-thumbnail">
              <Link to="/">
                <img src={df3} className="img-fluid hover-zoom" alt="Featured Image" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 order-md-2 order-1">
            <div className="featured-product-contect">
              <h6 className="sub-heading mb-2">
                FEATURED PRODUCT
              </h6>
              <h2 className="section-title--one">
                <Link to="/">
                  Art Deco Home
                </Link>
              </h2>
              <p className="mt-30">
                Many desktop publishing packages and web page editors now use <br />
                Lorem Ipsum as their default model text, and a search for.
              </p>
              <div className="button-box section-space--mt_60">
                <Link className="btn btn--md btn--border_1">
                  Only $90
                <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ]
};

export default FeaturedProduct;