import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Offer.css";
const Offer = (props) => {
  //   console.log(props);
  const { _id, name, description, img } = props.offer;
  return (
    <div>
      <Col>
        <Card className="card-data mt-4">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p className="fs-6 info">{description}</p>

            <Link to={`/offerDetails/${_id}`}>
              <Button className="btn btn-dark button">Book now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Offer;
