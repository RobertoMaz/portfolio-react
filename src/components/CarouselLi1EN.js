import "../style.css";
import customer1 from "../assets/customer-1.jpg";

function CarouselLi1EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer1} alt="customer-1" />
            <blockquote className="text-lg-center">
                Texto en ingles
            </blockquote>
            <h3 className="text-first-color">Jorge</h3>
            
        </li>
    );
}

export default CarouselLi1EN;