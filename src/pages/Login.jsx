import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9000/user/login`, form)
      .then((res) => {
        toast.info(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("role", res.data?.user?.role);
        if (res.data.user?.role == "1") {
          navigate("/category/showcategory");
        } else if (res.data.user?.role == "0") {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.data);
      });
  };

  return (
    <>
      <ToastContainer />
      <main className="form-signin w-50 m-auto ">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">
            Login
          </h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
            <Link to="/forgetpassword">
              <button className="btn btn-primary float-end">
                Forget Password
              </button>
            </Link>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="d-flex justify-content-center">
            Dont have an account? <Link to="/register">Sign up</Link>
          </p>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </main>
    </>
  );
};

export default Login;
