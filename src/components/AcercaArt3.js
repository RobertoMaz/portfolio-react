import "../style.css";


function AcercaArt3() {


    return (
        <article>
                <h2 className="text-center text-lg-left">Mis habilidades</h2>
                <div className="progress">
                    <p>
                        <b>Desarrollo <i>Web Frontend</i></b>
                        <b>90%</b>
                    </p>
                    <progress value="90" min="0" max="100"></progress>
                </div>
                <div className="progress">
                    <p>
                        <b>Diseño <i>Web</i></b>
                        <b>70%</b>
                    </p>
                    <progress value="70" min="0" max="100"></progress>
                </div>
                <div className="progress">
                    <p>
                        <b> <i>WPO</i> y ceo</b>
                        <b>40%</b>
                    </p>
                    <progress value="40" min="0" max="100"></progress>
                </div>
                <div className="progress">
                    <p>
                        <b>Ingles</b>
                        <b>intermedio</b>
                    </p>
                    <progress value="50" min="0" max="100"></progress>

                </div>
            </article>
    );
}

export default AcercaArt3;