import React, { useState } from "react";
import ComponentA from "./ComponentA";
import { createContext } from "react";

export const nameContext = createContext();
const Props = () => {
  const [name, setName] = useState("Pritam");
  return (
    <>
      <nameContext.Provider value={name}>
        <ComponentA />
      </nameContext.Provider>
      {/* <ComponentA name="Raj" age="24" />
      <ComponentA name="Rojal" age="20" /> */}
    </>
  );
};

export default Props;
