import React from 'react';
import './default.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
        <Registration />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
