import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCartthunk } from "../store/slices/cart.slice";
import cart from "../assets/img/cart.svg";

const Home = () => {
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    setProductsFiltered(productsList);
  }, [productsList]);

  const filterCategory = (categoryId) => {
    alert(`filtrando con categoria ${categoryId}`);
    const filtered = productsList.filter(
      (products) => products.category.id === categoryId
    );
    setProductsFiltered(filtered);
  };

  const searchProducts = () => {
    const filtered = productsList.filter((products) =>
      products.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setProductsFiltered(filtered);
  };

  /*cart */
  const { id } = useParams();
  const dispatch = useDispatch();
  const [rate, setRate] = useState(1);

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
    <div className="home">
      <h1 className="homePage">Home</h1>
      <div className="search-product">
        <input
          type="text"
          placeholder="search product"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button className="search" onClick={searchProducts}></button>
      </div>
      <div className="category-home">
        {categories.map((category) => (
          <button key={category.id} onClick={() => filterCategory(category.id)}>
            {category.name}
          </button>
        ))}
      </div>
      <ul className="products-list">
        {productsFiltered.map((product) => (
          <li
            className="product-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img className="img-product" src={product.productImgs[0]} alt="" />
            <section className="detail">
              <h5 className="title">{product.title}</h5>
              <div className="prices">
                <div className="price">
                  <h5 className="lblprice">Price</h5>
                  <h5>$ {product.price}</h5>
                </div>
                {/* <div onClick={addCart} className="cart-icon">
                  <img src={cart} alt="" />
                </div> */}
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
