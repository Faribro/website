import React from "react";
import "../src/App.css";
function Home() {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav bg">
          <div className="row h-50">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow your bussiness with<strong>Navbar</strong>
                </h1>
                <h2 className="my-3">
                  we have team of tailent developer making websites
                </h2>
                <div className="mt-3-3">
                  <a href="/" className="btn-get-started">
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

export default Home;
