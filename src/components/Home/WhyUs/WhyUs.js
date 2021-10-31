import {
  faPhoneVolume,
  faUser,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhyUs.css";
const WhyUs = () => {
  const user = <FontAwesomeIcon icon={faUser} />;
  const tour = <FontAwesomeIcon icon={faWalking} />;
  const support = <FontAwesomeIcon icon={faPhoneVolume} />;
  return (
    <Container className="mt-5">
      <h1>
        WHY <span style={{ color: "#47a0ff" }}>US?</span>
      </h1>
      <Row className="w-100">
        <Col>
          <Card className="card-data mt-4 reviews mx-auto">
            <Card.Body>
              <h3>
                <span className="fw-bold" style={{ color: "#47a0ff" }}>
                  5000+
                </span>
                <br />
                Customers
                <span className="text-primary ms-3 icons">{user}</span>
              </h3>
              <p className="fw-bolder fs-5 mt-4 info">
                More than 5000 plus customers enjoyed our services. Most of them
                are happy with out offerings. Get your tour soon.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-data mt-4 reviews mx-auto">
            <Card.Body>
              <h3>
                <span className="fw-bold" style={{ color: "#47a0ff" }}>
                  50+
                </span>
                <br />
                Tours
                <span className="text-primary ms-4 icons">{tour}</span>
              </h3>
              <p className="fw-bolder fs-5 mt-4 info">
                More than 50 plus tours enjoyed our customers. All of our
                clients and stakeholders are happy. All focus on the
                improvements.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-data mt-4 reviews mx-auto">
            <Card.Body>
              <h3>
                <span className="fw-bold me-1" style={{ color: "#47a0ff" }}>
                  24/7
                </span>
                <br />
                Customer Support
                <span className="text-primary icons ms-3">{support}</span>
              </h3>
              <p className="fw-bolder fs-5 mt-4 info">
                Always open our customer support session. Giving the best
                service and support is our main motto. Just Call Now.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
