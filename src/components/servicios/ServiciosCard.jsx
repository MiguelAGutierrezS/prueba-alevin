import React from 'react';
import './serviciosCard.css';

const ServiciosCard = ({ servicio }) => {
    return (
        <div className="tarjeta-servicio">
            <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="imagen-servicio"
            />
        </div>
    );
};

export default ServiciosCard;
