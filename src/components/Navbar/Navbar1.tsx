import { Link } from "react-router-dom";
import "./Navbar1.css"

export default function Navbar() {
  return (
    <>
      <ul className="navbar-ul">
        <Link to={"/vybrat"}>
          <li>Vybrat peníze</li>
        </Link>
        <Link to={"/vlozit"}>
          <li>Vložit peníze</li>
        </Link>
        <Link to={"/zustatek"}>
          <li>Zůstatek</li>
        </Link>
        <Link to={"/odejit"}>
          <li>Odejít</li>
        </Link>
      </ul>
    </>
  );
}