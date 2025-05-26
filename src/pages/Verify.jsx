import axios from "axios";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Verify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(token);
    axios
      .get(`http://localhost:7000/user/verify/${token}`)
      .then((res) => {
        setMessage(res?.data?.message);
      })
      .catch((err) => setMessage(err?.response?.data?.message));
  }, []);
  return <div>Verify</div>;
};

export default Verify;
