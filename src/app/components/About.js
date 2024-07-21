import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="about-features-content">
            <div className="about-content-inner">
              <h2 className="about-content-heading">Campaign Tools</h2>
              <p className="about-para">
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret suitable.
              </p>
            </div>
            <div className="about-content-inner">
              <h2 className="about-content-heading">Campaign Tools</h2>
              <p className="about-para">
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret suitable.
              </p>
            </div>
            <div className="about-content-inner">
              <h2 className="about-content-heading">Campaign Tools</h2>
              <p className="about-para">
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret suitable.
              </p>
            </div>
          </div>
          <div className="about-main-content">
            <div className="about-main-content-first-row-item">
              <div className="about-main-content-inner">
                <p className="about-main-content-inner-sub-heading">
                  Why Choose Us
                </p>
                <p className="about-main-content-inner-heading">
                  Were on a mission
                  <br />
                  to your business grow
                </p>
              </div>
              <div className="about-main-content-first-row-image">
                <Image
                  src="/images/circle-rishi-creation.png"
                  height={150}
                  width={150}
                />
              </div>
            </div>
            <div className="about-main-content-second-row-item">
              <div className="second-row-item-image">
                <Image src="/images/about-image.png" height={620} width={650} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
