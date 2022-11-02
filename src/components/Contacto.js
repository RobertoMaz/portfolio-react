import { useContext } from "react";
import "../style.css";
import ContactoCards from "./ContactoCards";
import Formulario from "./Formulario";
import LenguageContext from "./LenguageContext";
import ModalGracias from "./ModalGracias";



function Contacto() {

    const lenguage = useContext(LenguageContext);

    return (
        <section id="contacto" className="contact section">
            <div className="container full-lg-screen">
                <h2 className="section-title">
                    {lenguage.lenguage ? "how can you contact me?" : "¿Como contactarme?"}
                </h2>
                <ContactoCards />
                <Formulario />
                <ModalGracias />
                
                
                
                
            </div>
        </section>
    );
}

export default Contacto;