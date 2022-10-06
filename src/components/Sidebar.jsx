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
      <ul className="name-sidebar">
        {productsCart.map((item) => (
          <li key={item.id}>
            <span>{item.brand}</span>
            <Link to={`/product/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <ul className="info-sidebar">
              <li className="quantity-sidebar">{item.productsInCart.quantity}</li>
              <li className="pricer-sidebar"><span>total:</span>{item.productsInCart.quantity * item.price}</li>
            </ul>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <button className="sidebar-button" onClick={purchasesCart}>Checkout</button>
      </div>
    </div>
  );
};

export default Sidebar;
