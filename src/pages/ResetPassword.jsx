import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9000/user/forgetpassword/${token}`, { password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error resetting the password!", error);
      });
    alert("Password reset successfully");
  };
  return (
    <>
      <main className="form-signin w-50 m-auto ">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">
            Reset Password
          </h1>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              name="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter your new password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Reset your password
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </main>
    </>
  );
};

export default ResetPassword;
