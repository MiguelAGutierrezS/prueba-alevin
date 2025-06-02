// src/components/contenedorSegidores/Contadores.jsx

import React, { useState, useEffect } from 'react';
import './segidores.css';

const Contadores = () => {
    const [stats, setStats] = useState({
        seguidores: null,
        seguidos: null,
        corazones: null,
        videos: null
    });

    const [loadingTikTok, setLoadingTikTok] = useState(true);
    const [errorTikTok, setErrorTikTok] = useState(null);

    const TIKTOK_USERNAME = 'gutirrezsantallam';

    const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
    const RAPIDAPI_HOST = 'tiktok-api23.p.rapidapi.com';

    const fetchTikTokStats = async () => {
        try {
            setLoadingTikTok(true);
            setErrorTikTok(null);

            const url = `https://${RAPIDAPI_HOST}/api/user/info?uniqueId=${encodeURIComponent(
                TIKTOK_USERNAME
            )}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': RAPIDAPI_KEY,
                    'x-rapidapi-host': RAPIDAPI_HOST
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            console.log('Respuesta completa de TikTok:', data);

            const statsV2 = data?.userInfo?.statsV2;
            if (!statsV2) {
                throw new Error('La respuesta no contiene userInfo.statsV2');
            }

            const seguidores = parseInt(statsV2.followerCount ?? '0', 10);
            const seguidos = parseInt(statsV2.followingCount ?? '0', 10);
            const corazones = parseInt(statsV2.heart ?? '0', 10);
            const videos = parseInt(statsV2.videoCount ?? '0', 10);

            setStats({ seguidores, seguidos, corazones, videos });
        } catch (e) {
            console.error('Error obteniendo datos de TikTok:', e);
            setErrorTikTok(e.message ?? 'Error al cargar datos de TikTok');
        } finally {
            setLoadingTikTok(false);
        }
    };

    useEffect(() => {
        fetchTikTokStats();
    }, []);

    return (
        <section id="counters-section" className="contadores">
            <div className="contenedor">
                <div className="grid-contadores">

                    <div className="tarjeta-contador">
                        <div className="numero-contador">
                            {loadingTikTok
                                ? '...'
                                : errorTikTok
                                    ? '0'
                                    : stats.seguidores !== null
                                        ? stats.seguidores.toLocaleString()
                                        : '0'
                            }
                        </div>
                        <div className="texto-contador">Seguidores</div>
                        {errorTikTok && (
                            <div
                                style={{
                                    marginTop: '4px',
                                    fontSize: '0.75rem',
                                    color: '#f87171',
                                    textAlign: 'center'
                                }}
                            >
                                {errorTikTok}
                            </div>
                        )}
                    </div>

                    <div className="tarjeta-contador">
                        <div className="numero-contador">
                            {loadingTikTok
                                ? '...'
                                : errorTikTok
                                    ? '0'
                                    : stats.seguidos !== null
                                        ? stats.seguidos.toLocaleString()
                                        : '0'
                            }
                        </div>
                        <div className="texto-contador">Siguiendo</div>
                    </div>

                    <div className="tarjeta-contador">
                        <div className="numero-contador">
                            {loadingTikTok
                                ? '...'
                                : errorTikTok
                                    ? '0'
                                    : stats.corazones !== null
                                        ? stats.corazones.toLocaleString()
                                        : '0'
                            }
                        </div>
                        <div className="texto-contador">Corazones</div>
                    </div>

                    <div className="tarjeta-contador">
                        <div className="numero-contador">
                            {loadingTikTok
                                ? '...'
                                : errorTikTok
                                    ? '0'
                                    : stats.videos !== null
                                        ? stats.videos.toLocaleString()
                                        : '0'
                            }
                        </div>
                        <div className="texto-contador">Videos</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contadores;
