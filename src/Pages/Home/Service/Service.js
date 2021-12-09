import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img className="rounded-top img-fluid" height="250px" src={img} alt="" />
      <h3 className="p-3">{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
    </div>
  );
};

export default Service;
