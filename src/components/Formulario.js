import "../style.css";
import { useState } from "react";
import Loader from "./Loader";

function Formulario() {

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

            <input 
                type="text" 
                name="name" 
                placeholder="Ingresa tu nombre *" 
                title="Nombre sólo acepta letras y espacios en blanco" 
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" 
                required />
            <input 
                type="email" 
                name="email" 
                placeholder="Ingresa tu correo *" 
                title="Ingrese un correo valido" 
                pattern="^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" 
                required />
            <textarea 
                name="comments" 
                cols="50" 
                rows="10" 
                placeholder="Dejame tus comentarios *" 
                required />
            <input type="submit" className="btn" value="ENVIAR MENSAJE" />
            <Loader loader={loader}/>
        </form>
    );
}

export default Formulario;