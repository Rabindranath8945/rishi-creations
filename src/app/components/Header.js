import Image from "next/image";
// import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="container-fluid">
          <div className="header-inner">
            <div className="header-logo">
              <Image src="next.svg" height={100} width={100} />
            </div>
            <div className="header-menu">
              <ul className="header-menu-list">
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/about">
                    About
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/offer">
                    Offer
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/project">
                    Pricing
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/project">
                    Templates
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
