import "../style.css";
import customer3 from "../assets/customer-1.jpg";

function CarouselLi3() {

    return (
        <li className="slide">
            <img className="avatar" src={customer3} alt="customer-3" />
            <blockquote className="text-lg-center">
            "Roberto es un compañero muy comprometido y fue de mucha ayuda colaborando en el desarrollo intelectual de un nuevo módulo de digitalización de documentación"
            </blockquote>
            <h3 className="text-first-color">nombre del cliente</h3>
            <h6>puesto del cliente</h6>
        </li>
    );
}

export default CarouselLi3;