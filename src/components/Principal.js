import Acerca from "./Acerca";
import "../style.css";
import Inicio from "./Inicio";
import Servicios from "./Servicios";
import Portafolio from "./Portafolio";
import Carousel from "./Carousel";
import Contacto from "./Contacto";


function Principal({lenguage}) {

 

    return ( 
        <>
            <Inicio />
            <Acerca />
            <Servicios />
            <Portafolio />
            <Carousel  lenguage={lenguage}/>
            <Contacto lenguage={lenguage}/>
        </>
    );
}

export default Principal;