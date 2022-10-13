import AcercaArt1 from "./AcercaArt1";
import "../style.css";
import AcercaArt2 from "./AcercaArt2";
import AcercaArt3 from "./AcercaArt3";


function Acerca() {


    return (
        <section id="acerca" className="about section container full-lg-screen">
            <AcercaArt1 />
            <AcercaArt2 />
            <AcercaArt3 />
            
        </section>
    );
}

export default Acerca;