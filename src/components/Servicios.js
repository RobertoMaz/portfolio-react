import "../style.css";
import ServiciosArt1 from "./ServiciosArt1";
import ServiciosArt2 from "./ServiciosArt2";
import ServiciosArt3 from "./ServiciosArt3";
import ServiciosArt4 from "./ServiciosArt4";
import ServiciosArt5 from "./ServiciosArt5";


function Servicios() {


    return (
        <section id="servicios" className="services section bg-gray-light full-lg-screen">
        <div className="container">
            <h2 className="section-title">¿Qué te ofrezco?</h2>
            <ServiciosArt1 />
            <ServiciosArt2 />
            <ServiciosArt3 />
            <ServiciosArt4 />
            <ServiciosArt5 />
        </div>
    </section>
    );
}

export default Servicios;