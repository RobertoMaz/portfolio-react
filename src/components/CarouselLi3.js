import "../style.css";
import customer3 from "../assets/customer-1.jpg";

function CarouselLi3() {

    return (
        <li className="slide">
            <img className="avatar" src={customer3} alt="customer-3" />
            <blockquote className="text-lg-center">
            "Roberto es un excelente profesional, siempre está dispuesto a ayudar y busca superarse constantemente. Sus relaciones interpersonales son muy buenas, tiene un perfil muy sociable."
            </blockquote>
            <h3 className="text-first-color">Mariano</h3>
            <h6>Desarrolador Web Senior </h6>
            <h6>Rol actual: Senior Front-End en un start-up</h6>
        </li>
    );
}

export default CarouselLi3;