import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./OfferDetails.css";

const OfferDetails = () => {
  const { offerId } = useParams();
  const [offerDetails, setOfferDetails] = useState([]);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://dreadful-cemetery-54829.herokuapp.com/offers/${offerId}`)
      .then((res) => res.json())
      .then((data) => setOfferDetails(data));
  });

  const { name, img, price, packages } = offerDetails;
  const onSubmit = (data) => {
    data.OfferDetails = offerDetails;
    axios
      .post("https://dreadful-cemetery-54829.herokuapp.com/bookings", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Booked");
          reset();
        }
      });
  };
  return (
    <Row
      xs={1}
      md={2}
      className="mt-5 d-flex justify-content-center align-items-center w-100"
    >
      <Col className="details">
        <img className="offer-img" src={img} alt="" />
        <h1>{name}</h1>
        <p className="mt-5 mb-4 details-para fw-bold fs-4">
          Packages: {packages}
        </p>
        <h5 className="text-dark fw-bolder">Price: ${price}</h5>
      </Col>
      <Col>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="size"
            defaultValue="pending"
            {...register("status")}
          />
          <br />
          <input
            className="size"
            defaultValue={user.displayName}
            {...register("name")}
          />
          <br />
          <input
            className="size"
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="size"
            placeholder="Address"
            defaultValue=""
            {...register("address", { required: true })}
          />
          <br />
          <input
            className="size"
            placeholder="City"
            defaultValue=""
            {...register("city", { required: true })}
          />
          <br />
          <input
            className="size"
            placeholder="phone number"
            defaultValue=""
            {...register("phone", { required: true })}
          />
          <br />

          <input className="order-btn" type="submit" />
        </form>
      </Col>
    </Row>
  );
};

export default OfferDetails;
