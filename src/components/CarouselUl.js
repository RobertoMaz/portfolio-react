import "../style.css";
import CarouselLi1 from "./CarouselLi1";
import CarouselLi1EN from "./CarouselLi1EN";
import CarouselLi2 from "./CarouselLi2";
import CarouselLi2EN from "./CarouselLi2EN";
import CarouselLi3 from "./CarouselLi3";
import CarouselLi3EN from "./CarouselLi3EN";
import CarouselLi4 from "./CarouselLi4";
import CarouselLi4EN from "./CarouselLi4EN";


function CarouselUl({lenguage}) {


    return (
        <ul className="slides">
            {lenguage 
                ?<>
                    <CarouselLi1EN />
                    <CarouselLi2EN />
                    <CarouselLi3EN />
                    <CarouselLi4EN />
                </>
                :
                <>
                    <CarouselLi1 />
                    <CarouselLi2 />
                    <CarouselLi3 />
                    <CarouselLi4 />
                </>
                
            }
        </ul>
    );
}

export default CarouselUl;