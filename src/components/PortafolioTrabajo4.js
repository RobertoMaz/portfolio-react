import "../style.css";
import selectorEmojis from "../assets/selector-emojis.jpg";

function PortafolioTrabajo4() {


    return (
        <a href="https://robertomaz.github.io/selector-emojis/" target="_blank" rel="noopener noreferrer" className="portfolio-card">
            <img src={selectorEmojis} alt="selector-emojis" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Selector de Emojis</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure expedita omnis officia accusantium voluptate excepturi modi optio eligendi dolor, nesciunt aperiam explicabo enim delectus esse repudiandae adipisci eaque obcaecati?</p>
                </div>
            </aside>
        </a>
    );
}

export default PortafolioTrabajo4;