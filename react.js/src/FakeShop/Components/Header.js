import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectCategory } from "../Redux/Actions/ProductActions";
const Header = () => {
  const dispach = useDispatch();
  const selectedCategory = useSelector((state) => state.selectCategory);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    axios
      .get("/products/categories")
      .then((res) => setCategories(["all", ...res.data]))
      .catch((err) => console.log("Err", err));
  };
  return (
    <div className="ui menu">
      <div className="header item">
        <h2>FakeShop</h2>
      </div>
      {categories.map((category) => (
        <div
          className={`item ${category === selectedCategory ? "active" : ""}`}
          key={category}
          value={category}
          onClick={() => dispach(selectCategory(category))}
        >
          {category[0].toUpperCase()+category.substr(1)}
        </div>
      ))}
    </div>
  );
};

export default Header;
