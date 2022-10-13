import loaderImg from "../assets/loader.svg";
import "../style.css";


function Loader({loader}) {


    return (
        <div className={`contact-form-loader text-center ${loader}`}>
            <img src={loaderImg} alt="Enviando..." />
        </div>
    );
}

export default Loader;