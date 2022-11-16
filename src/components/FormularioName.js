function FormularioName() {
    return (
        <input 
                type="text" 
                name="name" 
                placeholder="Name *" 
                title="Name only accept characters or space" 
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" 
                required />
    );
}

export default FormularioName;