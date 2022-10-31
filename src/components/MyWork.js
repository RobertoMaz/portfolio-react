import "../style.css";
import PortafolioTrabajo1 from "./PortafolioTrabajo1";
import PortafolioTrabajo2 from "./PortafolioTrabajo2";
import PortafolioTrabajo3 from "./PortafolioTrabajo3";
import PortafolioTrabajo4 from "./PortafolioTrabajo4";
import PortafolioTrabajo5 from "./PortafolioTrabajo5";
import PortafolioTrabajo6 from "./PortafolioTrabajo6";

function MyWork() {


    return (
        <section id="portafolio" className="portfolio section full-lg-screen">
            <div className="container">
                <h2 className="section-title">My Work</h2>
                <PortafolioTrabajo1 />
                <PortafolioTrabajo2 />
                <PortafolioTrabajo3 />
                <PortafolioTrabajo4 />
                <PortafolioTrabajo5 />
                <PortafolioTrabajo6 />
            </div>
        </section>
    );
}

export default MyWork;