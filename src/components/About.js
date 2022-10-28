import AcercaArt1 from "./AcercaArt1";
import "../style.css";
import AcercaArt2 from "./AcercaArt2";
import AcercaArt3 from "./AcercaArt3";
import AboutArt1 from "./AboutArt1";
import AboutArt3 from "./AboutArt3";


function About() {


    return (
        <section id="acerca" className="about section container full-lg-screen">
            <AboutArt1 />
            <AcercaArt2 />
            <AboutArt3 />
            
        </section>
    );
}

export default About;