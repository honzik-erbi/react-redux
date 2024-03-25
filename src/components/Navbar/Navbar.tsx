import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <ul className="navbar-ul">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/pizzaorder"}>
          <li>Pizza Order</li>
        </Link>
      </ul>
    </>
  );
}
