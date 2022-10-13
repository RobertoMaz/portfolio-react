import "../style.css";
import CarouselLi1 from "./CarouselLi1";
import CarouselLi2 from "./CarouselLi2";
import CarouselLi3 from "./CarouselLi3";
import CarouselLi4 from "./CarouselLi4";

function CarouselUl() {


    return (
        <ul className="slides">
            <CarouselLi1 />
            <CarouselLi2 />
            <CarouselLi3 />
            <CarouselLi4 />
        </ul>
    );
}

export default CarouselUl;