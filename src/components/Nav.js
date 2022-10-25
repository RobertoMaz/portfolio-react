import "../style.css";

function Nav({state, setNone}) {

    function handleClick(e){
        if(e.target.matches("a")) e.currentTarget.classList.remove("is-active");
        setNone(!state);
    }
    return ( 
        <nav className={state ? "menu" : "menu is-active"} onClick={handleClick}>
            <a href="#inicio">Inicio</a>
            <a href="#acerca">Acerca de mi</a>
            <a href="#servicios">Servicios</a>
            <a href="#portafolio">Trabajos</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
        </nav>
);
}

export default Nav;