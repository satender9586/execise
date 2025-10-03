import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1 style={{ color: "white", fontSize: "50px" }}>Welcome My Store</h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Always work for costomer
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              fontSize: "17px",
              padding: "7px 20px",
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              color: "wheat",
            }}
          >
            more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
