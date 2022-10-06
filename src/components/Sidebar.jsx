import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartthunk,
  getCartThunk,
  purchasesCartthunk,
} from "../store/slices/cart.slice";
import { Link } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = ({ show }) => {
  const productsCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const purchasesCart = () => {
    alert("despachando cart");
    dispatch(purchasesCartthunk());
  };

  return (
    <div className={`cart ${show ? "show" : "hide"}`}>
      <h2>Carrito de compras</h2>
      <ul>
        {productsCart.map((item) => (
          <li key={item.id}>
            <h3>{item.brand}</h3>
            <Link to={`/product/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <h3>{item.productsInCart.quantity}</h3>
            <h3>total: {item.productsInCart.quantity * item.price}</h3>
            <h3>-------------</h3>
          </li>
        ))}
      </ul>
      <button onClick={purchasesCart}>Checkout</button>
    </div>
  );
};

export default Sidebar;
