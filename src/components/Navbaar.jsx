import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../redux/SearchSlice";

const Navbaar = () => {
  const dispathc = useDispatch();
  const cart = useSelector((state) => state?.cart?.carts);
  const dispatch = useDispatch();
  const stateserach = useSelector((state) => state?.serach);

  const changeHander = (e) => {
    dispathc(search(e.target.value));
  };

  return (
    <div className="Navbaar-container">
      <ul>
        <Link to={"/"}>
          {" "}
          <li>shop</li>
        </Link>
        <Link to={"/man"}>
          <li>man</li>
        </Link>
        <li>women</li>
        <li>combos</li>
        <li>joggers</li>
      </ul>

      <div className="search-box">
        <div>
          <input
            type="text"
            onChange={changeHander}
            className="serach-field"
            placeholder="search"
          />
        </div>
       <Link to={"/cart"}>
         <div style={{ color: "red", fontSize: "" }}>Cart {cart.length}</div>
       </Link>
      </div>
    </div>
  );
};

export default Navbaar;
