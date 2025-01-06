import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li>
        Online Status:{onlineStatus ? "✔️" : "🔴" }
        </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          {/*<li onClick={()=>navigate("/about")}>
          About
         </li>*/}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
