import React, { useEffect } from 'react';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import { useSelector, useDispatch } from 'react-redux';
import Button from './../../components/froms/Button';
import FormSelect from './../../components/froms/FromSelect';
import { useHistory, useParams } from 'react-router-dom';
import LoadMore from './../LoadMore';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType])

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };
  const configAddToCartBtn = {
    type: 'button'
  }
  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    )
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Mens',
      value: 'mens'
    }, {
      name: 'Womens',
      value: 'womens'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data

      })
    )
  }

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  }

  return (
    <div className="products">
      <h1>
        Browse Products
      </h1>

      <FormSelect {...configFilters} />

      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

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
      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}
    </div>
  )
}

export default ProductResults;