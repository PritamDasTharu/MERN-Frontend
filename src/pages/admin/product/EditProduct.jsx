import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNav from "../AdminNav";

const EditProduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    price: 0,
    quantity: 0,
    description: "",
    image: "",
    category: "",
  });
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:9000/category`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err.message));

    axios
      .get(`http://localhost:9000/product/productgetbyid/${id}`)
      .then((res) => {
        setProduct({
          product_name: res.data.product_name,
          price: res.data.price,
          quantity: res.data.quantity,
          description: res.data.description,
          image: res.data.image,
          category: res?.data?.category,
        });
      })
      .catch((err) => console.log(err.message));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:9000/product/productupdatebyid/${id}`,
        product
      );
      alert("Product updated successfully");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <AdminNav />
      <main className="form-signin w-25 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Edit Product</h1>
          <select
            name="category"
            id=""
            onChange={handleChange}
            value={product.category}
          >
            {category.map((c) => {
              return (
                <option key={c._id} value={c._id}>
                  {c.category_name}
                </option>
              );
            })}
          </select>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="product_name"
              id="floatingInput"
              placeholder="Product Name"
              value={product.product_name}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Product Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="price"
              id="floatingInput"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Price</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="quantity"
              id="floatingInput"
              placeholder="Quantity"
              value={product.quantity}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Quantity</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="description"
              id="floatingInput"
              placeholder="description"
              value={product.description}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Description</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="image"
              id="floatingInput"
              placeholder="Image"
              value={product.image}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Image</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Update Product
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditProduct;
