import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Contact = props => {
  return [
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row breadcrumb_box  align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                <h2 className="breadcrumb-title">Contact</h2>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-6">
                <div className="breadcrumb-list text-center text-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Contact
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
        <div className="contact-us-info-area mt-30 section-space--mb_60">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="single-contact-info-item">
                  <div className="icon">
                    <i className="icon-clock3"></i>
                  </div>
                  <div className="iconbox-desc">
                    <h6 className="mb-10">Open houses</h6>
                    <p>Mon – Fri : 8:30 – 18:00 <br />Sat – Sun : 9:00 – 17:00</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="single-contact-info-item">
                  <div class="icon">
                    <i class="icon-telephone"></i>
                  </div>
                  <div class="iconbox-desc">
                    <h6 class="mb-10">Phone number</h6>
                    <p>(504) 586 256 23 <br /> (306) 574 326 56</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="single-contact-info-item">
                  <div class="icon">
                    <i class="icon-envelope-open"></i>
                  </div>
                  <div class="iconbox-desc">
                    <h6 class="mb-10">Our email</h6>
                    <p>office@helentheme.com <br />Info@helentheme.com</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="single-contact-info-item">
                  <div class="icon">
                    <i class="icon-map-marker"></i>
                  </div>
                  <div class="iconbox-desc">
                    <h6 class="mb-10">Our location</h6>
                    <p>1102 Helen Estates, Guys <br />Store, San Diego, USA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-page-warpper section-space--pb_120">
          <div className="container">
            <div className="row">
              <div class="col-lg-12">
                <div class="border-top">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="contact-form-wrap  section-space--mt_60">
                        <h5 class="mb-10">Get in touch</h5>
                        <p>Write us a letter !</p>
                        <div id="contact-form" class="mt-30">
                          <div class="contact-form">
                            <div class="contact-input">
                              <div class="contact-inner">
                                <input name="con_name" type="text" placeholder="Name *" />
                              </div>
                              <div class="contact-inner">
                                <input name="con_email" type="email" placeholder="Email *" />
                              </div>
                            </div>
                            <div class="contact-inner">
                              <input name="con_subject" type="text" placeholder="Subject *" />
                            </div>
                            <div class="contact-inner contact-message">
                              {/*<textarea name="con_message" placeholder="Please describe what you need." style="margin-top: 0px; margin-bottom: 0px; height: 132px;"></textarea>*/}
                            </div>
                            <div class="submit-btn mt-20">
                              <button class="btn btn--black btn--md" type="submit">Submit</button>
                              <p class="form-messege"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 ml-auto">
                      <div class="conatact-info-text section-space--mt_60">
                        <h5 class="mb-10">Our address</h5>
                        <p>Duis aute irure dolor in reprehenderit ioluptate velit esse cillum dolore pariatur.</p>
                        <p class="mt-30">1102 Helen Estates, Guys Store, San Diego, USA. <br />(693) 650-2389 <br />office@helentheme.com</p>
                        <div class="product_socials mt-30">
                          <span class="label">FOLLOW US:</span>
                          <ul class="helendo-social-share socials-inline">
                            <li>
                              <Link class="share-twitter helendo-twitter">
                                <TwitterIcon/>
                              </Link>
                            </li>
                            <li>
                              <Link class="share-facebook helendo-facebook">
                                <FacebookIcon/>
                              </Link>
                            </li>
                            <li>
                              <Link class="share-google-plus helendo-instagram">
                                <InstagramIcon/>
                              </Link>
                            </li>
                            <li>
                              <Link class="share-pinterest helendo-pinterest">
                                <PinterestIcon/>
                              </Link>
                            </li>
                            <li>
                              <Link class="share-linkedin helendo-linkedin">
                                <LinkedInIcon/>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ]
}

export default Contact;