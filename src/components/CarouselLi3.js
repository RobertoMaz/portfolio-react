import "../style.css";
import customer3 from "../assets/customer-1.jpg";

function CarouselLi3() {

    return (
        <li className="slide">
            <img className="avatar" src={customer3} alt="customer-3" />
            <blockquote className="text-lg-center">
                "Además de demostrar gran dedicación y compromiso en el desarrollo de proyectos, la personalidad amigable de Roberto lo llevan a unir al equipo y a facilitar el trabajo en los momentos difíciles. También he visto en él una destacable capacidad para aprender y explorar nuevas tecnologías"
            </blockquote>
            <h3 className="text-first-color">Mariano</h3>
            <h6>Desarrolador Web</h6>
            <h6>Rol actual: Senior Front-End en un start-up</h6>
        </li>
    );
}

export default CarouselLi3;