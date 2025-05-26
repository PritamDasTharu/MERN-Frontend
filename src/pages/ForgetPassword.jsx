import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9000/user/forgetpassword`, { email })
      .then((res) => {
        res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Token has been sent to your email");
    // navigate("/verify");

    console.log("Token has been sent to your email");
  };
  const [email, setEmail] = useState("");
  return (
    <>
      <main className="form-signin w-50 m-auto ">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">
            Forget Password?
          </h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Reset your password
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

export default ForgetPassword;
