import "../style.css";
import customer2 from "../assets/customer-2.jpg";

function CarouselLi2EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer2} alt="customer-2" />
            <blockquote className="text-lg-center">
                texto ingles 2
            </blockquote>
            <h3 className="text-first-color">Francesca</h3>
            <h6>Licenciada en Administración</h6>
            <h6>Rol actual: Encargada de recursos humanos</h6>
        </li>
    );
}

export default CarouselLi2EN;