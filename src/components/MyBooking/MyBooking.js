import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const MyBooking = (props) => {
  const { myBookings, setMyBookings } = props;
  const { name, img, price } = props.myBooking.OfferDetails;
  const { _id, email, status } = props.myBooking;
  // Cancel a tour

  const handleCancel = (id) => {
    const proceed = window.confirm(
      '"Are you sure you want to cancel the tour?"'
    );
    if (proceed) {
      const url = `http://localhost:5000/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your tour is cancelled.");
            const remainingBookings = myBookings.filter(
              (booking) => booking._id !== id
            );
            setMyBookings(remainingBookings);
          }
        });
    }
  };

  return (
    <div>
      <Col>
        <Card className="card-data mt-4">
          <Card.Img className="mx-auto" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <p className="fs-4 fw-bolder">Price: ${price}</p>
            <p className="fs-5 fw-bolder">Email: {email}</p>
            <Button
              className="btn btn-danger"
              onClick={() => handleCancel(_id)}
            >
              Cancel Tour
            </Button>
            <h5 className="mt-3">Order Status: {status}</h5>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default MyBooking;
