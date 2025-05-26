import React, { useContext } from "react";
import { nameContext } from "./Props";

// const ComponentC = ({ name, age }) => {
//   return (
//     <div>
//       ComponentC
//       <div>Name from C: {name}</div>
//       <div>Age from C: {age} </div>
//     </div>
//   );
// };
const ComponentC = () => {
  const value = useContext(nameContext);
  return <div>ComponentC {value}</div>;
};  

export default ComponentC;
