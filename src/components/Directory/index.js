import React from 'react';
import DemoPage1 from './../../Asset/demo-page-1.jpg';
import DemoPage2 from './../../Asset/demo-page-2.jpg';
import './styles.scss'

const Directory = props => {
  return (
    <div className="directory">
      <div className="warp">
        <div className="item" style={{ backgroundImage: `url(${DemoPage1})` }}>
          <a href="">
            Shop Furniture 1
          </a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${DemoPage2})` }}>
          <a href="">
            Shop Furniture 2
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;