import { useContext } from "react";
import "../style.css";
import Gracias from "./Gracias";
import LenguageContext from "./LenguageContext";
import Thanks from "./Thanks";


function ModalGracias() {

    const lenguage = useContext(LenguageContext);

    return (
        <article id="gracias" className="modal">
            <div className="modal-content">
                {lenguage.lenguage ? <Thanks /> : <Gracias />}
            </div>
        </article>
    );
}

export default ModalGracias;