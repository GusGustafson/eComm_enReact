import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Navigator from './Navigator/Navigator';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <>

    <Header/>
    <Navigator/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout