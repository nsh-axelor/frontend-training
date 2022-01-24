import { useState } from "react";
import Context from "./Context";

const State = (props) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");
  const [toastList, setToastList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState([]);
  return (
    <Context.Provider
      value={{
        dataState: [data, setData],
        cartState: [cart, setCart],
        categoryState: [category, setCategory],
        toast: [toastList, setToastList],
        modal: [showModal, setShowModal],
        sortState: [sort, setSort],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
