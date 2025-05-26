import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:9000/category/categoryadd`, {
        category_name: categoryName,
      });
      setCategoryName("");
      navigate("/category/showcategory");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <AdminNav />
      <main className="form-signin w-25 m-auto ">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">
            Add Category
          </h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Category Name</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Add Category
          </button>
        </form>
      </main>
    </>
  );
};

export default AddCategory;
