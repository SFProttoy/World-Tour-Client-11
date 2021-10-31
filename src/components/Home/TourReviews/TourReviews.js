import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TourReviews.css";
const TourReviews = () => {
  return (
    <Container className="mt-5">
      <h1>
        Tour <span style={{ color: "#47a0ff" }}>Reviews</span>
      </h1>
      <Row className="mt-5">
        <Col className="d-flex me-5">
          <div>
            <img
              className="image me-5"
              src="https://i.ibb.co/vLZp450/man1.jpg"
              alt=""
              variant="top"
            />
            <h5 className="mt-4 me-5">Adam Smith</h5>
          </div>
          <div>
            <h3>Bali Tour</h3>
            <p className="fs-5 info">
              The sightseeing and activities were better than we even thought! I
              still can’t believe we did so much in such a short time, but we
              did not feel stressed. We really loved the tour and would do it
              all over again in a minute! Thanks.
            </p>
          </div>
        </Col>
        <Col className="d-flex">
          <div>
            <img
              className="image me-5"
              src="https://i.ibb.co/drMHzxL/man2.jpg"
              alt=""
              variant="top"
            />
            <h5 className="mt-4 me-5">Allen</h5>
          </div>
          <div>
            <h3 className="">Eiffel Tower Tour</h3>
            <p className="fs-5 info">
              I had a wonderful time during the trip. The guide was informative,
              friendly and attentive to our entire group! I definitely plan to
              be a returning customer and recommend this to my friends and
              family!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TourReviews;
