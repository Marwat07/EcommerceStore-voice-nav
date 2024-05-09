import React, { useRef, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

import watchImg from "../../Public/images/watch.jpg";
import grImg from "../../Public/images/gr.svg";
import gr2Img from "../../Public/images/gr2.svg";
import gr3Img from "../../Public/images/gr3.svg";
import gr4Img from "../../Public/images/gr4.svg";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  
  const divRefs = useRef([]);

  function handleClick() {
    const visibleDivs = visibleElements.map((id) =>
      divRefs.current.find((ref) => ref.id === id)
    );
    const firstVisibleDiv = visibleDivs[0];
    if (firstVisibleDiv) {
      firstVisibleDiv.click(); // Trigger click event on the visible product card
    }
  }
  const handleVoiceCommand = (product) => {
    navigate(`/product/${product.id}`); // Redirect to the SingleProduct page with the selected product's ID
  };
  const handleCardClick = (productId) => {
    // onCardClick(product); // Pass the product data to the parent component
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title=" Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
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
                  <Color />
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
                    <img src={watchImg} alt="watch" className="img-fluid" />
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
                    <img src={watchImg} alt="watch" className="img-fluid" />
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
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p
                    className="mb-0 d-block"
                    style={{ width: "100px", "margin-bottom": "0" }}
                  >
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">
                      Best Selling
                    </option>
                    
                    <option value="title-ascending">Alhabetically, A-Z</option>
                    <option value="title-descending">Alhabetically, Z-A</option>
                    <option value="price-ascending">Price, Low to High</option>
                    <option value="price-descending">Price, High to Low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
          
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={gr4Img}
                      alt="grid"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={gr3Img}
                      alt="grid"
                      className="d-block img-fluid"
                    />

                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={gr2Img}
                      alt="grid"
                      className="d-block img-fluid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={grImg}
                      alt="grid"
                      className="d-block img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
              
            </div>
             
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <h3 className="section-heading">Featured Collection</h3>
        <div className="product-parent" >
          {/* product 1 div */}
          <div className="product-card-wrapper"
            ref={(element) => (divRefs.current[0] = element)}
            id={0}
            onClick={() => handleCardClick(7)}
            style={{ width: "100%" }}
          >
            <ProductCard
              productId={10}
              handleCardClick={handleCardClick}
              onVoiceCommand={handleVoiceCommand}
            />
          </div>
          {/* product 1 div */}
          <div className="product-card-wrapper"
            ref={(element1) => (divRefs.current[1] = element1)}
            id={1}
            onClick={() => handleCardClick(8)}
          >
            <ProductCard
              productId={4}
              handleCardClick={handleCardClick}
              onVoiceCommand={handleVoiceCommand}
            />
          </div>
          {/* product 1 div */}
          <div className="product-card-wrapper"
            ref={(element2) => (divRefs.current[2] = element2)}
            id={2}
            onClick={() => handleCardClick(7)}
          >
            <ProductCard
              productId={11}
              handleCardClick={handleCardClick}
              onVoiceCommand={handleVoiceCommand}
            />
          </div>
          {/* product 1 div */}
          <div className="product-card-wrapper"
            ref={(element2) => (divRefs.current[2] = element2)}
            id={2}
            onClick={() => handleCardClick(7)}
          >
            <ProductCard
              productId={12}
              handleCardClick={handleCardClick}
              onVoiceCommand={handleVoiceCommand}
            />
          </div>
          {/* product 1 div */}
          <div className="product-card-wrapper"
            ref={(element2) => (divRefs.current[2] = element2)}
            id={2}
            onClick={() => handleCardClick(7)}
          >
            <ProductCard
              productId={13}
              handleCardClick={handleCardClick}
              onVoiceCommand={handleVoiceCommand}
            />
          </div>
          {/* product 1 div */}
          <div className="product-card-wrapper"
            ref={(element3) => (divRefs.current[3] = element3)}
            id={3}
            
          >
            <ProductCard
              productId={8}
              handleCardClick={handleCardClick}
              onVoiceCommand={handleVoiceCommand}
            />
          </div>
        </div>
      </Container>
          </div>
        </div>
        
      </Container>
      
      
    </div>
    
      
  
    
  );
};

export default OurStore;
