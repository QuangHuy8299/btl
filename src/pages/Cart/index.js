import React from 'react';
import Checkout from './../../components/Checkout';
import { Link } from 'react-router-dom';

const Cart = ({ }) => {
  return (
    <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row breadcrumb_box  align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                  <h2 className="breadcrumb-title">Cart</h2>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-6">
                  <div className="breadcrumb-list text-center text-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        Home
                  </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Cart
                </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <Checkout />
    </div>
  );
}

export default Cart;