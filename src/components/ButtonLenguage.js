function ButtonLenguage({setLenguage, lenguage, onClick }) {

    function onClick(){
        setLenguage(!lenguage);
    }

    return (
        <button 
            className="btn-lenguage"
            onClick={onClick}
        >ES / EN</button>
    );
}

export default ButtonLenguage;