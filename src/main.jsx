import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRoutes from "./MyRoutes.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MyRoutes />
  // </StrictMode>
);
