import { useState } from "react";
import Encabezado from "./components/Encabezado";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Principal from "./components/Principal";
import "./style.css"


function App() {

  const [lenguage, setLenguage] = useState(false);





  return (
    <div className="App">
      <header className="header">
        {
          lenguage 
          ? <Header 
              className="header" 
              lenguage={lenguage}
              setLenguage={setLenguage}
            />
          : <Encabezado 
              className="header"
              lenguage={lenguage}
              setLenguage={setLenguage}
            />
        } 
      </header>
      {
        lenguage 
          ? <Main lenguage={lenguage}/>
          : <Principal lenguage={lenguage}/>
      }
      <Footer />
    </div>
  );
}

export default App;
