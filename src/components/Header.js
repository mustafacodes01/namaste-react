import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setBtnReact] = useState("logOut");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={LOGO_URL}></img>
            </div>
            <div className="nav-Items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="button" onClick={() => {
                        btnNameReact === "logIn" ? setBtnReact("LogOut") : setBtnReact("logIn")
                    }
                    }>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;