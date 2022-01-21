import React, { useEffect, useState } from "react";
import "./App.css";
import Products from "../Products";
import { Col, Container, ToastContainer, Row } from "react-bootstrap";
import Cart from "../Cart";
import Toast from "../Toast";
import Navbar from "../Navbar";

const App = () => {
  // Data fetched from JSON file
  const [data, setData] = useState([]);

  // Data that should be shown to the customer
  const [productData, setProductData] = useState([]);

  // For Extracting distinct Categories from the data
  const [categories, setCategories] = useState([]);

  // For handling Cart Data
  const [cart, setCart] = useState([]);

  // For generated Tosts
  const [toastList, setToastList] = useState([]);

  const [showModal, setShowModal] = useState(false);

  // Fetching the data from products.json file
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        let filteredCategory = [];
        data.map((product) =>
          !filteredCategory.includes(product.category)
            ? filteredCategory.push(product.category)
            : null
        );
        setCategories(filteredCategory);
        setProductData(data);
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
    if (c === "all") {
      setProductData([...data]);
    } else {
      let filteredProductData = [];
      filteredProductData = [...data].filter(
        (product) => product.category === c
      );
      setProductData(filteredProductData);
    }
  };

  // For Sorrting the productData and data state variable
  const sortBy = (property, reversed) => {
    setProductData(sortData(property, [...productData], reversed));
    setData(sortData(property, [...data], reversed));
  };

  const sortData = (property, data, reversed) => {
    data.sort((a, b) => {
      if (a[property] > b[property]) {
        return reversed ? -1 : 1;
      }
      if (a[property] < b[property]) {
        return reversed ? 1 : -1;
      }
      if (a.id > b.id) {
        return reversed ? -1 : 1;
      }
      if (a.id < b.id) {
        return reversed ? 1 : -1;
      }
      return 0;
    });
    return data;
  };

  const renderCart = () => {
    return (
      <Cart
        handleShowModal={handleShowModal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        showModal={showModal}
        cart={cart}
      />
    );
  };
  return (
    <>
      <Navbar
        brandName="Axelor POS"
        noOfCartItems={cart.length}
        filterByCategory={filterByCategory}
        categories={categories}
        sortBy={sortBy}
        renderCart={renderCart}
      />
      <Container fluid>
        <Row>
          <Col md="8" className="p-4 pt-0">
            <Products addToCart={addToCart} productData={productData} />
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
