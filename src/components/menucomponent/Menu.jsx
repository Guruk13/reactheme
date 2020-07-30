import React from "react";
import Submenu from "./Submenu";
import './menu-component.scss';

class Menu extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav__menu">
                    <li className="nav__menu-item">
                        <a>Home</a>
                    </li>
                    <li
                        className="nav__menu-item"
                    >
                        <a>About</a>
                        <Submenu />
                    </li>
                    <li className="nav__menu-item">
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu; 