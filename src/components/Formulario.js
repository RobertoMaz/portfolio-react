import "../style.css";
import { useState } from "react";
import Loader from "./Loader";
import FormularioName from "./FormularioName";
import FormularioNombre from "./FormularioNombre";
import FormularioEmail from "./FormularioEmail";
import FormularioCorreo from "./FormularioCorreo";
import FormularioComments from "./FormularioComments";
import FormularioComentarios from "./FormularioComentarios";

function Formulario({lenguage}) {

    const [loader, setLoader] = useState("none");

    function handleSubmit(e){
        e.preventDefault();
        setLoader("");

        fetch("https://formsubmit.co/ajax/rjmazzarello@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then((res) =>(res.ok ? res.json() : Promise.reject(res)) )
        .then(json => {
                window.location.hash = "#gracias";             
            e.target.reset();
        })
        .catch((err) => {
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente.";
            alert(`Nose pudo enviar el comentario.\nError ${err.status}: ${message}.`);
            e.target.reset();
        }).finally(() => {
            setLoader("none");
            setTimeout(() => {
                window.location.hash = "#cerrar";
            }, 3000)
        });

    }

    return (
        <form 
            onSubmit={handleSubmit}
            action="https://formsubmit.co/rjmazzarello@gmail.com" 
            method="POST" 
            className="contact-form box-shadow-1">

            {lenguage 
                ?
                    <>
                        <FormularioName />
                        <FormularioEmail />
                        <FormularioComments />
                    </>
                : 
                    <>
                        <FormularioNombre />
                        <FormularioCorreo />
                        <FormularioComentarios />
                    </>
            
            }
            
            
            <input type="submit" className="btn" value={lenguage ? "SEND MESSAGE" : "ENVIAR MENSAJE"} />
            <Loader loader={loader}/>
        </form>
    );
}

export default Formulario;