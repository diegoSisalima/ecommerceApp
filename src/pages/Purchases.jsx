import React from "react";
import { useEffect } from "react";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import { useDispatch } from "react-redux";

const Purchases = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <h1>Estas en Purchases</h1>
    </div>
  );
};

export default Purchases;
