import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  return (
    <div className="service pb-3">
      <img className="rounded-top " height="250px" src={img} alt="" />
      <h3 className="p-3">{name}</h3>
      <h5 className="px-3">Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link className="px-3" to={`/booking/${id}`}>
        <button className="btn btn-secondary">Book {name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;
