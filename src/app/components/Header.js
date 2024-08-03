export default function Header() {
  return (
    <>
      <div className="full-width-header rs-header-layout2">
        <header id="rs-header" className="rs-header">
          <div className="rs-header-topber">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rs-flex-box">
                    <div className="rs-header-topber-contact">
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V20.0116C16.9463 20.1039 20 20.7351 20 21.5C20 22.3284 16.4183 23 12 23C7.58172 23 4 22.3284 4 21.5C4 20.7351 7.05369 20.1039 11 20.0116V17.9381ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"
                              fill="#000"
                            ></path>
                          </svg>
                          <span>19 Broklyn Golden Street. New York</span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                          >
                            <path
                              d="M16 12.3687C15.9987 12.5597 15.9223 12.7425 15.7873 12.8777C15.6523 13.0128 15.4695 13.0894 15.2785 13.0909H2.176C1.98459 13.0907 1.80109 13.0145 1.66581 12.8791C1.53053 12.7437 1.45455 12.5601 1.45455 12.3687V11.6364H14.5455V3.12727L8.72727 8.36364L1.45455 1.81818V0.727273C1.45455 0.534388 1.53117 0.349403 1.66756 0.213013C1.80395 0.0766231 1.98893 0 2.18182 0H15.2727C15.4656 0 15.6506 0.0766231 15.787 0.213013C15.9234 0.349403 16 0.534388 16 0.727273V12.3687ZM3.22473 1.45455L8.72727 6.40727L14.2298 1.45455H3.22473ZM0 8.72727H5.81818V10.1818H0V8.72727ZM0 5.09091H3.63636V6.54545H0V5.09091Z"
                              fill="#1A73E9"
                            ></path>
                          </svg>
                          <span>
                            Email:
                            <a href="mailto:info@example.com">
                              info@example.com
                            </a>
                          </span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM8.8 8H12V9.6H7.2V4H8.8V8Z"
                              fill="#1A73E9"
                            ></path>
                          </svg>
                          <span>Mon-Sat: 9.00am To 7.00pm </span>
                        </li>
                      </ul>
                    </div>
                    <div className="rs-header-topber-social">
                      <span>Follow Us :</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ri-twitter-x-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-area menu-sticky">
            <div className="container">
              <div className="rs-menu-area">
                <div className="logo-area">
                  <a href="index.html">
                    <img src="assets/images/techzen_logo_home_2.png" alt="" />
                  </a>
                  <a href="index.html">
                    <img src="assets/images/techzen_logo_home_2.png" alt="" />
                  </a>
                </div>
                <div className="rs-header-rightside">
                  <div className="main-menu hidden-md">
                    <ul className="nav-menu">
                      <li className="has-clid relative">
                        <a href="index.html" className="active">
                          <cite className="rs_item_wrap">
                            Home
                            <span className="menu-item-description" title="06">
                              06
                            </span>
                          </cite>
                        </a>
                        <ul className="sub-menu">
                          <li className="has-clid">
                            <a className="active" href="index.html">
                              Multipage <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a className="active" href="index.html">
                                  Home 01
                                </a>
                              </li>
                              <li>
                                <a href="index-2.html">Home 02</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home 03</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-clid">
                            <a href="onepage.html">
                              Onepage <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="onepage.html">Onepage 01</a>
                              </li>
                              <li>
                                <a href="onepage-2.html">Onepage 02</a>
                              </li>
                              <li>
                                <a href="onepage-3.html">Onepage 03</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="has-clid relative">
                        <a href="service-1.html">
                          <cite className="rs_item_wrap">
                            Services
                            <span className="menu-item-description" title="05">
                              05
                            </span>
                          </cite>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service-1.html">Service Style 01</a>
                          </li>
                          <li>
                            <a href="service-2.html">Service Style 02</a>
                          </li>
                          <li className="has-clid">
                            <a href="service-details.html">
                              Service Details{" "}
                              <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="service-details.html">
                                  Service Details Style 01
                                </a>
                              </li>
                              <li>
                                <a href="service-details-2.html">
                                  Service Details Style 02
                                </a>
                              </li>
                              <li>
                                <a href="service-details-3.html">
                                  Service Details Style 03
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="has-clid relative">
                        <a href="#">
                          <cite className="rs_item_wrap">
                            Pages
                            <span className="menu-item-description" title="12">
                              12
                            </span>
                          </cite>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="project.html">Project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="appointment.html">Appointment</a>
                          </li>
                          <li className="has-clid">
                            <a href="shop.html">
                              Shop <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Product</a>
                              </li>
                              <li>
                                <a href="product-single.html">Product Single</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="has-clid relative">
                        <a href="blog-standard.html">
                          <cite className="rs_item_wrap">
                            Blog
                            <span className="menu-item-description" title="02">
                              02
                            </span>
                          </cite>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-standard.html">Blog Standard </a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div className="rs-search-box">
                    <div className="search_icons">
                      <i className="ri-search-line"></i>
                      <i className="ri-close-line"></i>
                      <div className="sticky_form">
                        <form
                          role="search"
                          className="bs-search search-form"
                          method="get"
                        >
                          <div className="search-wrap">
                            <label className="screen-reader-text active">
                              Search for:
                            </label>
                            <input
                              type="search"
                              placeholder="Searching..."
                              name="s"
                              className="search-input"
                              defaultValue="search..."
                            />
                            <button type="submit" value="Search">
                              <i className="ri-search-line"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="header-btn">
                    <a className="main-btn" href="contact.html">
                      Get a Quote <i className="ri-arrow-right-fill"></i>
                    </a>
                  </div>
                  <div className="canvasmenu-trigger view-md">
                    <i className="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="offcanvas-menu offcanvas-menu-2">
        <div className="menu-canvas-close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="offcanvas-menu-inner">
          <div className="offc-logo mb-40">
            <a href="index.html">
              <img src="assets/images/logo_home_4.png" alt="Logo" />
            </a>
          </div>
          <ul className="nav-menu">
            <li className="has-clid relative">
              <a href="index.html">Home</a>
              <ul className="sub-menu">
                <li className="has-clid">
                  <a href="index.html">Multipage</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 01</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 02</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 03</a>
                    </li>
                  </ul>
                </li>
                <li className="has-clid">
                  <a href="onepage.html">Onepage</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="onepage.html">Onepage 01</a>
                    </li>
                    <li>
                      <a href="onepage-2.html">Onepage 02</a>
                    </li>
                    <li>
                      <a href="onepage-3.html">Onepage 03</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li className="has-clid relative">
              <a href="service-1.html">Services</a>
              <ul className="sub-menu">
                <li>
                  <a href="service-1.html">Service Style 01</a>
                </li>
                <li>
                  <a href="service-2.html">Service Style 02</a>
                </li>
                <li className="has-clid">
                  <a href="service-details.html">Service Details</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service-details.html">
                        Service Details Style 01
                      </a>
                    </li>
                    <li>
                      <a href="service-details-2.html">
                        Service Details Style 02
                      </a>
                    </li>
                    <li>
                      <a href="service-details-3.html">
                        Service Details Style 03
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-clid relative">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="project.html">Project</a>
                </li>
                <li>
                  <a href="project-details.html">Project Details</a>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="team-details.html">Team Details</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="faq.html">Faq</a>
                </li>
                <li>
                  <a href="appointment.html">Appointment</a>
                </li>
                <li className="has-clid">
                  <a href="shop.html">Shop</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop.html">Product</a>
                    </li>
                    <li>
                      <a href="product-single.html">Product Single</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-clid relative">
              <a href="blog-standard.html">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog-standard.html">Blog Standard</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div id="pre-load">
        <div id="loader" className="loader">
          <div className="loader-container">
            <div className="loader-icon">
              <img src="assets/images/favicon.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
