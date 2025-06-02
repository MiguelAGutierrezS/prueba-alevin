import React from 'react';
import TickerServicios from './TicketServicios';
import './sobreNosotros.css';

const SobreNosotros = () => {
    return (
        <section id="about" className="acerca">
            <div className="contenedor">
                <h2 className="titulo-acerca">
                    <span>SOBRE NOSOTROS</span>
                </h2>
                <p className="texto-acerca">
                    Bienvenidos al reino cinematográfico de Miguel Studios, donde la creatividad se fusiona con la tecnología para ofrecer narrativas visualmente impactantes. Con una pasión inquebrantable por la narración de historias y una meticulosa atención a cada detalle, nuestra empresa se dedica a transformar material ordinario en experiencias visuales excepcionales.
                </p>
                <div className="ticker-servicios">
                    <TickerServicios />
                </div>
            </div>
        </section>
    );
};

export default SobreNosotros;
