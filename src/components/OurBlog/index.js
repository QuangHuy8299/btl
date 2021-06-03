import React from 'react';
import { Link } from 'react-router-dom';
import BlogImg1 from './../../Asset/8-570x370.jpg'
import BlogImg2 from './../../Asset/9-570x370.jpg'
import BlogImg3 from './../../Asset/10-570x370.jpg'
import './styles.scss';

const OurBlog = props => {
  return (
    <div className="our-blog-area section-space--ptb_90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-20">
              <h2 className="section-title--one section-title--center">
                Our Blog
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="single-blog-item mt-30">
              <div className="blog-thumbnail-box">
                <Link to="/" className="thumbnail">
                  <img src={BlogImg1} className="img-fluid" alt="Blog Images" />
                </Link>
                <Link to="/" className="btn-blog">
                  Read more
                </Link>
              </div>
              <div className="blog-contents">
                <h6 className="blog-title">
                  <Link to="/">
                    Interior design is the art, the interior designer is the artist.
                  </Link>
                </h6>
                <div className="meta-tag-box">
                  <div className="meta date">
                    <span>June 3, 2021</span>
                  </div>
                  <div className="meta author">
                    <Link to="/">Hastheme</Link>
                  </div>
                  <div className="meta cat">
                    <span>in<Link to="/">Chair</Link> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="single-blog-item mt-30">
              <div className="blog-thumbnail-box">
                <Link to="/" className="thumbnail">
                  <img src={BlogImg2} className="img-fluid" alt="Blog Images" />
                </Link>
                <Link to="/" className="btn-blog">
                  Read more
                </Link>
              </div>
              <div className="blog-contents">
                <h6 className="blog-title">
                  <Link to="/">
                    Decorate your home with the most modern furnishings.
                  </Link>
                </h6>
                <div className="meta-tag-box">
                  <div className="meta date">
                    <span>June 3, 2021</span>
                  </div>
                  <div className="meta author">
                    <Link to="/">Hastheme</Link>
                  </div>
                  <div className="meta cat">
                    <span>in<Link to="/">Chair</Link> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="single-blog-item mt-30">
              <div className="blog-thumbnail-box">
                <Link to="/" className="thumbnail">
                  <img src={BlogImg3} className="img-fluid" alt="Blog Images" />
                </Link>
                <Link to="/" className="btn-blog">
                  Read more
                </Link>
              </div>
              <div className="blog-contents">
                <h6 className="blog-title">
                  <Link to="/">
                    Spatialize with the decorations of the Helendo store.
                  </Link>
                </h6>
                <div className="meta-tag-box">
                  <div className="meta date">
                    <span>June 3, 2021</span>
                  </div>
                  <div className="meta author">
                    <Link to="/">Hastheme</Link>
                  </div>
                  <div className="meta cat">
                    <span>in<Link to="/">Chair</Link> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;