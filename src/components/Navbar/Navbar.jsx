import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "./logo.png";
import navelements from "./const.Navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="nav-container">
          <img className="nav-logo" src={logo} alt="logo" />
          <div className={clicked ? "nav-menu active" : "nav-menu"}>
            {navelements.map((element) => (
              <NavLink key={element.id} to={element.path} className="nav-element">
                {element.name}
              </NavLink>
            ))}
          </div>
          <div className="nav-burger" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      );
      
    }