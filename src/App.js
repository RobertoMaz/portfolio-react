import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css"


function App() {
  return (
    <div className="App">
      <header className="header">
        <Header className="header" />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
