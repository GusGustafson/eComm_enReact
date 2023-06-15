import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
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
// PEEERO como ahora ya aprendimos a usar react-router-dom, ahora sí metemos las "import" con las referencias a las distintas
// "páginas HTML" para usarlas con react-router-dom:
import AllProducts from "./views/AllProducts";
import ProductDetails from "./views/ProductDetails";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";
import Policy from "./views/Policy";
import Gadgets from "./views/Gadgets";
import Ofertas from "./views/Ofertas";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound/NotFound";
import "./App.css";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout withUser />}>
          <Route element={<Header />} />
          <Route index element={<Home />} />

          <Route path="allproducts">
            <Route index element={<AllProducts />} />
            <Route path=":id" element={<ProductDetails />} />
            {/* <Route path="productDetails" element={<ProductDetails />} /> */}
          </Route>

          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="policy" element={<Policy />} />
          <Route path="gadgets" element={<Gadgets />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>

        {/* <Route path="/carrito" element={<Layout />}>
          <Route path="carrito" element={<Carrito />} />
        </Route> */}

        <Route path="*" element={<NotFound />}/>
      </Routes>
  );
}

// Si metemos otro elemento (por ejemplo, el encabezado especial del carrito) fuera del padre principal (o sea,
// debajo de la línea 48 "</Route>"), solo aparecería en la página donde lo llamemos (ya no saldría en todas las páginas).
// RECUERDA: los padres acaban en ">" y envuelven hasta su etiqueta de cierre, y los hijos (y los elementos independientes) acaban en "/>".