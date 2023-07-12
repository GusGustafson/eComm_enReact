import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./views/Home";
import AllProducts from "./views/AllProducts";
import ProductDetails from "./views/ProductDetails";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";
import Policy from "./views/Policy";
import Gadgets from "./views/Gadgets";
import Ofertas from "./views/Ofertas";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound/NotFound";
import AuthContextProvider from "./contexts/AuthContext";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Layout withUser />}>
              <Route element={<Header />} />
              <Route index element={<Home />} />
            </Route>
          </Route>

          {/* Rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route element={<Layout withUser />}>
              <Route path="allproducts">
                <Route index element={<AllProducts />} />
                <Route path=":id" element={<ProductDetails />} />
              </Route>

              <Route path="nosotros" element={<Nosotros />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="policy" element={<Policy />} />
              <Route path="gadgets" element={<Gadgets />} />
              <Route path="ofertas" element={<Ofertas />} />
              <Route path="carrito" element={<Carrito />} />
            </Route>
          </Route>

          {/* <Route path="/carrito" element={<Layout />}>
          <Route path="carrito" element={<Carrito />} />
        </Route>
        // VER NOTA ABAJO */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

// Si metemos otro elemento (por ejemplo, el encabezado especial del carrito) fuera del padre principal (o sea,
// debajo de la línea 34 "</Route>"), solo aparecería en la página donde lo llamemos (ya no saldría en todas las páginas).
// RECUERDA: los padres acaban en ">" y envuelven hasta su etiqueta de cierre, y los hijos (y los elementos independientes) acaban en "/>".
