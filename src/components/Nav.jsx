import { Link } from "react-router-dom";
import react from "../assets/react.svg";
import "../assets/css/Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <li className="logo">
        {/* <a href="#/">Enlace uno</a> */}
        <Link to="/">
          <img src={react} alt="" />
          Ecommerce
        </Link>
      </li>
      <input type="checkbox" className="btn-check" id="menu-mobile" />
      <label htmlFor="menu-mobile" className="lbl-menu-draw"></label>
      <ul>
        <li>
          {/* <a href="#/">Enlace uno</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="#/">Enlace dos</a> */}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {/* <a href="#/">Enlace tres</a> */}
          <Link to="/purchases">Purchases</Link>
        </li>
        <li>
          {/* <a href="#/">Enlace tres</a> */}
          <Link onClick={logout} to="/login">
            Logout
          </Link>
        </li>
      </ul>
      <div className="icons">
        <li>
          {/* <a href="#/">Enlace uno</a> */}
          <Link to="/">
            <img src={react} alt="" />
          </Link>
        </li>
        <li>
          {/* <a href="#/">Enlace uno</a> */}
          <Link to="/">
            <img src={react} alt="" />
          </Link>
        </li>
        <li>
          {/* <a href="#/">Enlace uno</a> */}
          <Link to="/">
            <img src={react} alt="" />
          </Link>
        </li>
      </div>
    </nav>
  );
};
export default Nav;
