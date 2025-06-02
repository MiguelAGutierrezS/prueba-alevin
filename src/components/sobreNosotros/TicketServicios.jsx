import React from 'react';
import './ticketServicios.css';

const TickerServicios = () => {
    const servicios = [
        "Producción de video",
        "Fotografía profesional",
        "Cobertura de eventos",
        "Creación de marca",
        "Edición para redes sociales"
    ];

    return (
        <div className="ticker-servicios">
            <div className="ticker-servicios__mover">
                {servicios.concat(servicios).map((texto, i) => (
                    <div key={i} className="ticker-servicios__item">
                        <span className="ticker-servicios__bullet">•</span>
                        <span className="ticker-servicios__texto">{texto}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TickerServicios;
