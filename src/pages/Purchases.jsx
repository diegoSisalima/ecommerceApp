import React from "react";
import { useEffect } from "react";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dates from "../components/Dates";

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
    <div className="purchases">
      <h1 className="homePage">Purchases</h1>
      {purchases.map((element) => (
        console.log(element),
        <div className="purchase-item" key={element.id}>
          <div className="header">
            <Dates date={element.createdAt} /> 
          </div>
          {element.cart.products.map((subElement) => (
            <ul className="purchase-products-list">
              <li className="product-item">
                {/* // onClick={() => navigate(`/product/${favorite.news.id}`)} */}
                <div className="name">{subElement.title}</div>
                <div className="quantity-purchase">
                  <div className="box">1</div>
                </div>
                <div className="price-purchases">{subElement.price}</div>
              </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Purchases;
