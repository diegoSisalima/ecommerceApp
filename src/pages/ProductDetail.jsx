import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const productsList = useSelector((state) => state.products);
  const productDetail = productsList.find(
    (products) => products.id === Number(id)
  );
  const relatedProducts = productsList.filter(
    (products) => products.category.id === productDetail.category.id
  );

  return (
    <div>
      <h1>Estas en Product Detail</h1>
      <p>
        Mostrando producto de id: <b>{id}</b>
      </p>
      <h4>{productDetail.title}</h4>
      <ul>
        {relatedProducts.map((products) => (
          <li>
            <Link to={`/product/${products.id}`}>{products.title}</Link>
          </li>
        ))}
      </ul>
      <img src={productDetail.productImgs[0]} alt="" />
      <h4>{productDetail.price}</h4>
    </div>
  );
};

export default ProductDetail;
