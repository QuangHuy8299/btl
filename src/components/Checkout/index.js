import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import Button from './../froms/Button';
import Item from './Item';
import './styles.scss';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const CheckOut = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = 'You have no items in your cart';
  return (
    <div className="cart-main-area  section-space--ptb_90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form action="#">
              <div className="table-content table-responsive cart-table-content header-color-gray">
                {cartItems.length > 0 ? (
                  <table>
                    <thead>
                      <tr className="bg-gray">
                        <th></th>
                        <th></th>
                        <th className="product-name">Product</th>
                        <th className="product-price"> Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, pos) => {
                        return (
                          <Item {...item} key={pos} />
                        );
                      })}
                    </tbody>
                  </table>
                ) : (<p>
                  {errMsg}
                </p>)}
              </div>
            </form>
            <div className="shoping-update-area row">
              <div className="continue-shopping-butotn col-6 mt-30">
                <a className="btn btn--lg btn--black" style={{ color: 'white' }} onClick={() => history.goBack()}><i className="icon-arrow-left"></i> Continue Shopping </a>
              </div>
              <div className="update-cart-button col-6 text-right mt-30">
                <a className="btn btn--lg btn--border_1">Update cart</a>
              </div>
            </div>
            <div className="cart-buttom-area">
              <div className="row">
                <div className="col-lg-6">
                  <div className="discount-code section-space--mt_60">
                    <h6 className="mb-30">Coupon Discount</h6>
                    <p>Enter your coupon code if you have one.</p>
                    <input type="text" name="name" placeholder="Coupon code" />
                    <button className="coupon-btn btn btn--lg btn--border_1" type="submit">Apply coupon</button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cart_totals section-space--mt_60 ml-md-auto">
                    <div className="grand-total-wrap">
                      <div className="grand-total-content">
                        <ul>
                          <li>Subtotal <span>£{total}</span></li>
                          <li>Total <span>£{total}</span> </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grand-btn mt-30">
                      <a className="btn--black btn--full text-center btn--lg" style={{ color: 'white' }} onClick={() => history.push('/payment')}>Proceed to checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;