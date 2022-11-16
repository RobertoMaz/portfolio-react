import "../style.css";
import customer2 from "../assets/customer-2.jpg";

function CarouselLi2EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer2} alt="customer-2" />
            <blockquote className="text-lg-center">
                "Robert helped in some of the news documentations procceses. Now we are working together in the development of an assintance portal and personal check-in to add in our ERP"
            </blockquote>
            <h3 className="text-first-color">Francesca</h3>
            <h6>bachelor in administration</h6>
            <h6>Rol actual: Encargada de recursos humanos</h6>
        </li>
    );
}

export default CarouselLi2EN;