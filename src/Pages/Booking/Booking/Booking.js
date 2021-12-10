import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div className="App">
      <h1>This is Booking {serviceId} </h1>
    </div>
  );
};

export default Booking;
