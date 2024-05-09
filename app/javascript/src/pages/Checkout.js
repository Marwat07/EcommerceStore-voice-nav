import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watchImg from "../../Public/images/watch.jpg";
import Container from "../components/Container";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();

  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  function updateAddress() {
    setAddress(`Street No. ${street}, ${city}, ${country}.`);
  }


  const commands = [
    {
      command: "house number *",
      callback: (hNo) => {
        setHouseNo(hNo);
      }
    },
    {
      command: "zip code *",
      callback: (zCode) => {
        setZipCode(zCode);
      }
    },
    {
      command: "street number *",
      callback: (street) => {
        setStreet(street);
        updateAddress();
      }
    },
    {
      command: "city *",
      callback: (city) => {
        setCity(city);
        updateAddress();
      }
    },
    {
      command: "country *",
      callback: (country) => {
        setCountry(country);
        updateAddress();
      }
    },
    {
      command: "address done",
      callback: () => {
        updateAddress();
      }
    },
    {
      command: "First Name *",
      callback: (fName) => {
        setNameInput(fName);
      }
    },
    {
      command: "Last Name *",
      callback: (lName) => {
        setLastNameInput(lName);
      }
    },
    {
      command: "Enter",
      callback: () => {
        navigate("/");
      }
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title=" Checkout" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Online Store</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active total-price">
                    {" "}
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact information</h4>
              <p className="user-details total">
                Vmart (vmart@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                {/* <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div> */}
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastNameInput}
                    onChange={(e) => setLastNameInput(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    placeholder="House Number"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                {/* <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Province
                    </option>
                  </select>
                </div> */}
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Zip Code"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute "
                    >
                      1
                    </span>
                    <img src={watchImg} alt="product" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">adfda</h5>
                    <p className="total-price">s / #sfasfd</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">PKR 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between alilgn-items-center">
                <p className="total">Shipping</p>
                <p className="total-price">PKR 10000</p>
              </div>
              <div className="d-flex justify-content-between alilgn-items-center">
                <p className="mb-0 total">SubTotal</p>
                <p className="mb-0 tota-price">PKR 10000</p>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between alilgn-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">PKR 10000</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
