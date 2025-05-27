import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../AdminNav";
import { ToastContainer } from "react-toastify";

const ShowCategory = () => {
  const [category, setCategory] = useState([]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/category/deleteCategory/${id}`);
      setCategory(category.filter((c) => c._id !== id));
      alert(`Category deleted`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:9000/category`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        err.message;
      });
  }, []);
  return (
    <>
      <button>
        <Link to="/category/addcategory">Add Category</Link>
      </button>
      <AdminNav />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.category_name}</td>
                <td>
                  <Link to={`/category/editcategory/${item._id}`}>
                    <button className="btn btn-secondary">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShowCategory;
