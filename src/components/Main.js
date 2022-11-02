import "../style.css";
import Carousel from "./Carousel";
import Contacto from "./Contacto";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import MyWork from "./MyWork";




function Main() {

 

    return (
        <>
           
                <Home />
                <About />
                <Services />
                <MyWork />
                
                <Carousel />
                <Contacto />


        </>
    );
}

export default Main;