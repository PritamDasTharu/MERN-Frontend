import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("Pritam");
  const [counter, setCounter] = useState(0);

  return (
    <>
      {/* {name} */}
      <h1>{`Hello! My name is ${name}`}</h1>
      <h2>Counter = {counter}</h2>
      {/* <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
      <button onClick={() => setCounter(counter - 1)} className="m-2">
        Decrease Count
      </button> */}

      {counter > 10 ? (
        <button onClick={() => setCounter(counter - 1)}>Decrease Count</button>
      ) : (
        <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
      )}
    </>
  );
};

export default UseState;
