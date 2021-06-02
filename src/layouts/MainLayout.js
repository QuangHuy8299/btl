import React from 'react';
import Footer from '../components/Footer';
import Header from './../components/Header';

const MainLayout = props => {
  return (
    <div>
      <div className="header-area header-area--default bg-white">
        <Header {...props} />
      </div>
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;