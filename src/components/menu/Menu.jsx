import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="container-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/pag-crypto">Crypto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu