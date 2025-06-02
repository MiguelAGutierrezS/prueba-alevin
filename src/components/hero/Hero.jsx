import React from 'react';
import './hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="fondo-hero"></div>

            <div className="contenido-hero">
                <div className="contenedor-subtitulo-hero">
                    <div className="subtitulo-hero">PRODUCCIÓN PROFESIONAL</div>
                </div>
                <h1 className="titulo-hero">
                    TRANSFORMA TUS VIDEOS<br />
                    <span>EN EXPERIENCIAS PROFESIONALES</span>
                </h1>
                <p className="descripcion-hero">
                    Convierte cada video y efecto en una historia que conecte con tu público, usando técnicas de edición profesional.
                </p>
                <button className="boton-principal" onClick={() => window.location.href = '#contact'}>
                    CONTÁCTANOS
                </button>
            </div>

            <div className="punto decor-pequeño" style={{ top: '5%', left: '10%' }}></div>
            <div className="punto decor-mediano" style={{ bottom: '10%', right: '15%' }}></div>
            <div className="punto decor-grande" style={{ top: '30%', right: '10%' }}></div>
        </section>
    );
};

export default Hero;
