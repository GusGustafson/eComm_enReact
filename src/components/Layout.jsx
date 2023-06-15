import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
// import Navbar from './Navbar/Navbar'; // Este Navbar es el que no tiene los dos elementos de la columna derecha ("Mis pedidos" y "Logout").
import Navbar2 from './Navbar2/Navbar2';
import Section from './Section/Section';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <>
    <Header/>
    {/* <Navbar/> */}
    <Navbar2/>
    <Outlet/>
    <Section/>
    <Footer/>
    </>
  );
}
