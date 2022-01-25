import React, { useEffect, useMemo, useState, useContext } from "react";
import "./App.css";
import Products from "../Products";
import { Col, Container, ToastContainer, Row } from "react-bootstrap";
import Cart from "../Cart";
import Toast from "../Toast";
import Navbar from "../Navbar";
import Context from "../../Context/Context";

const App = () => {
  const appState = useContext(Context);

  // Data fetched from JSON file
  const [data, setData] = appState.data;

  // For handling Cart Data
  const [cart, setCart] = appState.cart;

  const [category, setCategory] = appState.category;

  // For generated Tosts
  const [toastList, setToastList] = appState.toastList;

  const [showModal, setShowModal] = appState.showModal;

  const [sort, setSort] = appState.sort;

  // Fetching the data from products.json file
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // Adding product to the cart
  const addToCart = (product, showToast) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      let selectedProductIndex = newCart.findIndex(
        (item) => item.id === product.id
      );
      if (selectedProductIndex === -1) {
        return [...newCart, { id: product.id, product: product, quantity: 1 }];
      } else {
        newCart[selectedProductIndex] = {
          ...newCart[selectedProductIndex],
          quantity: newCart[selectedProductIndex].quantity + 1,
        };
        return newCart;
      }
    });
    if (showToast) {
      setToastList([...toastList, { key: Math.random(), name: product.title }]);
    }
  };

  // Removig item from the cart
  const removeFromCart = (product) => {
    // SetCart Data method
    setCart((prevCart) => {
      const newCart = [...prevCart];

      // Getting index of selected product
      let selectedProductIndex = newCart.findIndex(
        (item) => item.id === product.id
      );

      // Getting selected product
      let selectedProduct = newCart[selectedProductIndex];

      // if quantity is 1 then remove that from cart
      if (selectedProduct.quantity === 1) {
        return newCart.filter((item) => item.id !== product.id);
      }

      // Decreasing the quantity by 1
      newCart[selectedProductIndex] = {
        ...newCart[selectedProductIndex],
        quantity: newCart[selectedProductIndex].quantity - 1,
      };
      return newCart;
    });
  };

  // Clearing Cart
  const clearCart = () => {
    handleShowModal();
    setCart([]);
    setToastList([]);
  };

  // Closing the Toast using "X" button
  const onToastClose = (key) => {
    setToastList(toastList.filter((item) => item.key !== key));
  };

  // For Showing Modal while clearing cart
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  // Filtering products based on the category selected
  const filterByCategory = (c) => {
    let filteredData = data.slice();
    return c === "all"
      ? filteredData
      : filteredData.filter((product) => product.category === c);
  };

  const sortData = (sort, data) => {
    let { property, order } = sort;
    if (property === "id") {
      return data;
    }
    data.sort((a, b) => {
      if (a[property] > b[property]) {
        return order === "ASC" ? 1 : -1;
      }
      if (a[property] < b[property]) {
        return order === "ASC" ? -1 : 1;
      }
      return 0;
    });
    return data;
  };

  const renderCart = () => {
    return (
      <Cart
        handleShowModal={handleShowModal}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        clearCart={clearCart}
        showModal={showModal}
        cart={cart}
      />
    );
  };

  const $categories = useMemo(() => {
    let filteredCategory = [];
    data.map((product) =>
      !filteredCategory.includes(product.category)
        ? filteredCategory.push(product.category)
        : null
    );
    return filteredCategory;
  }, [data]);

  const $productData = useMemo(() => {
    let filteredData = filterByCategory(category);
    let sortedData = sortData(sort, filteredData);
    return sortedData;
  }, [category, data, sort]);

  return (
    <>
      <Navbar
        brandName="Axelor POS"
        noOfCartItems={cart.length}
        links={$categories}
        Cart={renderCart}
        setActiveLink={setCategory}
        option={sort}
        setOption={setSort}
      />
      <Container fluid>
        <Row>
          <Col md="8" className="p-4 pt-0">
            <Products onAddToCart={addToCart} productData={$productData} />
          </Col>
          <Col md="4" className="p-4">
            {renderCart()}
          </Col>
        </Row>
      </Container>
      <ToastContainer position="bottom-end">
        <Toast toastList={toastList} onClose={onToastClose} />
      </ToastContainer>
    </>
  );
};

export default App;
