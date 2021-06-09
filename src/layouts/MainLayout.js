import React from 'react';
import Footer from '../components/Footer';
import Header from './../components/Header';
import { Link } from 'react-router-dom';

const MainLayout = props => {
  return (
    <div>
      <div className="header-area header-area--default bg-white">
        <Header {...props} />
      </div>
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;