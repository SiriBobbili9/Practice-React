import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between bg-gray-50">
      <div >
        <img className="w-32" src={LOGO_URL} alt="logo" />
      </div>
      <div className=" flex items-center">
        <ul className="flex p-4 m-4 ">
        <li className="px-1 mx-3 font-bold">
        Online Status:{onlineStatus ? "✔️" : "🔴" }
        </li>
          <li className="px-1 mx-3 font-bold ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1 mx-3 font-bold">
            <Link to="/about">About us</Link>
          </li>
          {/*<li onClick={()=>navigate("/about")}>
          About
         </li>*/}
          <li className="px-1 mx-3 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-1 mx-3 font-bold">Cart</li>
          <button
            className="px-1 mx-3 font-bold"
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
