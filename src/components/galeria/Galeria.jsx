import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import ServiciosVideos from '../../assets/videos/servicios.mp4';
import StartupVideo from '../../assets/videos/startup.mp4';
import EmpresaTech from '../../assets/videos/7580283-uhd_4096_2160_25fps.mp4';
import Portada1 from '../../assets/images/portada1.png';
import Portada2 from '../../assets/images/portada2.png';
import Portada3 from '../../assets/images/portada3.png';
import './galeria.css';

const Galeria = () => {
    const videoCategorias = {
        empresariales: [
            {
                id: 1,
                titulo: "Promocional Empresa Tech",
                videoSrc: EmpresaTech,
                orientation: "horizontal",
                thumbnail: Portada1,
            },
            {
                id: 2,
                titulo: "Corporativo Startup",
                videoSrc: StartupVideo,
                orientation: "vertical",
                thumbnail: Portada3,
            },
            {
                id: 3,
                titulo: "Presentación Servicios",
                videoSrc: ServiciosVideos,
                orientation: "horizontal",
                thumbnail: Portada2,
            },
        ],
        moda: [
            {
                id: 4,
                titulo: "Sesión Fashion Week",
                videoSrc: ServiciosVideos,
                orientation: "vertical",
                thumbnail: Portada2,
            },
            {
                id: 5,
                titulo: "Colección Primavera",
                videoSrc: StartupVideo,
                orientation: "horizontal",
                thumbnail: Portada3,
            },
            {
                id: 6,
                titulo: "Desfile Nocturno",
                videoSrc: EmpresaTech,
                orientation: "vertical",
                thumbnail: Portada1,
            },
        ],
        eventos: [
            {
                id: 7,
                titulo: "Boda Jardín Botánico",
                videoSrc: StartupVideo,
                orientation: "horizontal",
                thumbnail: Portada3,
            },
            {
                id: 8,
                titulo: "Conferencia Tech",
                videoSrc: EmpresaTech,
                orientation: "vertical",
                thumbnail: Portada1,
            },
            {
                id: 9,
                titulo: "Festival Musical",
                videoSrc: ServiciosVideos,
                orientation: "horizontal",
                thumbnail: Portada2,
            },
        ],
    };

    const [categoriaActiva, setCategoriaActiva] = useState("empresariales");
    const referenciasVideo = useRef({});

    const manejarHoverVideo = (videoId, encendido) => {
        const elementoVideo = referenciasVideo.current[videoId];
        if (!elementoVideo) return;
        if (encendido) {
            elementoVideo.play();
        } else {
            elementoVideo.pause();
            elementoVideo.currentTime = 0;
        }
    };

    return (
        <section id="gallery" className="galeria">
            <div className="contenedor">
                <h2 className="titulo-galeria">
                    <span>GALERÍA DE VIDEOS</span>
                </h2>

                <div className="botones-categorias">
                    {Object.keys(videoCategorias).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategoriaActiva(cat)}
                            className={`boton-categoria ${categoriaActiva === cat ? "activo" : ""
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="rejilla-videos">
                    {videoCategorias[categoriaActiva].map((video) => {

                        const esVertical = video.orientation === "vertical";
                        const paddingTop = esVertical ? "30%" : "20%";

                        return (
                            <div
                                key={video.id}
                                className="tarjeta-video"
                                onMouseEnter={() => manejarHoverVideo(video.id, true)}
                                onMouseLeave={() => manejarHoverVideo(video.id, false)}>

                                <div className="miniatura-video" style={{ paddingTop }}>
                                    <img src={video.thumbnail} alt={video.titulo} className="thumb-img" />

                                    <video
                                        ref={(el) => (referenciasVideo.current[video.id] = el)}
                                        src={video.videoSrc}
                                        muted loop preload="metadata" className="thumb-video"
                                    />

                                    <div className="superposicion-video">
                                        <div className="circulo-play">
                                            <FaPlay color="#fff" size={16} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className={`titulo-video ${esVertical ? "vertical-video" : ""}`}>
                                    {video.titulo.toUpperCase()}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Galeria;
