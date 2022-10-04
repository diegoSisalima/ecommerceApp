import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="home">
      <h1>Estas en home</h1>
      <input
        type="text"
        placeholder="search product"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button onClick={searchProducts}>Search</button>
      {categories.map((category) => (
        <button key={category.id} onClick={() => filterCategory(category.id)}>
          {category.name}
        </button>
      ))}
      <ul className="products-list">
        {productsFiltered.map((product) => (
          <li
            className="product-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img className="img-product" src={product.productImgs[0]} alt="" />
            <section className="detail">
              <h3 className="title">{product.title}</h3>
              <div className="prices">
                <div className="price">
                  <h4 className="lblprice">Price</h4>
                  <h3>$ {product.price}</h3>
                </div>
                <div className="cart-icon">
                  <img src={cart} alt="" />
                </div>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
