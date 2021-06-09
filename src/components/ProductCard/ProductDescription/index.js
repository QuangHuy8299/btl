import React from 'react';
import './../styles.scss';

const ProductDescription = props => {
  return (
    <div className="product_description_wrap">
      <div className="product-details-wrap">
        <div className="row align-items-center">
          <div className="col-lg-7 order-md-1 order-2">
            <div className="details mt-30">
              <h5 className="mb-10">
                Detail
              </h5>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum omnis voluptas assumenda.</p>
            </div>
          </div>
          <div className="col-lg-5 order-md-1 order-2">
            <div className="images">
              <img />
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-wrap">
        <div className="row align-items-center">
          <div className="col-lg-7 order-md-1 order-2">
            <div className="details mt-30">
              <h5 className="mb-10">
                Features
              </h5>
              <ul class="feature_list">
                <li><a><i className="arrow_triangle-right"></i>Fully padded back panel, web hauded handle</a></li>
                <li><a><i className="arrow_triangle-right"></i>Internal padded sleeve fits 15″ laptop</a></li>
                <li><a><i className="arrow_triangle-right"></i>Internal tricot lined tablet sleeve</a></li>
                <li><a><i className="arrow_triangle-right"></i>One large main compartment and zippered</a></li>
                <li><a><i className="arrow_triangle-right"></i>Premium cotton canvas fabric</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 order-md-1 order-2">
            <div className="images">
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;