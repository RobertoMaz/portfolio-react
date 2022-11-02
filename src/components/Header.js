import ButtonNav from "./ButtonNav";
import Logo from "./Logo";
import Nav from "./Nav";
import "../style.css";
import { useState } from "react";

function Header() {

    const [none, setNone] = useState(false);

    function handleClick(){
        setNone(!none);
    }

    return (
        <section className="container">
            <Logo />
            <ButtonNav none={none} onClick={handleClick}/>
            <Nav 
                state={none} 
                setNone={setNone}
            />
        </section>
    );
}

export default Header;