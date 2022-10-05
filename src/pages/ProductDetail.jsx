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
    <div className="product">
      <h1>Estas en Product Detail</h1>
      <div className="productInfo">
        <div className="col">
          <div className="images-gallery">
            <div className="gallery">
              <div className="button-gallery left">
                <button>◀</button>
              </div>
              <ul className="producto-img-pri">
                <li>
                  <img src={productDetail.productImgs[0]} alt="" />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              nemo ex obcaecati delectus ducimus quaerat quod doloribus fuga
              ipsa tempore. Quod aperiam natus modi doloribus eos fugit
              dignissimos ipsam eum?
            </p>
            <div className="product-options">
              <ul>
                <li className="price">Price</li>
                <li className="price-num">{productDetail.price}</li>
              </ul>
              <div className="quantity">
                <div className="label">Quantity</div>
                <div className="flex">
                  <button disabled>
                    <i className="icon-minus">-</i>
                  </button>
                  <div className="value">1</div>
                  <button>+</button>
                </div>
              </div>
            </div>
            <button className="productButton">Add to cart</button>
          </div>
        </div>
      </div>
      <ul>
        {relatedProducts.map((products) => (
          <li key={products.id}>
            {console.log(products)}
            <Link to={`/product/${products.id}`}>{products.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
