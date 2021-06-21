import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './../../froms/Button'
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';
import { addWishListProduct } from './../../../redux/WishList/wishList.actions';
import './styles.scss';

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice
  } = product;
  if (!documentID || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
  };

  const handleAddToWishList = (product) => {
    if (!product) return;
    dispatch(
      addWishListProduct(product)
    );
  };


  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="single-product-item text-center">
        <div className="products-images">
          <Link to={`/product/${documentID}`} className="product-thumbnail">
            <img src={productThumbnail} alt={productName} />
          </Link>
          <div class="product-actions">
            <Link data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></Link>
            <Link onClick={() => handleAddToCart(product)}><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></Link>
            <Link onClick={() => handleAddToWishList(product)}><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></Link>
          </div>
        </div>
        <div class="product-content">
          <h6 class="prodect-title">
            <Link to={`/product/${documentID}`}>
              {productName}
            </Link>
          </h6>
          <div class="prodect-price">
            <span class="new-price">£{productPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;