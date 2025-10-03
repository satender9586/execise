import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx";
import Header from "../../components/Header.jsx";
import AllProducts from "../../components/AllProducts.jsx";
import { useSelector } from "react-redux";

const Shop = () => {
  const [myproducts, setMyProducts]=useState([])
  const search = useSelector((state)=>state?.serach?.search)
  const [filter , setFilter]=useState([])
  



  const products = async ()=>{
     const res = await fetch("https://fakestoreapi.com/products")
     const data =await res.json()
     setMyProducts(data)
  
  }


  useEffect(()=>{
    if(search){
      const filterItem = myproducts.filter((item)=>item?.title?.toLowerCase()?.replaceAll(" ","").includes(search))
      setFilter(filterItem)
    }


  },[search])


  useEffect(()=>{
    products()
  },[])


  const filterProduct = (filter.length>0  ? filter : myproducts) || myproducts
  console.log(filterProduct)
  return (
    <Layout>
      <Header />
      <AllProducts myproducts={filterProduct}/>
    </Layout>
  );
};

export default Shop;
