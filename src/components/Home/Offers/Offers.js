import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Offer from "../Offer/Offer";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://dreadful-cemetery-54829.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div>
      {offers.length === 0 ? (
        <Spinner className="mt-5" animation="border" variant="dark" />
      ) : (
        <h1 className="mt-5">
          Our <span style={{ color: "#47a0ff" }}>Tour Offers</span>
          <Row xs={1} md={3} className="container g-4 mx-auto">
            {offers.map((offer) => (
              <Offer key={offer._id} offer={offer}></Offer>
            ))}
          </Row>
        </h1>
      )}
    </div>
  );
};

export default Offers;
