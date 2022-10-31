import "../style.css";
import ContactoEmail from "./ContactoEmail";
import ContactoSocialMedia from "./ContactoSocialMedia";
import ContactoTelefono from "./ContactoTelefono";
import ContactoUbicacion from "./ContactoUbicacion";


function ContactoCards({lenguage}) {


    return (
        <article className="contact-cards">
            <ContactoUbicacion lenguage={lenguage}/>
            <ContactoTelefono lenguage={lenguage}/>
            <ContactoEmail />
            <ContactoSocialMedia lenguage={lenguage}/>
            
            
            
        </article>
    );
}

export default ContactoCards;