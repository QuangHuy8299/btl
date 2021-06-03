import React from 'react';
import './styles.scss';

const OurNewSletter = props => {
  return(
    <div className="our-newsletter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4">
            <div className="section-title small-mb__40 tablet-mb__40">
              <h2 className="section-title--one">Our Newsletter</h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-8">
            <div className="newsletter-wrap">
              <from action="#" className="newsletter--one">
                <input className="input-box" type="text" placeholder="Your email address"/>
                <button className="submit-btn">Subscribe</button>
              </from>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurNewSletter;