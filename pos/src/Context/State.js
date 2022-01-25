import { useState } from "react";
import Context from "./Context";

const State = (props) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");
  const [toastList, setToastList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState([]);

  const appState = {
    data: [data, setData],
    cart: [cart, setCart],
    category: [category, setCategory],
    toastList: [toastList, setToastList],
    showModal: [showModal, setShowModal],
    sort: [sort, setSort],
  };
  return <Context.Provider value={appState}>{props.children}</Context.Provider>;
};

export default State;
