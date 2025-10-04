import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/CartSlice";
import { useSelector } from "react-redux";

const ProductInfo = () => {
  const cart = useSelector((state) => state?.cart?.carts);
  const dispatch = useDispatch();
  const path = useParams();
  const { id } = path;
  const [productInfo, setProductInfo] = useState({});
  
  const quanity = cart.filter((pro)=>pro.id==id)

  const fetchInfo = async (proId) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductInfo(data));
  };

  const AddItmes = (data) => {
    dispatch(addproduct(data));
  };

  useEffect(() => {
    fetchInfo();
  }, [id]);

  

  return (
    <Layout>
      <div className="product-info-container">
        <div className="product-info-content">
          <div className="product-image">
            <img src={productInfo?.image} alt={productInfo?.title} />
          </div>

          <div className="product-details">
            <h2>{productInfo?.title}</h2>
            <h3 className="price">₹ {productInfo?.price}</h3>
            <h4 className="rating"> ⭐ rating {productInfo?.rating?.rate}</h4>
            <button onClick={() => AddItmes(productInfo)}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
