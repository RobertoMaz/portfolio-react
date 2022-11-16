import "../style.css";
import customer4 from "../assets/customer-2.jpg";

function CarouselLi4EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer4} alt="customer-4" />
            <blockquote className="text-lg-center">
               "Robert is a really committed with his work and he helped a lot in the intellectual development of a new digitalization proccess"
            </blockquote>
            <h3 className="text-first-color">Nahir</h3>
            <h6>Licenciada en planificación logística</h6>
            <h6>Rol actual: Analista comercial en empresa de logística</h6>
        </li>
    );
}

export default CarouselLi4EN;