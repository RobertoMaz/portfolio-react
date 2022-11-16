import "../style.css";
import buscador from "../assets/buscador-de-libros.jpg";

function PortafolioTrabajo1() {


    return (
        <a href="https://robertomaz.github.io/Buscador-de-libros/" target="_blank" rel="noopener noreferrer"  className="portfolio-card">
            <img src={buscador} alt="Buscador-de-libros" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Buscador de libros</h3>
                    <p>Tenemos un buscador de libros en el cual podemos añadir nuevos elementos o eliminarlos, tambien podemos puntuarlos.</p>
                </div>
            </aside>
        </a>
    );
}

export default PortafolioTrabajo1;