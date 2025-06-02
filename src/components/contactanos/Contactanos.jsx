import React, { useState } from 'react';
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaWhatsapp
} from 'react-icons/fa';
import './contactanos.css';

const Contactanos = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        servicio: '',
        mensaje: ''
    });
    const [retroalimentacion, setRetroalimentacion] = useState('');

    const manejarCambio = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        const mensajeWp = `Hola! Soy ${datos.nombre}. Estoy interesado en ${datos.servicio}. ${datos.mensaje}`;
        const urlWp = `https://wa.me/59173663636?text=${encodeURIComponent(mensajeWp)}`;
        window.open(urlWp, '_blank');
        setRetroalimentacion('¡Redirigiendo a WhatsApp!');
    };

    return (
        <section id="contact" className="contacto">
            <div className="contacto__contenedor">
                <h2 className="contacto__titulo-seccion">
                    <span>ESTOY LISTO PARA ASESORARTE</span>
                </h2>

                <div className="contacto__bloque-formulario">
                    <div className="contacto__caja-formulario">
                        <h3 className="contacto__titulo-formulario">Contáctanos</h3>
                        <form
                            onSubmit={manejarEnvio}
                            className="contacto__formulario"
                        >
                            <div className="contacto__grupo">
                                <label className="contacto__etiqueta">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={datos.nombre}
                                    onChange={manejarCambio}
                                    className="contacto__entrada"
                                    required
                                />
                            </div>

                            <div className="contacto__grupo">
                                <label className="contacto__etiqueta">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={datos.email}
                                    onChange={manejarCambio}
                                    className="contacto__entrada"
                                    required
                                />
                            </div>

                            <div className="contacto__grupo">
                                <label className="contacto__etiqueta">
                                    ¿Qué servicio estás buscando?
                                </label>
                                <select
                                    name="servicio"
                                    value={datos.servicio}
                                    onChange={manejarCambio}
                                    className="contacto__entrada contacto__select"
                                    required
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="Producción de video">
                                        Producción de video
                                    </option>
                                    <option value="Fotografía profesional">
                                        Fotografía profesional
                                    </option>
                                    <option value="Cobertura de eventos">
                                        Cobertura de eventos
                                    </option>
                                    <option value="Creación de marca">
                                        Creación de marca
                                    </option>
                                    <option value="Edición para redes sociales">
                                        Edición para redes sociales
                                    </option>
                                </select>
                            </div>

                            <div className="contacto__grupo">
                                <label className="contacto__etiqueta">
                                    Describe tu proyecto
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={datos.mensaje}
                                    onChange={manejarCambio}
                                    rows="4"
                                    className="contacto__entrada contacto__textarea"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contacto__boton-enviar"
                            >
                                Enviar Mensaje
                            </button>

                            {retroalimentacion && (
                                <p className="contacto__mensaje-retro">
                                    {retroalimentacion}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="contacto__separador"></div>

                <div className="contacto__bloque-inferior">

                    <div className="contacto__caja-redes">
                        <h3 className="contacto__titulo-info">Síguenos en Redes</h3>
                        <div className="contacto__enlaces-redes">
                            <a href="https://www.instagram.com/cds.devs/" className="contacto__tarjeta-red" target='_blank'>
                                <FaInstagram className="contacto__icono-red" />
                                <span>Instagram</span>
                                <small>@miguelstudios</small>
                            </a>
                            <a href="https://www.facebook.com/cds.devs.community/" className="contacto__tarjeta-red" target='_blank'>
                                <FaFacebook className="contacto__icono-red" />
                                <span>Facebook</span>
                                <small>Miguel Studios</small>
                            </a>
                            <a href="https://www.youtube.com/watch?v=jhANTJpSn4I" className="contacto__tarjeta-red" target='_blank'>
                                <FaYoutube className="contacto__icono-red" />
                                <span>YouTube</span>
                                <small>Miguel Studios</small>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contacto__boton-whatsapp-wrapper">
                    <a
                        href="https://wa.me/59173663636"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contacto__boton-whatsapp"
                    >
                        <FaWhatsapp className="contacto__icono-whatsapp" />
                        <span>Chatea con nosotros en WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;
