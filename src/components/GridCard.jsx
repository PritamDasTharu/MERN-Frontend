import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";

const GridCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/product/productget`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 p-4 g-4">
        {product.map((item) => {
          return (
            <div key={item._id}>
              <SingleCard
                title={item.product_name}
                category={item.category}
                image={item.image}
                price={item.price}
                id={item._id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GridCard;
