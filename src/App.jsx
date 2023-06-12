import "./App.css";
import Home from "./views/Home";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Card from "./components/Card";
// import Section from "./components/Section";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// Todo esto de arriba lo quitamos de aquí porque nos lo llevamos a la página de inicio "Home". También la siguiente de abajo.

// import { card } from "./components/Card/CardsDummy";
// Esta línea la añadimos para IMPORTAR el array "card" (DEBE IR ENTRE LLAVES) que EXPORTAMOS desde el archivo "CardsDummy.js".
// De esta forma, hacemos que este "App.jsx" no esté tan congestionado de variables, arrays y objetos.

// PEEERO como ahora ya aprendimos a usar react-router-dom, ahora metemos las "import" con las referencias a las distintas
// "páginas HTML" para usarlas con react-router-dom:
import AllProducts from "./views/AllProducts";
import ProductDetails from "./views/ProductDetails";
import Layout from "./components/Layout";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";
import Gadgets from "./views/Gadgets";
import Ofertas from "./views/Ofertas";
import Policy from "./views/Policy";
import Carrito from "./views/Carrito";

import { Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allproducts" element={<AllProducts />} />
          <Route path="productDetails" element={<ProductDetails />} />
          <Route path="nosotros" element={<Nosotros />}/>
          <Route path="contacto" element={<Contacto />}/>
          <Route path="policy" element={<Policy />} />
          <Route path="gadgets" element={<Gadgets />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
        {/* <Header />
        <Navbar />
        <Main />
        <Card cards={card} />
        <Section />
        <Footer />
        <Button />
        // Todo esto de arriba lo quitamos de aquí porque nos lo llevamos a la página de inicio "Home". */}
      </Routes>
    </>
  );
}

export default App;
