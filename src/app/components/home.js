import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <h1>Topbar1</h1>
          </div>
          <div className="topbar-inner">
            <h1>Topbar2</h1>
          </div>
        </div>
      </section>
      <section className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header-logo">
              <Image src="next.svg" height={100} width={100} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
