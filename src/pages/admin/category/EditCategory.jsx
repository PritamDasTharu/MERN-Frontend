import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "../AdminNav";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/category/updateCategory/${id}`, {
        category_name: categoryName,
      });
      setCategoryName("");
      navigate("/category/showcategory");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9000/category/${id}`)
      .then((res) => {
        setCategoryName(res.data.category_name);
      })
      .catch((err) => {
        err.message;
      });
  }, []);

  return (
    <>
      <AdminNav />
      <main className="form-signin w-25 m-auto ">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal d-flex justify-content-center">
            Edit Category
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
            Edit Category
          </button>
        </form>
      </main>
    </>
  );
};

export default EditCategory;
