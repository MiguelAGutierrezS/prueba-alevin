import React from 'react';

import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import SobreNosotros from '../components/sobreNosotros/SobreNosotros';
import Galeria from '../components/galeria/Galeria';
import Contadores from '../components/contenedorSegidores/Contador';
import Servicios from '../components/servicios/Servicios';
import Contactanos from '../components/contactanos/contactanos';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <SobreNosotros />
            <Galeria />
            <Contadores />
            <Servicios />
            <Contactanos />
            <Footer />
        </>
    );
};

export default LandingPage;
