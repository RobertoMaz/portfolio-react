import "../style.css";
import customer1 from "../assets/customer-1.jpg";

function CarouselLi1() {

    return (
        <li className="slide">
            <img className="avatar" src={customer1} alt="customer-1" />
            <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequuntur culpa itaque rem non ipsam sapiente quidem in? Aliquam, totam veniam maxime quo quaerat consectetur officiis libero quia nam aliquid.</blockquote>
            <h3 className="text-first-color">nombre del cliente</h3>
            <h6>puesto del cliente</h6>
        </li>
    );
}

export default CarouselLi1;