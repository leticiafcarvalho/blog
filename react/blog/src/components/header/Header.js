import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    
                    <li><NavLink to="/usuarios" exact>Users</NavLink></li>
                    <li><NavLink to="/usuarios/salvar" exact>Novo usuario</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;