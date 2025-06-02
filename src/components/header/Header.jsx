import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './header.css';

const Header = () => {
    return (
        <header className="cabecera">
            <nav className="contenedor navegacion">
                <div className="logo">Miguel Studios</div>

                <div className="enlaces-navegacion">
                    <a href="#home">INICIO</a>
                    <a href="#about">SOBRE NOSOTROS</a>
                    <a href="#services">SERVICIOS</a>
                    <a href="#gallery">GALERÍA</a>
                    <a href="#contact">CONTÁCTANOS</a>
                </div>

                <div className="redes-navegacion">
                    <a href="#" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
