import "../style.css";
import ContactoEmail from "./ContactoEmail";
import ContactoSocialMedia from "./ContactoSocialMedia";
import ContactoTelefono from "./ContactoTelefono";
import ContactoUbicacion from "./ContactoUbicacion";


function ContactoCards() {


    return (
        <article className="contact-cards">
            <ContactoUbicacion />
            <ContactoTelefono />
            <ContactoEmail />
            <ContactoSocialMedia />
            
            
            
        </article>
    );
}

export default ContactoCards;