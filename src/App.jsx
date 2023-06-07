import "./App.css";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Main from "./components/Main";
import Section from "./components/Section";
import Card from "./components/Card";

import { card } from "./components/Card/CardsDummy";
// Esta línea la añadimos para IMPORTAR el array "card" (DEBE IR ENTRE LLAVES) que EXPORTAMOS desde el archivo "CardsDummy.js".
// De esta forma, hacemos que este "App.jsx" no esté tan congestionado de variables, arrays y objetos.

function App() {
  return (
    <>
      <Header />
      <Navigator />
      <Main />
      <Card cards={card} />
      <Section />
    </>
  );
}

export default App;
