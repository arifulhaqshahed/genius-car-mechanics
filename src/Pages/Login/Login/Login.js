import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login">
      <div className="login-form border border-2 my-5 text-center">
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="email"
            className="border border-2 m-2 container-fluid w-75"
            {...register("example")}
          />{" "}
          <br />
          <input
            placeholder="password"
            className="border border-2 m-2 container-fluid w-75"
            {...register("exampleRequired", { required: true })}
          />{" "}
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="m-4 btn btn-success" type="submit" value="Login" />
        </form>
        <p>
          New to Genius Car Mechanics? <Link to="/register">Register</Link>{" "}
        </p>

        <button className="btn btn-primary m-3 rounded-pill">
          SignIn with google
        </button>
        <button className="btn btn-primary m-3 rounded-pill">
          SignIn with facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
