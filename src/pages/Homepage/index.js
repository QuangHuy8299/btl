import React from 'react';
import FeaturedProduct from '../../components/FeaturedProduct';
import OfferCollection from '../../components/OfferCollection';
import Slider from '../../components/Slider'
import './styles.scss'

const Homepage = props => {
  return (
    <div className="main-wrapper" style={{ overflow: "hidden" }}>
      <div className="site-wrapper-reveal">
        <Slider />
        <FeaturedProduct />
        <OfferCollection />
      </div>

    </div>
  );
}

export default Homepage;