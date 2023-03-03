import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";

const OurStore = () => {
  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title=" Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablility</h5>
                  <div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          value="checkedValue"
                        />
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          value="checkedValue"
                        />
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>

                  <div className="d-flex flex-wrap">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>

                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id="color-1"
                        value="checkedValue"
                      />
                      S (2)
                    </label>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id="color-12"
                        value="checkedValue"
                      />
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Vivo
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src={require("../../Public/images/watch.jpg")}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack mutli colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffc700"
                      />
                      <b>300 PKR</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src={require("../../Public/images/watch.jpg")}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack mutli colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffc700"
                      />
                      <b>300 PKR</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;