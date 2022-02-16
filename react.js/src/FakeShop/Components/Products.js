import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../Redux/Actions/ProductActions";
import Product from "./Product";

function Products() {
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectCategory)
  const fetchData = async () => {
    const response = await axios
      .get("/products")
      .catch((err) => console.log("Err", err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterProducts = () => {
    if(selectedCategory === "all"){
      return products
    }
    let filteredProducts = products.filter((product) => product.category === selectedCategory)
    return filteredProducts;
  }


  let $products = useMemo(() => {
    let newProducts = filterProducts()
    return newProducts;
  },[selectedCategory,products])
  return (

    <div className="ui grid container">
      {$products.map(({ id, title, category, image, price }) => (
          <Product
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            category={category}
          />
      ))}
    </div>

  );
}

export default Products;
