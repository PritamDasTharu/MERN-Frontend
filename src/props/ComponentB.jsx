import React from "react";
import ComponentC from "./ComponentC";

// const ComponentB = ({ name, age }) => {
//   return (
//     <div>
//       ComponentB
//       <div>Name from B: {name}</div>
//       <div>Age from B: {age}</div>
//       <ComponentC name={name} age={age} />
//     </div>
//   );
// };

const ComponentB = () => {
  return (
    <div>
      ComponentB
      <ComponentC />
    </div>
  );
};

export default ComponentB;
