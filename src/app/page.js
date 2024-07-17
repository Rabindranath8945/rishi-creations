import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                    Why Choose Us
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/offer">
                    What We Offer
                  </a>
                </li>
                <li className="header-menu-list-item">
                  <a className="header-menu-list-item-link" href="/project">
                    Recent Projects
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
