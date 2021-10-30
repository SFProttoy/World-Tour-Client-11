import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <Row xs={1} md={2} className="w-100">
        <Col>
          <div className="banner-title">
            <h1 className="title">
              GET THE BEST <br /> EVER EXPERIENCE !
            </h1>
            <p className="text-white text-center mt-4 fs-3 fw-bold">
              VISIT WORLD'S BEST PLACES
            </p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Banner;
