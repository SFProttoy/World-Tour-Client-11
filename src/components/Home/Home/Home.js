import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import TourReviews from "../TourReviews/TourReviews";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offers></Offers>
      <WhyUs></WhyUs>
      <TourReviews></TourReviews>
    </div>
  );
};

export default Home;
