import React from 'react';
import FeaturedProduct from '../../components/FeaturedProduct';
import Slider from '../../components/Slider'
import './styles.scss'

const Homepage = props => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Slider />
      <FeaturedProduct />
    </div>
  );
}

export default Homepage;