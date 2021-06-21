import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from './../../../redux/Cart/cart.actions';
import { Link } from 'react-router-dom';

const Item = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct(product)
    )
  }

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    )
  }

  return (
    <tr>
      <td></td>
      <td className="product-img">
        <Link><img src={productThumbnail} alt={productName} style={{ width: '100px' }} /></Link>
      </td>
      <td className="product-name"><Link>{productName}</Link></td>

      <td className="product-price"><span className="amount">£{productPrice}</span></td>

      <td className="cart-quality">
        <div className="quickview-quality quality-height-dec2">
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={() => handleReduceItem(product)}>-</div>
            <span>{quantity}</span>
            <div className="inc qtybutton" onClick={() => handleAddProduct(product)}>+</div>
          </div>
        </div>
      </td>
      <td className="product-remove">
        <Link onClick={() => handleRemoveCartItem(documentID)}><i className="icon-cross2"></i></Link>
      </td>
    </tr>

  );
}

export default Item;