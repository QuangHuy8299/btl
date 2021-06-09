import React from 'react';
import { Link } from 'react-router-dom';
import BlogImg from './../../Asset/8-870x500.jpg';
import Blogwidget from './../../Asset/blog-widget.jpg';
import './styles.scss';

const Blog = props => {
  return [
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row breadcrumb_box  align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                <h2 className="breadcrumb-title">Blog</h2>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-6">
                <div className="breadcrumb-list text-center text-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    blog
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
        <div className="blog-page-wrapper section-space--pt_120 section-space--pb_120">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="single-blog-item section-space--mb_60">
                      <div className="blog-thumbnail-box">
                        <Link className="thumbnail">
                          <img src={BlogImg} className="img-fluid" />
                        </Link>
                      </div>
                      <div className="blog-contents">
                        <h3 className="blog-title-lg"><a>Interior design is the art, the interior designer is the artist.</a></h3>
                        <div className="meta-tag-box">
                          <div className="meta date"><span>October 16, 2020</span></div>
                          <div className="meta author"><span><Link>Hastheme</Link></span></div>
                          <div className="meta cat"><span>in <Link>Chair</Link></span></div>
                        </div>

                        <p className="mt-20 d_text">Contrary to popular belief, Lorem Ipsum indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in…</p>
                        <div className="button-box mt-40">
                          <Link to="" className="btn btn--md btn--border_1"> Read more </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="blog-widget widget-blog-categories tablet-mt__60 small-mb__60">
                  <div className="blog-search">
                    <input type="text" placeholder="Search …" />
                    <button className="submit-button"><i className="icon-magnifier"></i></button>
                  </div>
                </div>
                <div className="blog-widget widget-blog-recent-post mt-40">
                  <h6 className="mb-20">Recent Posts</h6>
                  <ul className="widget-nav-list">
                    <li><Link>Interior design is the art, the interior designer is the artist. <span className="post-date">October 18, 2020</span></Link> </li>
                    <li><Link>Decorate your home with the most modern furnishings. <span className="post-date">October 18, 2020</span></Link> </li>
                    <li><Link>Spatialize with the decorations of the Helendo store. <span className="post-date">October 18, 2020</span></Link> </li>
                  </ul>
                </div>
                <div className="blog-widget widget-blog-categories mt-40">
                  <h6 className="mb-20">Categories</h6>
                  <ul className="widget-nav-list">
                    <li><Link>Art Deco <span>(1)</span></Link></li>
                    <li><Link>Chair <span>(4)</span></Link></li>
                    <li><Link>Lightning <span>(3)</span></Link></li>
                    <li><Link>Wooden <span>(4)</span></Link></li>
                  </ul>
                </div>

                <div className="blog-widget widget-blog-banner mt-40">
                  <Link to="/search"><img src={Blogwidget} className="img-fluid" alt="blog widget" /></Link>
                </div>

                <div className="blog-widget widget-blog-tag mt-40">
                  <h6 className="mb-20">Tags</h6>
                  <div className="blog-tagcloud">
                    <Link className="selected">All</Link>
                    <Link className="">Accesssories</Link><a className="">Box</a>
                    <Link className="">chair</Link>
                    <Link className="">Deco</Link>
                    <Link className="">Furniture</Link>
                    <Link className="">Glass</Link>
                    <Link className="">Pottery</Link>
                    <Link className="">Table</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ];
}

export default Blog;