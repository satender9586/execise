import React from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state?.cart?.carts);

  return (
    <Layout>
      <div style={{minHeight:"550px"}}>
        <div style={{ width: "100%", padding: "10px" }}>
          {cart.length == 0 ? (
            <div className="cart-box">
              <h1>Empty Cart</h1>
            </div>
          ) : (
            cart?.map((item, key) => (
              <div className="cart-box" key={item.id}>
                <img
                  src={item.image}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <h4>{item.price}</h4>
                  <p> Quantity : {item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
