import React from "react";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            {/* <p className="card-text">{props.category}</p> */}
            <p className="">{props.price}</p>
            <Link to={`/product-detail/${props.id}`}>
              <div className="btn btn-primary">See More</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
