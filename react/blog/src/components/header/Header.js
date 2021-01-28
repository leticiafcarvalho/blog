import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to="/livros" exact>Home</NavLink></li>
                    <li><NavLink to="/livros/novolivro" exact>Novo</NavLink></li>
                    <li><NavLink to="/livros/alterarlivro" exact>Alterar</NavLink></li>
                    <li><NavLink to="/usuarios" exact>Users</NavLink></li>
                    <li><NavLink to="/usuarios/salvar" exact>Novo usuario</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;