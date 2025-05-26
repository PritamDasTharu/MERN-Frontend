import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PritamDas from "./PritamDas";
import App from "./App";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UseState from "./hooks/UseState";
import UseState2 from "./hooks/UseState2";
import Props from "./props/Props";
import Data from "./axios/Data";
import Weather from "./axios/Weather";
import ProductDetail from "./components/ProductDetail";
import ShowCategory from "./pages/admin/category/ShowCategory";
import AddCategory from "./pages/admin/category/AddCategory";
import EditCategory from "./pages/admin/category/EditCategory";
import ShowProduct from "./pages/admin/product/ShowProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import EditProduct from "./pages/admin/product/EditProduct";
import ForgetPassword from "./pages/ForgetPassword";
import EmailVerify from "./pages/EmailVerify";
import Verify from "./pages/Verify";
import ResetPassword from "./pages/ResetPassword";
import AdminRoute from "./routes/AdminRoute";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/register" element={<Register />} />
          <Route path="/emailverify" element={<EmailVerify />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/forgetpassword/:token" element={<ResetPassword />} />

          <Route element={<AdminRoute />}>
            <Route path="/product/addproduct" element={<AddProduct />} />
            <Route path="/product/showproduct" element={<ShowProduct />} />
            <Route path="product/editproduct/:id" element={<EditProduct />} />
            <Route path="/category/addcategory" element={<AddCategory />} />
            <Route path="/category/showcategory" element={<ShowCategory />} />
            <Route
              path="/category/editcategory/:id"
              element={<EditCategory />}
            />
          </Route>

          <Route path="/use" element={<UseState2 />} />
          <Route path="/props" element={<Props />} />
          <Route path="/data" element={<Data />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
