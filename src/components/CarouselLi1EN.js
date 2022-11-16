import "../style.css";
import customer1 from "../assets/customer-1.jpg";

function CarouselLi1EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer1} alt="customer-1" />
            <blockquote className="text-lg-center">
                "Robert is an excellent partner. He is always ready to help and colaborate. He tries to superate himself all the time.  His social skills are really good. He has a very sociable profile"
            </blockquote>
            <h3 className="text-first-color">Jorge</h3>
            <h6>bachelor in administration</h6>
            <h6>Rol actual: Jefe de Administración</h6>
            
        </li>
    );
}

export default CarouselLi1EN;