import React from "react";
import { useEffect } from "react";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);
  const navigate = useNavigate();
  console.log("array");
  console.log(purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <h1>Estas en Purchases</h1>
      {purchases.map((element) => (
        <ul>
          <hr />
          {element.cart.products.map((subElement) => (
            // onClick={() => navigate(`/product/${favorite.news.id}`)}
            <li>---{subElement.title}---</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Purchases;
