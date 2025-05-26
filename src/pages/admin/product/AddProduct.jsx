import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
    category: "",
  });
  const [category, setCategory] = useState([]);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:9000/category/`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:9000/product/productadd`, product);
      setProduct({
        product_name: "",
        price: "",
        quantity: "",
        description: "",
        image: "",
        category: "",
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <AdminNav />
      <main className="form-signin w-25 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Add Product</h1>
          <select name="category" id="" onChange={handleChange}>
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
              placeholder="Price"
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
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Image</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Add Product
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddProduct;
