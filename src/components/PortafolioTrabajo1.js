import "../style.css";
import buscador from "../assets/buscador-de-libros.jpg";

function PortafolioTrabajo1() {


    return (
        <a href="https://robertomaz.github.io/Buscador-de-libros/" target="_blank" rel="noopener noreferrer"  className="portfolio-card">
            <img src={buscador} alt="Buscador-de-libros" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Buscador de libros</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure expedita omnis officia accusantium voluptate excepturi modi optio eligendi dolor, nesciunt aperiam explicabo enim delectus esse repudiandae adipisci eaque obcaecati?</p>
                </div>
            </aside>
        </a>
    );
}

export default PortafolioTrabajo1;