import React from "react";
import ComponentB from "./ComponentB";

// const ComponentA = (props) => {
//   const { name, age } = props;
//   return (
//     <>
//       {console.log(props)}
//       <h1>Name:{name}</h1>
//       <h2>{`Age:${age}`}</h2>
//     </>
//   );
// };

// const ComponentA = ({ name, age }) => {
//   return (
//     <>
//       {/* {console.log(props)} */}
//       <h1>Name:{name}</h1>
//       <h2>{`Age:${age}`}</h2>
//       <ComponentB name={name} age={age} />
//     </>
//   );
// };

const ComponentA = () => {
  return (
    <>
      <ComponentB />
    </>
  );
};

export default ComponentA;
