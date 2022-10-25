import "../style.css";
import ContactoCards from "./ContactoCards";
import Formulario from "./Formulario";
import ModalGracias from "./ModalGracias";


function Contacto() {


    return (
        <section id="contacto" className="contact section">
            <div className="container full-lg-screen">
                <h2 className="section-title">¿Como contactarme?</h2>
                <ContactoCards />
                <Formulario />
                <ModalGracias />
                
            </div>
        </section>
    );
}

export default Contacto;