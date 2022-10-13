import clima from "../assets/clima.jpg";
import "../style.css";

function PortafolioTrabajo2() {


    return (
        <a href="https://robertomaz.github.io/clima/" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                    <img src={clima} alt="clima" />
                    <aside className="portfolio-card-info">
                        <div>
                            <h3>Clima</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure expedita omnis officia accusantium voluptate excepturi modi optio eligendi dolor, nesciunt aperiam explicabo enim delectus esse repudiandae adipisci eaque obcaecati?</p>
                        </div>
                    </aside>
                </a>
    );
}

export default PortafolioTrabajo2;