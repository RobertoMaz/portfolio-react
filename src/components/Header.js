import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import Nav from "./Nav";
import "../style.css";
import { useState } from "react";

function Header({lenguage, setLenguage}) {

    const [none, setNone] = useState(true);

    function handleClick(){
        setNone(!none);
    }

    return (
        <section className="container">
            <Logo />
            <ButtonNav onClick={handleClick} state={none}/>
            <Nav 
                state={none} 
                setNone={setNone}
                lenguage={lenguage}
                setLenguage={setLenguage}
                />
        </section>
    );
}

export default Header;