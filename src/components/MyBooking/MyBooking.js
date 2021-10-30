import React from "react";
import { Card, Col } from "react-bootstrap";

const MyBooking = (props) => {
  const { _id, name, img } = props.myBooking.OfferDetails;
   // Cancel a tour

   
    
  };
  return (
    <div>
      <Col>
        <Card className="card-data mt-4">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p className="fs-4 fw-bolder info">Name: {props.myBooking.name}</p>
            <p className="fs-5 fw-bolder info">
              Email: {props.myBooking.email}
            </p>

            
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MyBooking;
