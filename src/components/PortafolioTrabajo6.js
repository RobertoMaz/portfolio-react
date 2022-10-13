import "../style.css";
import proyecto6 from "../assets/portfolio-6.jpg";

function PortafolioTrabajo6() {


    return (
        <a href="#trabajo-6" className="portfolio-card">
            {/* target="_blank" rel="noopener noreferrer" */}
            <img src={proyecto6} alt="trabajo6" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Proyecto 6</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure expedita omnis officia accusantium voluptate excepturi modi optio eligendi dolor, nesciunt aperiam explicabo enim delectus esse repudiandae adipisci eaque obcaecati?</p>
                </div>
            </aside>
        </a>
);
}

export default PortafolioTrabajo6;