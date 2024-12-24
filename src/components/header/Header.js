import React from "react";
import './header.css';

const Header = () =>{
    return (
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    )
}
export default Header;