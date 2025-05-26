// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <>
//       <main className="form-signin w-50 m-auto p-5 ">
//         <form>
//           <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">
//             Sign In
//           </h1>

//           <div className="form-floating mb-3">
//             <input
//               type="text"
//               className="form-control"
//               id="floatingUserName"
//               placeholder="John Doe"
//             />
//             <label htmlFor="floatingInput">UserName</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input
//               type="email"
//               className="form-control"
//               id="floatingInput"
//               placeholder="name@example.com"
//             />
//             <label htmlFor="floatingInput">Email address</label>
//           </div>

//           <div className="form-floating mb-3">
//             <input
//               type="country"
//               className="form-control"
//               id="floatingCountry"
//               placeholder="Choose country"
//             />
//             <label htmlFor="floatingCountry">Country</label>
//           </div>

//           <div className="form-floating mb-3">
//             <input
//               type="number"
//               className="form-control"
//               id="floatingAge"
//               placeholder="Age"
//             />
//             <label htmlFor="floatingAge">Age</label>
//           </div>

//           <div className="form-floating mb-3">
//             <input
//               type="password"
//               className="form-control"
//               id="floatingPassword"
//               placeholder="Password"
//             />
//             <label htmlFor="floatingPassword">Password</label>
//           </div>

//           <div className="form-floating mb-3">
//             <input
//               type="password"
//               className="form-control"
//               id="floatingRetypePassword"
//               placeholder="Re-type Password"
//             />
//             <label htmlFor="floatingPassword">Re-type Password</label>
//           </div>
//           <button className="btn btn-primary w-100 py-2 mb-3" type="submit">
//             Sign in
//           </button>
//           <p>
//             Already have an account?
//             <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </main>
//     </>
//   );
// };

// export default Register;

import React, { useState } from "react";
// import img4 from "../assets/d.jpg";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(form);
    axios
      .post("http://localhost:9000/user/register", form)
      .then(
        //console.log(form),
        navigate("/emailverify")
      )
      .catch((err) => alert(err));
  };

  return (
    <div>
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleSubmit}>
          {/* <img src={img4} className="mb-4" alt="" width="72" height="57" /> */}
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email </label>
          </div>

          <div className="form-floating">
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
            Already Have an Account? Click <Link to="/login">here</Link>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Register
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
