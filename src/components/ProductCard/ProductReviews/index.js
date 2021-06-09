import React from 'react';
import './../styles.scss';

const ProductReviews = props => {
  return [
    <div className="rating_wrap mb-30">
      <h4 className="rating-title-2">Be the first to review “Wooden chair”</h4>
    </div>,
    <div className="comments-area comments-reply-area">
      <div className="row">
        <div className="col-lg-12">
          <form action="#" className="comment-form-area">
            <p className="comment-form-comment">
              <label>Your review *</label>
              <textarea className="comment-notes" required="required"></textarea>
            </p>
            <div className="comment-input">
              <p className="comment-form-author">
                <label>Name <span className="required">*</span></label>
                <input type="text" required="required" name="Name" />
              </p>
              <p className="comment-form-email">
                <label>Email <span className="required">*</span></label>
                <input type="text" required="required" name="email" />
              </p>
            </div>

            <div className="comment-form-submit">
              <input type="submit" value="Submit" className="comment-submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  ]
}

export default ProductReviews;