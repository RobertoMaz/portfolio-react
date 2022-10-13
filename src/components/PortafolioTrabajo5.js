import "../style.css";
import proyecto5 from "../assets/portfolio-5.jpg";

function PortafolioTrabajo5() {


    return (
        <a href="#trabajo-5"  className="portfolio-card">
            {/* target="_blank" rel="noopener noreferrer" */}
            <img src={proyecto5} alt="trabajo5" />
            <aside className="portfolio-card-info">
                <div>
                    <h3>Proyecto 5</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure expedita omnis officia accusantium voluptate excepturi modi optio eligendi dolor, nesciunt aperiam explicabo enim delectus esse repudiandae adipisci eaque obcaecati?</p>
                </div>
            </aside>
        </a>
);
}

export default PortafolioTrabajo5;