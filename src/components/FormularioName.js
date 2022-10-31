function FormularioName() {
    return (
        <input 
                type="text" 
                name="name" 
                placeholder="Put your name *" 
                title="Name only accept characters or space" 
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" 
                required />
    );
}

export default FormularioName;