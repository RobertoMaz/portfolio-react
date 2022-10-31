function FormularioNombre() {
    return (
        <input 
                type="text" 
                name="name" 
                placeholder="Ingresa tu nombre *" 
                title="Nombre sólo acepta letras y espacios en blanco" 
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" 
                required />
    );
}

export default FormularioNombre;