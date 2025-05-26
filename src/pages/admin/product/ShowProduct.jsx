import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../../services/ProductService";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNav from "../AdminNav";

const ShowProduct = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const data = await getProducts();
    console.log(data);
    setProduct(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProduct(product.filter((c) => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/product/productget`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        err.message;
      });
  }, []);
  return (
    <>
      <button>
        <Link to="/product/addproduct">Add Product</Link>
      </button>
      <AdminNav />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th>Product Name</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.product_name}</td>
                <td>{item.category?.category_name}</td>
                <td>
                  <Link to={`/product/editproduct/${item._id}`}>
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

export default ShowProduct;
