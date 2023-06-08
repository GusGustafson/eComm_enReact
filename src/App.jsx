import "./App.css";
import Home from "./views/Home";
import Policy from "./views/Policy";
import AllProducts from "./views/AllProducts";
// import Header from "./components/Header";
// import Navigator from "./components/Navigator";
// import Main from "./components/Main";
// import Card from "./components/Card";
// import Section from "./components/Section";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// Todo esto de arriba lo quitamos de aquí porque nos lo llevamos a la página de inicio "Home". También la siguiente de abajo.


// import { card } from "./components/Card/CardsDummy";
// Esta línea la añadimos para IMPORTAR el array "card" (DEBE IR ENTRE LLAVES) que EXPORTAMOS desde el archivo "CardsDummy.js".
// De esta forma, hacemos que este "App.jsx" no esté tan congestionado de variables, arrays y objetos.

function App() {
  return (
    <>
      <Home />
      <Policy />
      <AllProducts />
      {/* <Header />
      <Navigator />
      <Main />
      <Card cards={card} />
      <Section />
      <Footer />
      <Button />
      // Todo esto de arriba lo quitamos de aquí porque nos lo llevamos a la página de inicio "Home". */}
    </>
  );
}

export default App;
