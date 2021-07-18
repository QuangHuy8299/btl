import React, { useEffect } from 'react';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import { useSelector, useDispatch } from 'react-redux';
import FormSelect from './../../components/froms/FromSelect';
import { useHistory, useParams } from 'react-router-dom';
import LoadMore from './../LoadMore';
import Product from './Product'
import { Link } from 'react-router-dom';
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
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
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
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return [
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row breadcrumb_box  align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                <h2 className="breadcrumb-title">Shop</h2>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-6">
                <div className="breadcrumb-list text-center text-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Shop
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="main-wrapper">
      <div className="site-wrapper-reveal border-bottom">
        <div className="product-wrapper section-space--ptb_120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 order-md-1 order-2  small-mt__40">
                <div className="shop-widget widget-shop-categories">
                  <div className="product-filter">
                    <h6 className="mb-20">
                      Categories
                    </h6>
                    <ul className="widget-nav-list">
                      <li>
                        <Link to="/">All</Link>
                      </li>
                      <li>
                        <Link to="/">Men</Link>
                      </li>
                      <li>
                        <Link to="/">Womens</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-widget widget-size">
                  <div className="product-filter">
                    <h6 className="mb-20">
                      Size
                    </h6>
                    <ul className="widget-nav-list">
                      <li>
                        <Link to="/">
                          Large
                          <span className="count">1</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          Medium
                          <span className="count">1</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          Small
                          <span className="count">1</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9  order-md-2 order-1">
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="shop-toolbar__items shop-toolbar__item--left">
                      <div className="shop-toolbar__item shop-toolbar__item--result">
                        <p className="result-count"> Showing 1–9 of 21</p>
                      </div>
                      <div className="shop-toolbar__item shop-short-by">
                        <ul>
                          <li>
                            <Link>
                              Sort by:
                            <span className="d-sm-inline-block dropdown">
                                Default
                            </span>
                              <i className="fa fa-angle-down angle-down"></i>
                            </Link>
                            <ul className="dropdown-content">
                              <li>
                                <Link>Default sorting</Link>
                              </li>
                              <li>
                                <Link>Sort by popularity</Link>
                              </li>
                              <li>
                                <Link>Sort by average rating</Link>
                              </li>
                              <li>
                                <Link>Sort by latest</Link>
                              </li>
                              <li>
                                <Link>Sort by price: low to high</Link>
                              </li>
                              <li>
                                <Link>Sort by price: high to low</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active show">
                    <div className="tab-pane fade active show">
                      <div className="row">
                        {data.map((product, pos) => {
                          const { productThumbnail, productName, productPrice } = product;
                          if (!productThumbnail || !productName ||
                            typeof productPrice === 'undefined') return null;
                          const configProduct = {
                            ...product
                          };
                          return (
                            <Product key={pos} {...configProduct} />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {!isLastPage && (
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
                      <LoadMore {...configLoadMore} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];
};

export default ProductResults;