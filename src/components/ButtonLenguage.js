import { useContext } from "react";
import LenguageContext from "./LenguageContext";

function ButtonLenguage() {

    const lenguage = useContext(LenguageContext);

    function onClick(){
        lenguage.setLenguage(!lenguage.lenguage);
    }

    return (
        <button 
            className="btn-lenguage"
            onClick={onClick}
        >ES / EN</button>
    );
}

export default ButtonLenguage;