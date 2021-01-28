import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <nav class="navbar navbar-light bg-primary">
                <ul>
                    <li><NavLink to="/usuarios" exact>Users</NavLink></li>
                    <li><NavLink to="/usuarios/salvar" exact>Novo usuario</NavLink></li>
                    <li><NavLink to="/posts" exact>Posts</NavLink></li>
                    <li><NavLink to="/posts/salvar" exact>Novo Post</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;