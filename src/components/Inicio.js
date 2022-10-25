import "../style.css";


function Inicio() {
    return (
        <section id="inicio" className="home">
            <article className="hero-image" >
                <aside className="hero-image-opacity" >
                    <div className="hero-image-content">
                        <h2 className="hero-image-title" >
                            Bienvenidos 
                            al sitio de
                            <br />Roberto Mazzarello
                        </h2>
                        <a href="#contacto" className="btn">CONTÁCTAME</a>
                    </div>
                </aside>
            </article>
        </section>
    );
}

export default Inicio;