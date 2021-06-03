import React from 'react';
import FeaturedProduct from '../../components/FeaturedProduct';
import OfferCollection from '../../components/OfferCollection';
import OurBlog from '../../components/OurBlog';
import OurNewSletter from '../../components/OurNewsletter';
import Slider from '../../components/Slider'
import './styles.scss'

const Homepage = props => {
  return (
    <div className="main-wrapper" style={{ overflow: "hidden" }}>
      <div className="site-wrapper-reveal">
        <Slider />
        <FeaturedProduct />
        <OfferCollection />
        <OurBlog />
        <OurNewSletter />
      </div>
    </div>
  );
}

export default Homepage;