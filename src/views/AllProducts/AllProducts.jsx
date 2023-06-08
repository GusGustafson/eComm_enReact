import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import Card from "../../components/Card";
import { card } from "../../components/Card/CardsDummy";
import Section from "../../components/Section";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navigator />
      <main className="container">
        <h2>Gadgets de cocina</h2>
        <p>Consigue ahora los mejores productos de My Releevant Store</p>
        <a href="gadgets.html" name="gadgets" className="button button-secundario">Ver todos</a>
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
      <Section />
      <Footer />
    </>
  );
}

export default Home;
