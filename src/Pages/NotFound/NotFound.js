import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/4O4.png";

const NotFound = () => {
  return (
    <div className="App my-5">
      <img width="50%" src={notFound} alt="" />
      <br />
      <br />
      <Link to="/home">
        <button className="btn btn-primary">Go to Home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
