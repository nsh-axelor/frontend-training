import React, { useEffect, useState } from "react";
import "./App.css";
import Items from "../Items";
import { Col, Container, ToastContainer, Row } from "react-bootstrap";
import Cart from "../Cart";
import PosNavbar from "../Navbar";
import PosToast from "../Toast";

const App = () => {
  const [cart, setCart] = useState([]);
  const [toastList, setToastList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState();
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  const addToCart = (product) => {
    const existedItem = cart.find((x) => x.id === product.id);
    if (existedItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...existedItem, quantity: existedItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { id: product.id, product: product, quantity: 1 }]);
    }
    setToastList([...toastList, { key: Math.random(), name: product.title }]);
  };

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

  const clearCart = () => {
    handleShowModal();
    setCart([]);
    setToastList([]);
  };

  const onToastClose = (key) => {
    setToastList(toastList.filter((item) => item.key !== key));
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const filterProducts = (category) => {
    let filteredProductData = [];
    if (category === "all") {
      filteredProductData = productData;
    } else {
      filteredProductData = productData.filter(
        (product) => product.category === category
      );
    }
    return filteredProductData;
  };
  return productData ? (
    <>
      {/* Navbar */}
      <PosNavbar
        brandName="Axelor POS"
        noOfCartItems={cart.length}
        onClick={setCategory}
        category={category}
        handleShowModal={handleShowModal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        showModal={showModal}
        cart={cart}
      />
      <Container fluid>
        <Row>
          <Col md="8" className="p-4 pt-0">
            <Items
              addToCart={addToCart}
              productData={filterProducts(category)}
            />
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
  ) : (
    ""
  );
};

export default App;

// ------------------ Query Code ---------------------------------
// setCart((prevCart) => {
// let cartProductIds = prevCart.map((cartProduct) => cartProduct.id);
// let selectedProductIndex = prevCart.findIndex(
//   (item) => item.id === product.id
// );
// if (cartProductIds.includes(product.id)) {
//   prevCart[selectedProductIndex].quantity++;
//   return [...prevCart];
// } else {
//   return [
//     ...prevCart,
//     {
//       id: product.id,
//       product:product,
//       quantity: 1,
//     },
//   ];
// }
// });
