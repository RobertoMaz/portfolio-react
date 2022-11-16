import "../style.css";
import customer3 from "../assets/customer-1.jpg";

function CarouselLi3EN() {

    return (
        <li className="slide">
            <img className="avatar" src={customer3} alt="customer-3" />
            <blockquote className="text-lg-center">
                "Apart from showing great dedication and commitment in the project developing, his friendly personality helps to unite the team and become easily to work together. Also, i have seen in him a remarkable capability at the time of learning and exploring new technologies."           
            </blockquote>
            <h3 className="text-first-color">Mariano</h3>
            <h6>Web developer </h6>
            <h6>Rol actual: Senior Front-End en un start-up</h6>
        </li>
    );
}

export default CarouselLi3EN;