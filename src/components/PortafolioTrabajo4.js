import "../style.css";
import selectorEmojis from "../assets/selector-emojis.jpg";

function PortafolioTrabajo4() {


    return (
        <a href="https://robertomaz.github.io/selector-emojis/" target="_blank" rel="noopener noreferrer" className="portfolio-card">
            <img src={selectorEmojis} alt="selector-emojis" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Selector de Emojis</h3>
                    <p>Un selector de emojis para agregar a una web.</p>
                </div>
            </aside>
        </a>
    );
}

export default PortafolioTrabajo4;