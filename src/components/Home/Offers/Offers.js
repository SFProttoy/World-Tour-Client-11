import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Offer from "../Offer/Offer";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div>
      <h1 className="mt-4">
        Our
        <span className="services"> Test Services</span>
        <Row xs={1} md={3} className="container g-4 mx-auto">
          {offers.map((offer) => (
            <Offer key={offer._id} offer={offer}></Offer>
          ))}
        </Row>
      </h1>
    </div>
  );
};

export default Offers;