import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import MyBooking from "../MyBooking/MyBooking";

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, []);
  return (
    <div>
      <h1>MyBookings:{myBookings.length}</h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {myBookings.map((myBooking) => (
          <MyBooking key={myBooking._id} myBooking={myBooking}></MyBooking>
        ))}
      </Row>
    </div>
  );
};

export default MyBookings;
