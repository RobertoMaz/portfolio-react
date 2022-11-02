import { useState } from "react";
import Encabezado from "./components/Encabezado";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LenguageContext from "./components/LenguageContext";
import Main from "./components/Main";
import Principal from "./components/Principal";
import "./style.css"


function App() {

  const [lenguage, setLenguage] = useState(false);





  return (

    <LenguageContext.Provider value={{lenguage, setLenguage}}>

      <div className="App">
        <header className="header">
          {
            lenguage 
            ? <Header 
                className="header" 
              />
            : <Encabezado 
                className="header"
              />
          } 
        </header>
        {
          lenguage 
            ? <Main />
            : <Principal />
        }
        <Footer />
      </div>
    </LenguageContext.Provider>
  );
}

export default App;
