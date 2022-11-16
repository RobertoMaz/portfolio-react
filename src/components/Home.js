import "../style.css";


function Home() {
    return (
        <section id="inicio" className="home">
            <article className="hero-image" >
                <aside className="hero-image-opacity" >
                    <div className="hero-image-content">
                        <h2 className="hero-image-title" >
                            Welcome to
                            <br />Roberto Mazzarello's
                            <br /> web site
                        </h2>
                        <a href="#contacto" className="btn">CONTACT</a>
                    </div>
                </aside>
            </article>
        </section>
    );
}

export default Home;