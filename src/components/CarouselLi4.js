import "../style.css";
import customer4 from "../assets/customer-2.jpg";

function CarouselLi4() {

    return (
        <li className="slide">
            <img className="avatar" src={customer4} alt="customer-4" />
            <blockquote className="text-lg-center">
                "Roberto es un compañero muy comprometido y fue de mucha ayuda colaborando en el desarrollo intelectual de un nuevo módulo de digitalización de documentación"
            </blockquote>
            <h3 className="text-first-color">nombre del cliente</h3>
            <h6>puesto del cliente</h6>
        </li>
    );
}

export default CarouselLi4;