import "../style.css";
import ContactoEmail from "./ContactoEmail";
import ContactoSocialMedia from "./ContactoSocialMedia";
import ContactoUbicacion from "./ContactoUbicacion";


function ContactoCards() {
 

    return (
        <article className="contact-cards">
            <ContactoUbicacion />
            <ContactoEmail />
            <ContactoSocialMedia />         
        </article>
    );
}

export default ContactoCards;