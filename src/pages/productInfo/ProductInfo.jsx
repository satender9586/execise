import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/CartSlice";
import { useSelector } from "react-redux";

const ProductInfo = () => {
  const cart = useSelector((state)=>state?.cart?.carts)
  const dispatch = useDispatch()
  const path = useParams();
  const { id } = path;
  const [productInfo, setProductInfo] = useState({});

  console.log(cart)
  const fetchInfo = async (proId) => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => setProductInfo(data));
  };

  const AddItmes = (data)=>{
    dispatch(addproduct(data))
  }



  useEffect(() => {
    fetchInfo();
  }, [id]);

  return (
    <Layout>
      <div style={{ width: "100%", height: "500px", padding: "10px",backgroundColor:"wheat" }}>
        <div style={{display:"flex",gap:"20px",justifyContent:"space-evenly"}}>
          <div>
            <img style={{width:"300px"}} src={productInfo?.image} />
          </div>
          <div>
            <h3>{productInfo?.title}</h3>
            <h3 style={{marginTop:"5px",color:"red"}}>{productInfo?.price}</h3>
            <h4 style={{marginTop:"5px",color:"yellow"}}>rating : {productInfo?.rating?.rate}</h4>
            <button style={{marginTop:"30px",padding:"9px"}} onClick={()=>AddItmes(productInfo)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
