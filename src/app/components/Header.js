import Image from "next/image";

export default function Header() {
  return (
    <>
      <section id="home" className="header">
        <div className="container-fluid">
          <div className="header-inner">
            <div className="header-logo">
              <Image src="next.svg" height={100} width={100} />
            </div>
            <div className="header-menu">
              <ul className="header-menu-list">
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="#about">
                    About
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="#offer">
                    Offer
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="#template">
                    Templates
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-sub-menu">
              <ul className="header-menu-list">
                <li className="header-menu-list-item">
                  <a
                    className="header-menu-list-btn header-menu-primary-btn"
                    href="/register"
                  >
                    Register
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a
                    className="header-menu-list-btn header-menu-outline-btn"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="banner">
            <div className="banner-inner">
              <div className="banner-inner-content">
                <h1 className="banner-first-heading">Discover the world</h1>
                <h2 className="banner-second-heading">
                  with
                  <span className="banner-second-heading-span">
                    digital marketplace
                  </span>
                </h2>
                <div className="banner-inner-content-desc">
                  <p>
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    <br />
                    endeavor. In on my jointure horrible margaret suitable.
                  </p>
                </div>
                <div className="banner-inner-content-desc-btn">
                  <a
                    className="banner-inner-content-desc-btn-item"
                    href="#template"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
