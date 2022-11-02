import "../style.css";
import ButtonLenguage from "./ButtonLenguage";

function Nav({state, setNone}) {

    function handleClick(e){
        if(e.target.matches("a")) e.currentTarget.classList.remove("is-active");
        setNone(!state); 
    }
    return ( 
        <nav className={state ? "menu" : "menu is-active"} onClick={handleClick}>
            <a href="#inicio">Home</a>
            <a href="#acerca">About me</a>
            <a href="#servicios">Services</a>
            <a href="#portafolio">My work</a>
            <a href="#testimonios">Testimonials</a>
            <a href="#contacto">Contact</a>
            <ButtonLenguage />
        </nav>
);
}

export default Nav;