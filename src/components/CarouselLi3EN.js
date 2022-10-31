import "../style.css";
import customer3 from "../assets/customer-1.jpg";

function CarouselLi3EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer3} alt="customer-3" />
            <blockquote className="text-lg-center">
            texto ingles 3
            
            </blockquote>
            <h3 className="text-first-color">Mariano</h3>
            <h6>Desarrolador Web Senior </h6>
            <h6>Rol actual: Senior Front-End en un start-up</h6>
        </li>
    );
}

export default CarouselLi3EN;