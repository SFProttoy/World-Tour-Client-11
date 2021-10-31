import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./AllBookings.css";
const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [status, setStatus] = useState();
  useEffect(() => {
    fetch("https://dreadful-cemetery-54829.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [status]);

  // Cancel a tour

  const handleCancel = (id) => {
    const proceed = window.confirm(
      '"Are you sure you want to cancel the tour?"'
    );
    if (proceed) {
      const url = `https://dreadful-cemetery-54829.herokuapp.com/bookings/${id}`;
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

  // Update status

  const handleUpdateStatus = (id, allBooking) => {
    allBooking.status = "approved";
    const url = `https://dreadful-cemetery-54829.herokuapp.com/bookings/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Your pending booking has been updated.");
          setStatus(true);
        }
      });
  };

  return (
    <div>
      <h1>Total Bookings: {allBookings.length}</h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {allBookings.map((allBooking) => (
          <div key={allBooking._id}>
            <Col>
              <Card className="allBooking-card-data mt-4">
                <Card.Img
                  className="mx-auto"
                  variant="top"
                  src={allBooking.OfferDetails.img}
                />
                <Card.Body>
                  <Card.Title>{allBooking.OfferDetails.name}</Card.Title>
                  <p className="fs-4 fw-bolder">Name: {allBooking.name}</p>
                  <p className="fs-4 fw-bolder">
                    Price: ${allBooking.OfferDetails.price}
                  </p>
                  <p className="fs-5 fw-bolder">Email: {allBooking.email}</p>
                  <h5 className="mt-3 mb-3 fw-bolder">
                    Order Status: {allBooking.status}
                  </h5>
                  <Button
                    className="btn btn-danger"
                    onClick={() => handleCancel(allBooking._id)}
                  >
                    Cancel Tour
                  </Button>
                  <br />
                  <Button
                    className="btn btn-success mt-4"
                    onClick={() =>
                      handleUpdateStatus(allBooking._id, allBooking)
                    }
                  >
                    Approve
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
