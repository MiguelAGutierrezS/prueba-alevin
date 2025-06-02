import React, { useState, useRef } from 'react';
import ServiciosCard from './ServiciosCard';

// Importa tus imágenes desde la carpeta assets/images
import ProduccionVideos from '../../assets/images/ServiciosProduccionVideos.png';
import FotografiaProfesional from '../../assets/images/serviciosFotoProfecional.png';
import CoberturaEventos from '../../assets/images/serviciosCoberturaEventos.png';
import CreacionMarca from '../../assets/images/serviciosCreacionMarca.png';
import EdicionRedesSociales from '../../assets/images/serviciosRedesSociales.png';

import './servicios.css';

const Servicios = () => {
    const serviciosOriginales = [
        { titulo: 'PRODUCCIÓN DE VIDEO', imagen: ProduccionVideos },
        { titulo: 'FOTOGRAFÍA PROFESIONAL', imagen: FotografiaProfesional },
        { titulo: 'COBERTURA DE EVENTOS', imagen: CoberturaEventos },
        { titulo: 'CREACIÓN DE MARCA', imagen: CreacionMarca },
        { titulo: 'EDICIÓN PARA REDES SOCIALES', imagen: EdicionRedesSociales },
    ];

    const servicios = serviciosOriginales;


    const [indiceActual, setIndiceActual] = useState(0);


    const trackRef = useRef(null);

    const ITEM_WIDTH = 240;
    const ITEM_MARGIN_RIGHT = 24;
    const STEP = ITEM_WIDTH + ITEM_MARGIN_RIGHT;

    const irAnterior = () => {
        if (indiceActual > 0) {
            setIndiceActual((prev) => prev - 1);
        }
    };


    const irSiguiente = () => {
        if (indiceActual < servicios.length - 1) {
            setIndiceActual((prev) => prev + 1);
        }
    };

    const calcularTransform = () => {
        return `translateX(-${indiceActual * STEP}px)`;

    };

    const calcularWidthTrack = () => {
        return `${STEP * servicios.length}px`;
    };

    return (
        <section id="services" className="servicios-carousel">
            <div className="servicios-carousel__contenedor">
                <h2 className="servicios-carousel__titulo">
                    <span>NUESTROS SERVICIOS</span>
                </h2>

                <div className="servicios-carousel__track-wrapper">
                    <div
                        ref={trackRef}
                        className="servicios-carousel__track"
                        style={{
                            width: calcularWidthTrack(),
                            transform: calcularTransform(),
                            transition: 'transform 0.6s ease',
                        }}
                    >
                        {servicios.map((servicio, idx) => (
                            <div key={idx} className="servicios-carousel__item">
                                <ServiciosCard servicio={servicio} />
                                <div className="servicios-carousel__label">
                                    {servicio.titulo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contenedor-footer-slider">
                    <button
                        className={`servicios-carousel__flecha servicios-carousel__flecha--izq ${indiceActual === 0 ? 'deshabilitada' : ''
                            }`}
                        onClick={irAnterior}
                        aria-label="Anterior"
                        disabled={indiceActual === 0}
                    >
                        &#8249;
                    </button>

                    <button
                        className={`servicios-carousel__flecha servicios-carousel__flecha--der ${indiceActual === servicios.length - 1 ? 'deshabilitada' : ''
                            }`}
                        onClick={irSiguiente}
                        aria-label="Siguiente"
                        disabled={indiceActual === servicios.length - 1}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
