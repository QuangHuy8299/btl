import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import Button from './../froms/Button';
import { addProduct } from './../../redux/Cart/cart.actions';
import Slider from 'react-slick';
import './styles.scss';
import ProductDescription from './ProductDescription';
import ProductAdditional from './ProductAdditional';
import ProductReviews from './ProductReviews';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';

const mapState = state => ({
  product: state.productsData.product
});

const ProductCard = ({ }) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productPrice,
    productName,
    productDesc
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )
    return () => {
      dispatch(
        setProduct({})
      )
    }
  }, []);

  const handleAddToCart = (product) => {
    if (!dispatch) return;
    dispatch(
      addProduct(product)
    );
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const settings = {
    customPaging: function (i) {
      return (
        <div className="product-details-images-2">
          <img src={productThumbnail} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="main-wrapper">
      <div className="site-wrapper-reveal">
        <div className="single-product-wrap section-space--pt_90 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                <div className="product-details-left">
                  <img src={productThumbnail} style={{width: '100%'}}/>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                <div className="product-details-content ">
                  <h5 className="font-weight--reguler mb-10">{productName}</h5>
                  <h3 className="price">£{productPrice}</h3>
                  <div className="quickview-peragraph mt-10">
                    <p>At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
                  </div>
                  <div className="product-size-wrapper mt-20">
                    <div className="tab-content d-flex">
                      <label className="mr-2">Size</label>
                      <div className="tab-pane fade show active" id="tab_list_l">
                        L
                      </div>
                      <div className="tab-pane fade" id="tab_list_m">
                        M
                      </div>
                      <div className="tab-pane fade" id="tab_list_s">
                        S
                      </div>
                    </div>
                    <ul className="nav product-size-menu" role="tablist">
                      <li className="tab__item nav-item active">
                        <a className="nav-link active" data-toggle="tab" href="#tab_list_l" role="tab">L</a>
                      </li>
                      <li className="tab__item nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab_list_m" role="tab">M</a>
                      </li>
                      <li className="tab__item nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab_list_s" role="tab">S</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-color-wrapper mt-20">
                    <div className="tab-content d-flex">
                      <label className="mr-2">Color </label>
                      <div className="tab-pane fade show active" id="tab_list_black">
                        Black
                      </div>
                      <div className="tab-pane fade" id="tab_list_white">
                        White
                      </div>
                    </div>
                    <ul className="nav product-color-menu" role="tablist">
                      <li className="tab__item nav-item active">
                        <a className="nav-link active" data-toggle="tab" href="#tab_list_black" role="tab"></a>
                      </li>
                      <li className="tab__item nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab_list_white" role="tab"></a>
                      </li>
                    </ul>
                  </div>
                  <div className="quickview-action-wrap mt-30">
                    <div className="quickview-cart-box">
                      <div className="quickview-quality">
                        <div className="cart-plus-minus">
                          <span className="dec qtybutton">-</span>
                          <input className="cart-plus-minus-box" type="text" name="qtybutton" value="0" />
                          <span className="inc qtybutton">+</span>
                        </div>
                      </div>
                      <div className="quickview-button">
                        <div className="quickview-cart button">
                          <a href="product-details.html" className="btn--lg btn--black font-weight--reguler text-white" onClick={() => handleAddToCart(product)}>Add to cart</a>
                        </div>
                        <div className="quickview-wishlist button">
                          <a title="Add to wishlist" href="#"><i className="icon-heart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product_meta mt-30">
                    <div className="sku_wrapper item_meta">
                      <span className="label"> SKU: </span>
                      <span className="sku"> 502 </span>
                    </div>
                    <div className="posted_in item_meta">
                      <span className="label">Categories: </span><a href="#">Furniture</a>, <a href="#">Table</a>
                    </div>
                    <div className="tagged_as item_meta">
                      <span className="label">Tag: </span><a href="#">Pottery</a>
                    </div>
                  </div>
                  <div className="product_socials section-space--mt_60">
                    <span className="label">Share this items :</span>
                    <ul className="helendo-social-share socials-inline">
                      <li>
                        <a className="share-twitter helendo-twitter" href="#" target="_blank"><TwitterIcon /></a>
                      </li>
                      <li>
                        <a className="share-facebook helendo-facebook" href="#" target="_blank"><FacebookIcon /></a>
                      </li>
                      <li>
                        <a className="share-google-plus helendo-google-plus" href="#" target="_blank"><InstagramIcon /></a>
                      </li>
                      <li>
                        <a className="share-pinterest helendo-pinterest" href="#" target="_blank"><PinterestIcon /></a>
                      </li>
                      <li>
                        <a className="share-linkedin helendo-linkedin" href="#" target="_blank"><LinkedInIcon /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-details-tab section-space--pt_90">
                  <ul role="tablist" className="nav">
                    <li role="presentation">
                      <Link className={toggleState === 1 ? " active" : ""} onClick={() => toggleTab(1)}>
                        Description
                      </Link>
                    </li>
                    <li role="presentation">
                      <Link className={toggleState === 2 ? " active" : ""} onClick={() => toggleTab(2)}>Additional information</Link>
                    </li>
                    <li role="presentation">
                      <Link className={toggleState === 3 ? " active" : ""} onClick={() => toggleTab(3)}>Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="product_details_tab_content tab-content mt-30">
                  <div className={toggleState === 1 ? "product_tab_content tab-pane active" : "product_tab_content tab-pane"} >
                    <ProductDescription />
                  </div>
                  <div className={toggleState === 2 ? "product_tab_content tab-pane active" : "product_tab_content tab-pane"} >
                    <ProductAdditional />
                  </div>
                  <div className={toggleState === 3 ? "product_tab_content tab-pane active" : "product_tab_content tab-pane"} >
                    <ProductReviews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //<div className="productCard">
    //  <div className="hero">
    //    <img src={productThumbnail} />
    //  </div>
    //  <div className="productDetails">
    //    <ul>
    //      <li>
    //        <h1>
    //          {productName}
    //        </h1>
    //      </li>
    //      <li>
    //        <span>
    //          ${productPrice}
    //        </span>
    //      </li>
    //      <li>
    //        <div className="addToCart">
    //          <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
    //            Add to cart
    //          </Button>
    //        </div>
    //      </li>
    //      <li>
    //        <span dangerouslySetInnerHTML={{ __html: productDesc }} />
    //      </li>
    //    </ul>
    //  </div>
    //</div>
  );
}

export default ProductCard;