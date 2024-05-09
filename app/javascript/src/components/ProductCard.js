import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import wishImg from "../../Public/images/wish.svg";
import addcartImg from "../../Public/images/add-cart.svg";
import viewImg from "../../Public/images/view.svg";
import prodcompareImg from "../../Public/images/prodcompare.svg";

const ProductCard = ({ productId, onCardClick, onVoiceCommand }) => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const response = await fetch(
            `http://localhost:3000/api/v1/products/${productId}`
          );
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleCardClick = () => {
    if (product) {
      onCardClick(product); // Pass the product data to the parent component
      navigate(`/product/${product.id}`); // Redirect to the SingleProduct page with the selected product's ID
    }
  };

   const handleVoiceCommand = () => {
     if (product) {
       onVoiceCommand(product); // Pass the product data to the parent component when voice command is triggered
       navigate(`/product/${product.id}`); // Redirect to the SingleProduct page with the selected product's ID
     }
   };

  if (!product) {
    return null; // Render a loading state or placeholder if product data is not available yet
  }

  const imgPath = product.image_path;

  return (
    <div className={`col-3 `} style={{width: "90%" }}>
      <Link
        to={`/product/${product.id}`}
        className="product-card position-relative"
        onClick={handleCardClick}
        onVoiceCommand={handleVoiceCommand}
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wishImg} alt="wish" />
          </button>
        </div>
        <div className="product-image" style={{display:'flex',justifyContent:'center'}}>
          <img
            src={product.image_path}
            alt="product image"
            className="img-fluid"
          />
          <img
            src={product.image_path2}
            alt="product image"
            className="img-fluid"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">{product.brand}</h6>
          <h5 className="product-title">{product.title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffc700"
          ></ReactStars>
          <p className="d-block">{product.description.length > 20 ? `${product.description.substring(0,20)}...`: product.description}</p>
          <p className="price">{product.price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={addcartImg} alt="add-cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={viewImg} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={prodcompareImg} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
