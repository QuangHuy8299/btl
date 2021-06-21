import React from 'react';
import { Link } from 'react-router-dom';
import './../../components/Checkout/styles.scss';
import WishListItem from './Item';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWishListItems } from './../../redux/WishList/wishList.selector';

const mapState = createStructuredSelector({
  wishListItems: selectWishListItems,
});

const WishList = ({ }) => {
  const { wishListItems } = useSelector(mapState);
  const errMsg = 'Your have no items in your cart';
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
                      Wish List
                </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-wrapper-reveal border-bottom">
        <div className="wishlist-main-area  section-space--ptb_90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <from action="">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th class="product-name">Product</th>
                          <th class="product-price"> Unit Price</th>
                          <th>Stock Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishListItems.map((item, pos) => {
                          return (
                            <WishListItem {...item} key={pos} />
                          );
                        })}
                      </tbody>
                    </table>
                    {/*{wishListItems.length > 0 ? (
                      
                    ) : (
                      <p>
                        {errMsg}
                      </p>
                    )}*/}
                  </div>
                </from>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;