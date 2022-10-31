import "../style.css";
import Gracias from "./Gracias";
import Thanks from "./Thanks";


function ModalGracias({lenguage}) {

    return (
        <article id="gracias" className="modal">
            <div className="modal-content">
                {lenguage ? <Thanks /> : <Gracias />}
            </div>
        </article>
    );
}

export default ModalGracias;