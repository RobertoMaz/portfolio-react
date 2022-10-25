import "../style.css";
import customer1 from "../assets/customer-1.jpg";

function CarouselLi1() {

    return (
        <li className="slide">
            <img className="avatar" src={customer1} alt="customer-1" />
            <blockquote className="text-lg-center">
                "Roberto es un compañero muy comprometido y fue de mucha ayuda colaborando en el desarrollo intelectual de un nuevo módulo de digitalización de documentación"
            </blockquote>
            <h3 className="text-first-color">Jorge</h3>
            
        </li>
    );
}

export default CarouselLi1;