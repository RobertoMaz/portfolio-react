function FormularioEmail() {
    return (
        <input 
                type="email" 
                name="email" 
                placeholder="Email *" 
                title="Put a valid email" 
                pattern="^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" 
                required />
    );
}

export default FormularioEmail;