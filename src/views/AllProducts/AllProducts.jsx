import Card from "../../components/Card";
import { card } from "../../components/Card/CardsDummy";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
            <h1>Los mejores gadgets de octubre</h1>
            <p>Consigue ahora los mejores productos de My Releevant Store</p>
            <Link to="/gadgets" className="button">Ver ofertas de gadgets</Link>
            {/* Aquí arriba tengo que poner la barra diagonal porque este botón está dentro de AllProducts.jsx, no de otro componente.*/}
            {/* Y esa barra es una orden imperativa para decirle "ve a gadgets" (si no la pongo, va a "allproducts/gadgets").*/}
        </div>
      </div>
      <main className="container d-flex justify-content-evenly mt-5">
        <div>
        <h2>Gadgets de cocina</h2>
        <p>Consigue ahora los mejores productos de My Releevant Store</p>
        </div>
        <div>
          <Link to="/gadgets" className="button button-secundario">Ver todos</Link>
        </div>
      </main>
      <Card cards={card} />
      <section className="container testimonios d-flex mt-5">
        <div>
            <h3>Testimonios de clientes</h3>
            <p>Testimonios de clientes muy interesantes y tal y tal. Y seguimos aún con testimonios de clientes muy interesantes y tal y tal. Y seguimos aún con testimonios de clientes muy interesantes y tal y tal...</p>
            <a href="#" name="verTestimonios" className="button button-secundario">Ver todos</a>
        </div>
        <div className="caja">
            <p>Muchos de los que viven merecen morir y algunos de los que mueren merecen la vida. Muchos de los que viven merecen morir y algunos de los que mueren merecen la vida.</p>
            <cite>Gandalf Mithrandir</cite>
            <div className="rating">
                <i className="bi bi-star-fill main-color"></i>
                <i className="bi bi-star-fill main-color"></i>
                <i className="bi bi-star-fill main-color"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
