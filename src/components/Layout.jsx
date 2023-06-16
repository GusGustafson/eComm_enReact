import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
// import Navbar from './Navbar/Navbar'; // Este Navbar es el que no tiene los dos elementos de la columna derecha ("Mis pedidos" y "Logout").
                                         // Ya no hace falta porque usamos la propiedad "withUser" conn el Navbar2 para mostrar o no esos 2 elementos.
// import Navbar2 from './Navbar2/Navbar2'; // Ya no usamos el "NavBar2" en el Layout porque hay vistas que no muestran el Layout.
import Section from './Section/Section';
import Footer from './Footer/Footer';

export default function Layout() {
// export default function Layout({ withUser }) {
// export default function Layout({ existUserProp }) {
  return (
    <>
    <Header/>
    {/* <Navbar /> */}
    {/* <Navbar2 withUser = {withUser} /> */}
    {/* <Navbar2 existUser = {existUserProp} /> */}
    <Outlet />
    <Section />
    <Footer />
    </>
  );
}

// En la línea 11, "existUserProp" es el valor de la prop que está recibiendo la función "Layout".
// Ese valor es el que debe coincidir con el de la lína 17.
// Y el "existUser" de la línea 17 es el que hay que poner al final de su línea correspondiente en App.jsx.