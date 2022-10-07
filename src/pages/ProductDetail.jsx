import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { addCartthunk } from "../store/slices/cart.slice";
import cart from "..//assets/img/cart.svg";
/*estilos bootstrap */
import Carousel from "react-bootstrap/Carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const [rate, setRate] = useState(1);

  const productDetail = productsList.find(
    (products) => products.id === Number(id)
  );

  const relatedProducts = productsList.filter(
    (products) => products.category.id === productDetail.category.id
  );

  useEffect(() => {
    setRate(1);
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
          <Carousel>
            <Carousel.Item style={{ width: "auto" }}>
              <img
                className="d-block w-100"
                src={productDetail.productImgs?.[0]}
                style={{ height: "300px" }}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: "auto" }}>
              <img
                className="d-block w-100"
                src={productDetail.productImgs?.[1]}
                style={{ height: "300px" }}
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: "auto" }}>
              <img
                className="d-block w-100"
                src={productDetail.productImgs?.[2]}
                style={{ height: "300px" }}
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="images-gallery">
            {/* <div className="gallery">
              <div className="button-gallery left">
                <button>◀</button>
              </div>
              <ul className="producto-img-pri">
                <li>
                  <img src={productDetail.productImgs?.[0]} alt="" />
                </li>
                <li>
                  <img src={productDetail.productImgs?.[1]} alt="" />
                </li>
                <li>
                  <img src={productDetail.productImgs?.[2]} alt="" />
                </li>
              </ul>
              <div className="button-gallery rigth">
                <button>▶</button>
              </div>
            </div> */}
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
            <p className="productDescription">{productDetail?.description}</p>
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
              <Link to={`/product/${products.id}`}>
                {console.log(products)}
                <img
                  className="img-product"
                  src={products.productImgs?.[0]}
                  alt=""
                />
                <section className="detail">
                  <h5 className="title">{products.title}</h5>
                  <div className="prices">
                    <div className="price">
                      <h5 className="lblprice">Price</h5>
                      <h5>$ {products.price}</h5>
                    </div>
                    <div onClick={addCart} className="cart-icon">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
