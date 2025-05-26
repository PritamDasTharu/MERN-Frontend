import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      {user.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <div>{data.username}</div>
            <div>{data.email}</div>
            <div>{data.address.city}</div>
          </div>
        );
      })}
    </>
  );
};

export default Data;
