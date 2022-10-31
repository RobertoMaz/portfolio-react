function FormularioCorreo() {
    return (
        <input 
                type="email" 
                name="email" 
                placeholder="Ingresa tu correo *" 
                title="Ingrese un correo valido" 
                pattern="^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" 
                required />
    );
}

export default FormularioCorreo;