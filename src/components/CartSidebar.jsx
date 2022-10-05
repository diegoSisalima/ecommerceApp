import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartThunk } from "../store/slices/cart.slice";

const CartSidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);
  return (
    <div>
      <h1>Estas en CartSidebar</h1>
    </div>
  );
};

export default CartSidebar;
