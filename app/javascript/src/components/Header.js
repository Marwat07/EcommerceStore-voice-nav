import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImg from "../../Public/images/compare.svg";
import wishlistImg from "../../Public/images/wishlist.svg";
import userImg from "../../Public/images/user.svg";
import cartImg from "../../Public/images/cart.svg";
import menuImg from "../../Public/images/menu.svg";
import { useNavigate } from "react-router-dom";

import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Header = () => {
  // send search query to the backend
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (search) => {
    try {
      const command = "search for ";
      const query = transcript.replace(command, "").trim().replace(/\s/g, "");
      console.log("Voice", query);
      const response = await fetch("/products/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      });
      resetTranscript("");
      const data = await response.json();
      setSearchResults(data);
      console.log(data);

      navigate("/searchproduct", { state: { searchResults: data } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };  

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Code for button press control starts here:

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey) {
        SpeechRecognition.startListening({ continuous: true });
      }
      if (event.key === "Escape") {
        SpeechRecognition.stopListening();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //Code for button press control ends here

  const commands = [
    {
      command: "go to home",
      callback: ({ goHome }) => navigate("/"),
    },

    {
      command: "go to about",
      callback: ({ goFav }) => navigate("/about"),
    },
    {
      command: "go to contact",
      callback: ({ goNew }) => navigate("/contact"),
    },
    {
      command: "go to our store",
      callback: ({ goHome }) => navigate("/product"),
    },
    {
      command: "go to cart",
      callback: ({ goFav }) => navigate("/cart"),
    },
    {
      command: "go to blogs",
      callback: ({ goNew }) => navigate("/blogs"),
    },
    {
      command: "compare products",
      callback: ({ goHome }) => navigate("/compare-product"),
    },
    {
      command: "go to wish list",
      callback: ({ goFav }) => navigate("/wishlist"),
    },
    {
      command: "scroll down",
      callback: () => {
        window.scrollTo({
          top: window.pageYOffset + 500,
          behavior: "smooth", // This makes the scrolling smooth instead of instant
        });
      },
    },
    {
      command: "scroll up",
      callback: () => {
        window.scrollTo({
          top: window.pageYOffset - 500,
          behavior: "smooth", // This makes the scrolling smooth instead of instant
        });
      },
    },
    {
      command: "scroll to the top",
      callback: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      command: "scroll to the bottom",
      callback: () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      },
    },
    {
      command: "scroll to the bottom",
      callback: () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      },
    },
    {
      command: "scroll down slightly",
      callback: () => {
        window.scrollTo({
          top: window.pageYOffset + 200,
          behavior: "smooth", // This makes the scrolling smooth instead of instant
        });
      },
    },
    {
      command: "scroll up slightly",
      callback: () => {
        window.scrollTo({
          top: window.pageYOffset - 200,
          behavior: "smooth", // This makes the scrolling smooth instead of instant
        });
      },
    },
    {
      command: "Search For *",
      callback: ({ search }) => handleSearch(search),
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  
  return (
    <>
      

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white ">&#127897;<>VoiceMart</></Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  value={searchQuery}
                  onChange={handleChange}
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <button
                  onClick={handleSearch}
                  className="input-group-text p-3"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </button>
                {searchResults.map((product) => (
                  <Link to={`/searchproduct/${product.id}`} key={product.id}>
                    <div>
                      <h3>{product.name}</h3>
                      {/* Display other relevant product information */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links gap-1 d-flex align-items-center justify-content-between">
                <div>
                <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="user" />
                    <p className="mb-0">
                      Log in
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="./wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlistImg} alt="wishlist" />
                    <p className="mb-0">
                      Favourite 
                    </p>
                  </Link>
                </div>
                <div>
                <Link
                    to="/"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="user" />
                    <p className="mb-0">Logout</p>
                  </Link>
                  {/* <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="user" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link> */}
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cartImg} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                     
                    </div>
                  </Link>
                </div>
                <div>
                  {/* <Link
                    to="/"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="user" />
                    <p className="mb-0">Logout</p>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="menu-bottom d-flex align-items-center -0 gap-15">
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-1 d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="d-inline-block">SHOP CATEGORIES</span>
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-white" to="">Mobile Phones</Link></li>
                  <li><Link className="dropdown-item text-white" to="">IPads</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Smart Watches</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Headphones</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Other Accessories</Link></li>
                </ul>
              </div>
            </div>
            <div className="menu-links">
              <div className="d-flex align-items-center gap-15">
                <NavLink 
                  to="/" 
                  style={{ textDecoration: 'none' }} 
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/product"
                  style={{ textDecoration: 'none' }} 
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  Our Store
                </NavLink>
                <NavLink 
                  to="/about" 
                  style={{ textDecoration: 'none' }} 
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  About us
                </NavLink>
                <NavLink 
                  to="/contact" 
                  style={{ textDecoration: 'none' }} 
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</header>


    </>
  );
};

export default Header;
