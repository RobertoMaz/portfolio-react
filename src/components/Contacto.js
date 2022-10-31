import "../style.css";
import ContactoCards from "./ContactoCards";
import Formulario from "./Formulario";
import ModalGracias from "./ModalGracias";



function Contacto({lenguage}) {


    return (
        <section id="contacto" className="contact section">
            <div className="container full-lg-screen">
                <h2 className="section-title">
                    {lenguage ? "how can you contact me?" : "¿Como contactarme?"}
                </h2>
                <ContactoCards lenguage={lenguage}/>
                <Formulario lenguage={lenguage}/>
                <ModalGracias lenguage={lenguage}/>
                
                
                
                
            </div>
        </section>
    );
}

export default Contacto;