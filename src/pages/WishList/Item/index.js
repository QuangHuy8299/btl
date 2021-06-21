import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWishListItem } from './../../../redux/WishList/wishList.actions';
import { addProduct } from './../../../redux/Cart/cart.actions'
import { Link } from 'react-router-dom';

const WishListItem = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    documentID
  } = product;

  const handleRemoveWishListItem = (documentID) => {
    dispatch(
      removeWishListItem({
        documentID
      })
    );
  }

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
  };

  return (
    <tr>
      <td class="product-remove">
        <Link onClick={() => handleRemoveWishListItem(documentID)}><i class="icon-cross2"></i></Link>
      </td>
      <td class="product-img">
        <Link to={`/product/${documentID}`} ><img src={productThumbnail} alt={productName} style={{ width: '100px' }} /></Link>
      </td>
      <td class="product-name"><Link to={`/product/${documentID}`}  >{productName}</Link></td>
      <td class="product-price"><span class="amount">£{productPrice}</span></td>
      <td class="product-stock-status">
        <p>In Stock</p>
      </td>
      <td class="product-wishlist-cart"><Link onClick={() => handleAddToCart(product)}>add to cart</Link></td>
    </tr>
  );
}

export default WishListItem;