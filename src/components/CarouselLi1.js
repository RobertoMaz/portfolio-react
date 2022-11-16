import "../style.css";
import customer1 from "../assets/customer-1.jpg";

function CarouselLi1() {

    return (
        <li className="slide">
            <img className="avatar" src={customer1} alt="customer-1" />
            <blockquote className="text-lg-center">
                "Roberto es un excelente profesional, siempre está dispuesto a ayudar y busca superarse constantemente. Sus relaciones interpersonales son muy buenas, tiene un perfil muy sociable"
            </blockquote>
            <h3 className="text-first-color">Jorge</h3>
            <h6>Licenciado en Administración</h6>
            <h6>Rol actual: Jefe de Administración</h6>
            
        </li>
    );
}

export default CarouselLi1;