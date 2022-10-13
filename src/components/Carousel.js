import "../style.css";
import CarouselDot from "./CarouselDot";
import CarouselInputs from "./CarouselInputs";
import CarouselUl from "./CarouselUl";

function Carousel() {


    return (
        <>
            <section id="testimonios" className="testimonials">
                <article className="hero-image-carousel">
                    <aside className="hero-image-opacity-carousel">
                        <div className="hero-image-content full-lg-screen test-top">
                            <h2 className="section-title">Testimonios de mis compañeros...</h2>
                            <div className="container">
                                <article className="carousel">
                                    <CarouselInputs />
                                    <CarouselUl />
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