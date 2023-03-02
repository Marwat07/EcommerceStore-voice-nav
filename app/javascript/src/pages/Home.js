import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={require("../../Public/images/main-banner-1.jpg")}
                  alt="main banner"
                  className="img-fluid round-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From PKR999.00 or PKR42.62/month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-7 align-items-center">
                <div className="small-banner position-relative fix-size">
                  <img
                    src={require("../../Public/images/catbanner-01.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src={require("../../Public/images/catbanner-02.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={require("../../Public/images/catbanner-03.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={require("../../Public/images/catbanner-04.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src={require("../../Public/images/service.png")} alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over PKR50 </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={require("../../Public/images/service-02.png")} alt="" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={require("../../Public/images/service-03.png")} alt="" />
                  <div>
                    <h6>Support 25/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={require("../../Public/images/service-04.png")} alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={require("../../Public/images/service-05.png")} alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
