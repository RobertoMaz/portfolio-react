import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import "../style.css";
import { useState } from "react";
import BarraDeNav from "./BarraDeNav";

function Encabezado() {

    const [none, setNone] = useState(true);

    function handleClick(){
        setNone(!none);
    }
 
    return (
        <section className="container">
            <Logo />
            <ButtonNav onClick={handleClick} none={none}/>
            <BarraDeNav 
                state={none} 
                setNone={setNone}
            />
        </section>
    );
}

export default Encabezado;