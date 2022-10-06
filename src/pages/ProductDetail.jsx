import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { addCartthunk } from "../store/slices/cart.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const [rate, setRate] = useState(5);

  const productDetail = productsList.find(
    (products) => products.id === Number(id)
  );

  const relatedProducts = productsList.filter(
    (products) => products.category.id === productDetail.category.id
  );

  useEffect(() => {
    setRate(5);
  }, [id]);

  const addCart = () => {
    alert("añadiendo" + rate);
    const cart = {
      id: id,
      quantity: rate,
    };
    dispatch(addCartthunk(cart));
  };

  return (
    <div className="product">
      <h1 className="homePage">Product</h1>
      <div className="productInfo">
        <div className="col">
          <div className="images-gallery">
            <div className="gallery">
              <div className="button-gallery left">
                <button>◀</button>
              </div>
              <ul className="producto-img-pri">
                <li>
                  <img src={productDetail.productImgs?.[0]} alt="" />
                </li>
              </ul>
              <div className="button-gallery rigth">
                <button>▶</button>
              </div>
            </div>
            <ul className="product-gallery">
              <li className="selected">
                <img src={productDetail.productImgs[0]} alt="" />
              </li>
              <li className="selected">
                <img src={productDetail.productImgs[1]} alt="" />
              </li>
              <li className="selected">
                <img src={productDetail.productImgs[2]} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <h2>{productDetail.title}</h2>
          <div className="productData">
            <p className="productDescription">
              {productDetail?.description}
            </p>
            <div className="product-options">
              <ul>
                <li className="price">Price</li>
                <li className="price-num">{productDetail.price}</li>
              </ul>
              <div className="quantity">
                <div className="label">Quantity</div>
                <div className="flex">
                  <button onClick={() => setRate(rate - 1)}>
                    <i className="icon-minus">-</i>
                  </button>
                  <div className="value">{rate}</div>
                  <button onClick={() => setRate(rate + 1)}>+</button>
                </div>
              </div>
            </div>
            <button className="productButton" onClick={addCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="home">
        <ul className="products-list">
          {relatedProducts.map((products) => (
            <li className="product-card" key={products.id}>
              {console.log(products)}
              <Link to={`/product/${products.id}`}>{products.title}</Link>

              <img
                className="img-product"
                src={products.productImgs?.[0]}
                alt=""
              />
              <section className="detail">
                <h3 className="title">{products.title}</h3>
                <div className="prices">
                  <div className="price">
                    <h4 className="lblprice">Price</h4>
                    <h3>$ {products.price}</h3>
                  </div>
                  <div className="cart-icon">
                    <img src={products.cart} alt="" />
                  </div>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
