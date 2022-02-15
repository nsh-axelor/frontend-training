import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product() {
  const products = useSelector((state) => state.productReducer.products);
  return (products.length > 0 ? products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
      <Link to={`product/${id}`} >
        <div className="ui links cards">
          <div className="card">
            <div className="image">
                <img src={image} alt={title}/>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  }) : '')
}

export default Product;
