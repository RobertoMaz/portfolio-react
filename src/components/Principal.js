import Acerca from "./Acerca";
import "../style.css";
import Inicio from "./Inicio";
import Servicios from "./Servicios";
import Portafolio from "./Portafolio";
import Carousel from "./Carousel";
import Contacto from "./Contacto";
import CarouselReact from "./CarouselReact";


function Principal() {

  

    return ( 
        <>
            <Inicio />
            <Acerca />
            <Servicios />
            <Portafolio />
            {/* <Carousel /> */}
            {/* <CarouselReact /> */}
            <Contacto />
        </>
    );
}

export default Principal;