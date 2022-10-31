import "../style.css";
import ServiciesArt1 from "./ServicesArt1";
import ServiciesArt2 from "./ServicesArt2";
import ServiciesArt3 from "./ServicesArt3";
import ServiciosArt1 from "./ServiciosArt1";
import ServiciosArt2 from "./ServiciosArt2";
import ServiciosArt3 from "./ServiciosArt3";



function Services() {


    return (
        <section id="servicios" className="services section bg-gray-light full-lg-screen">
        <div className="container">
            <h2 className="section-title">What can I offer?</h2>
            <ServiciesArt1 />
            <ServiciesArt2 />
            <ServiciesArt3 />
        </div>
    </section>
    );
}

export default Services;