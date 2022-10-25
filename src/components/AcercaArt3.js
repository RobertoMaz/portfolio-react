import "../style.css";


function AcercaArt3() {


    return (
        <article>
                <h2 className="text-center text-lg-left">Mis habilidades</h2>
                <div className="progress">
                    <p>
                        <b>HTML / CSS</b>
                        
                    </p>
                    <progress value="70" min="0" max="100"></progress>
                </div>
                <div className="progress">
                    <p>
                        <b>JavaScript</b>
                        
                    </p>
                    <progress value="50" min="0" max="100"></progress>
                </div>
                <div className="progress">
                    <p>
                        <b>React</b>
                      
                    </p>
                    <progress value="40" min="0" max="100"></progress>
                </div>
                <div className="progress">
                    <p>
                        <b>GIT / GITHUB</b>
    
                    </p>
                    <progress value="40" min="0" max="100"></progress>

                </div>
                <div className="progress">
                    <p>
                        <b>Bootstrap</b>
    
                    </p>
                    <progress value="30" min="0" max="100"></progress>

                </div>
                <div className="progress">
                    <p>
                        <b>MySql</b>
    
                    </p>
                    <progress value="20" min="0" max="100"></progress>

                </div>
                <div className="progress">
                    <p>
                        <b>Ingles</b>
    
                    </p>
                    <progress value="50" min="0" max="100"></progress>

                </div>
            </article>
    );
}

export default AcercaArt3;