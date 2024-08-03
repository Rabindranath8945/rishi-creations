import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section className="rs-banner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="rs-banner-2__content">
                <Image
                  src="/assets/images/banner/image-year.png"
                  height={350}
                  width={500}
                  className="wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                  alt="About Image"
                />
                <div
                  className="rs-sub-heading wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <Image
                    src="/assets/images/heart-pulse-rate-orange-2.svg"
                    height={100}
                    width={100}
                    alt="Heart Pulse"
                  />
                  <span> Welcome To Techzen </span>
                  <Image
                    src="/assets/images/heart-pulse-rate-orange-2.svg"
                    height={100}
                    width={100}
                    alt="Heart Pulse"
                  />
                </div>
                <h1
                  className="title wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.8s"
                >
                  Powerful Digital <span>Solutions</span>
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.2s"
                >
                  Capitalize on low hanging fruit to identify a ballpark value
                  added heading towards a streamlined cloud solution.
                </p>
                <a
                  className="main-btn wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.6s"
                  href="about.html"
                >
                  Discover More <i className="ri-arrow-right-fill"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}
