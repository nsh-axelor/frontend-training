import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import Cateogry from "./Cateogry";

function CategorySelector() {
  const appState = useContext(Context);
  const [categories, setCategories] = appState.categories;
  const [category, setCategory] = useState("");

  const contains = (value) => {
      for(var i = 0;i<categories.length;i++){
          if(categories[i].toLowerCase() ===value.toLowerCase()){
              return false
          }
      }
      return true
  }
  const handleCategoryAdd = (e) => {
      if(e.keyCode === 13 && e.target.value.length !== 0 && contains(e.target.value)){
          setCategories((prevCategories) => ([...prevCategories,category]))
          setCategory("")
      }
  }
  return (
    <div className="categories">
      {categories.map((category) => (
        <Cateogry value={category} />
      ))}
      <input className="category-input" onKeyDown={handleCategoryAdd} type="text" placeholder="Enter New Category Here" onChange={(e) => setCategory(e.target.value)}/>
    </div>
  );
}

export default CategorySelector;
