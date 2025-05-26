import React, { useEffect, useState } from "react";

const UseState2 = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hello! Welcome to MERN Training");
    console.log(`Counter = ${counter}`);
  }, [counter]);
  return (
    <>
      <h3>{`Counter = ${counter}`}</h3>
      {counter < 10 ? (
        <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
      ) : (
        <button onClick={() => setCounter(counter - 1)}>Decrease Count</button>
      )}
    </>
  );
};

export default UseState2;
