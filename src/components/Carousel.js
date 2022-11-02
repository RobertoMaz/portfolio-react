import { useContext } from "react";
import "../style.css";
import CarouselDot from "./CarouselDot";
import CarouselInputs from "./CarouselInputs";
import CarouselUl from "./CarouselUl";
import LenguageContext from "./LenguageContext";

function Carousel() {

    const lenguage = useContext(LenguageContext);

    return (
        <>
            <section id="testimonios" className="testimonials">
                <article className="hero-image-carousel">
                    <aside className="hero-image-opacity-carousel">
                        <div className="hero-image-content full-lg-screen test-top">
                            <h2 className="section-title">
                                {lenguage.lenguage ? "Testimonials from my partners" : "Testimonios de mis compañeros..."}
                            </h2>
                            <div className="container">
                                <article className="carousel">
                                    <CarouselInputs />
                                    <CarouselUl lenguage={lenguage.lenguage}/>
                                    <CarouselDot />
                                </article>
                            </div>
                        </div>
                    </aside>
                </article>
            </section>
        </>
    );
}

export default Carousel;