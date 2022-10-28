import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import Nav from "./Nav";
import "../style.css";
import { useState } from "react";
import BarraDeNav from "./BarraDeNav";

function Encabezado({lenguage, setLenguage}) {

    const [none, setNone] = useState(true);

    function handleClick(){
        setNone(!none);
    }

    return (
        <section className="container">
            <Logo />
            <ButtonNav onClick={handleClick} state={none}/>
            <BarraDeNav 
                state={none} 
                setNone={setNone}
                lenguage={lenguage}
                setLenguage={setLenguage}
            />
        </section>
    );
}

export default Encabezado;