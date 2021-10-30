import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);

  useState(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

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
            const remainingBookings = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remainingBookings);
          }
        });
    }
  };

  return (
    <div>
      <h1>Total Bookings: {allBookings.length}</h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {allBookings.map((allBooking) => (
          <div key={allBooking._id}>
            <Col>
              <Card className="card-data mt-4">
                <Card.Img
                  className="mx-auto"
                  variant="top"
                  src={allBooking.OfferDetails.img}
                />
                <Card.Body>
                  <Card.Title>{allBooking.OfferDetails.name}</Card.Title>
                  <p className="fs-4 fw-bolder info">Name: {allBooking.name}</p>
                  <p className="fs-5 fw-bolder info">
                    Email: {allBooking.email}
                  </p>

                  <Button
                    className="btn btn-danger"
                    onClick={() => handleCancel(allBooking._id)}
                  >
                    Cancel Tour
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default AllBookings;
