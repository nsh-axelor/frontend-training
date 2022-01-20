import React, { useEffect, useState } from "react";
import "./App.css";
import Products from "../Products";
import { Col, Container, ToastContainer, Row } from "react-bootstrap";
import Cart from "../Cart";
import PosNavbar from "../Navbar";
import PosToast from "../Toast";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [toastList, setToastList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);

  // Fetching the data from products.json file
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        let x = [];
        data.map((product) =>
          !x.includes(product.category) ? x.push(product.category) : null
        );
        setCategories(x);
        setProductData(data);
      });
  }, []);

  // Adding product to the cart
  const addToCart = (product) => {
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
    setToastList([...toastList, { key: Math.random(), name: product.title }]);
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
      setProductData(data);
    } else {
      let filteredProductData = [];
      filteredProductData = data.filter((product) => product.category === c);
      setProductData(filteredProductData);
    }
  };

  const sortBy = (x) => {
    setProductData((prevState) => {
      let newProductData = [...prevState];
      newProductData.sort((a, b) => {
        if (a[x] > b[x]) {
          return 1;
        }
        if (a[x] < b[x]) {
          return -1;
        }
        return 0;
      });
      return newProductData;
    });
    setData((prevState) => {
      let newData = [...prevState];
      newData.sort((a, b) => {
        if (a[x] > b[x]) {
          return 1;
        }
        if (a[x] < b[x]) {
          return -1;
        }
        return 0;
      });
      return newData;
    });
  };
  return (
    <>
      <PosNavbar
        brandName="Axelor POS"
        noOfCartItems={cart.length}
        filterByCategory={filterByCategory}
        handleShowModal={handleShowModal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        showModal={showModal}
        cart={cart}
        categories={categories}
        sortBy={sortBy}
      />
      <Container fluid>
        <Row>
          <Col md="8" className="p-4 pt-0">
            <Products addToCart={addToCart} productData={productData} />
          </Col>
          <Col md="4" className="p-4">
            <Cart
              handleShowModal={handleShowModal}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              showModal={showModal}
              cart={cart}
            />
          </Col>
        </Row>
      </Container>
      <ToastContainer position="bottom-end">
        <PosToast toastList={toastList} onClose={onToastClose} />
      </ToastContainer>
    </>
  );
};

export default App;
