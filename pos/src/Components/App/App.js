import React, { useEffect, useState } from "react";
import "./App.css";
import Strawberry from "../../Assets/img/strawberry.jpg";
import Banana from "../../Assets/img/banana.png";
import Apple from "../../Assets/img/apple.jpeg";
import Pineapple from "../../Assets/img/pineapple.png";
import Grapes from "../../Assets/img/graphes.jpeg";
import Cherry from "../../Assets/img/cherry.png";
import RedChilly from "../../Assets/img/red-chilly.jpeg";
import Capcicum from "../../Assets/img/capcicum.jpeg";
import Onion from "../../Assets/img/onion.jpg";
import Mashroom from "../../Assets/img/mashroom.png";
import Guava from "../../Assets/img/guava.png";
import Tomato from "../../Assets/img/tomato.png";
import Brinjal from "../../Assets/img/brinjal.jpeg";
import Broccoli from "../../Assets/img/broccoli.jpeg";
import Carrot from "../../Assets/img/carrot.jpg";
import Items from "../Items";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import Cart from "../Cart";
import PosNavbar from "../Navbar";
import PosToast from "../Toast";
// import x from '../../../public/products.json'

const productData = [
  { id: 1, title: "Strawberry", price: 10, imageLocation: Strawberry },
  { id: 2, title: "Banana", price: 2, imageLocation: Banana },
  { id: 3, title: "Apple", price: 25, imageLocation: Apple },
  { id: 4, title: "Pineapple", price: 100, imageLocation: Pineapple },
  { id: 5, title: "Grapes", price: 40, imageLocation: Grapes },
  { id: 6, title: "Cherry", price: 8, imageLocation: Cherry },
  { id: 7, title: "Red chilly", price: 30, imageLocation: RedChilly },
  { id: 8, title: "Capcicum", price: 4, imageLocation: Capcicum },
  { id: 9, title: "Onion", price: 20, imageLocation: Onion },
  { id: 10, title: "Mashroom", price: 12, imageLocation: Mashroom },
  { id: 11, title: "Guava", price: 15, imageLocation: Guava },
  { id: 12, title: "Tomato", price: 3, imageLocation: Tomato },
  { id: 13, title: "Brinjal", price: 20, imageLocation: Brinjal },
  { id: 14, title: "Broccoli", price: 50, imageLocation: Broccoli },
  { id: 15, title: "Carrot", price: 10, imageLocation: Carrot },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [toastList, setToastList] = useState([]);
  const [showModal, setShowModal] = useState(false);




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
  return (
    <>
      {/* Navbar */}
      <PosNavbar brandName="Axelor POS" noOfCartItems={cart.length} />
      <Container fluid>
        <Row>
          <Col md="8" className="p-4 pt-0">
            <Items addToCart={addToCart} productData={productData}  />
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
