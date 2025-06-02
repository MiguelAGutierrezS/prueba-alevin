import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="pie-pagina">
            <div className="contenedor">
                <div className="grid-footer">
                    <div>
                        <div className="marca-footer">Miguel Studios</div>
                        <p className="texto-footer">
                            Transformando ideas en experiencias visuales extraordinarias desde 2014.
                        </p>
                        <div className="redes-footer">
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
                    </div>

                    <div className="seccion-footer">
                        <h3>Servicios</h3>
                        <div className="enlaces-footer">
                            <a href="#services">Producción de Video</a>
                            <a href="#about">Fotografía Profesional</a>
                            <a href="#gallery">Cobertura de Eventos</a>
                            <a href="#services">Creación de Marca</a>
                            <a href="#services">Edición para Redes</a>
                        </div>
                    </div>

                    <div className="seccion-footer">
                        <h3>Empresa</h3>
                        <div className="enlaces-footer">
                            <a href="#about">Sobre Nosotros</a>
                            <a href="#gallery">Portafolio</a>
                            <a href="#services">Servicios</a>
                            <a href="#contact">Contacto</a>
                        </div>
                    </div>

                    <div className="seccion-footer">
                        <h3>Contacto</h3>
                        <div className="contacto-footer">
                            <div><FaPhone /> <span>+591 7512-3456</span></div>
                            <div><FaEnvelope /> <span>contacto@miguelstudios.com</span></div>
                            <div><FaMapMarkerAlt /> <span>Santa Cruz, Bolivia</span></div>
                        </div>
                    </div>
                </div>

                <div className="inferior-footer">
                    <p>© 2025 Miguel Studios. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
