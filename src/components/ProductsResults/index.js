import React, { useEffect } from 'react';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import { useSelector, useDispatch } from 'react-redux';
import Button from './../../components/froms/Button';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    )
  }, [])
  const configAddToCartBtn = {
    type: 'button'
  }
  if (!Array.isArray(products)) return null;
  if (products.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    )
  }

  return (
    <div className="products">
      <h1>
        Browse Products
      </h1>
      <div className="productResults">
        {products.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice
          };

          return (
            <div className="product">
              <div className="thumb">
                <img src={productThumbnail} alt={productName} />
              </div>
              <div className="details">
                <ul>
                  <li>
                    <span className="name">
                      {productName}
                    </span>
                  </li>
                  <li>
                    <span className="price">
                      ${productPrice}
                    </span>
                  </li>
                  <li>
                    <div className="addToCart">
                      <Button {...configAddToCartBtn}>
                        Add to cart
              </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductResults;