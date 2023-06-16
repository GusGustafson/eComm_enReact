import { useParams } from "react-router-dom";
import Navbar2 from '../../components/Navbar2/Navbar2';
import Button from "../../components/Button";
import check from "../../assets/check.png";

export default function ProductDetails(withUser) {
    const {id} = useParams();

  return (
    <>
      <Navbar2 withUser={withUser}/>
      <main className="container">
        <div className="d-flex">
          <div className="aProduct">
              <img
              src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0"
              alt="producto01"
              name="producto01"
              width="600px" />
          </div>
          <div className="d-flex flex-column mt-5 ms-5">
              <h2>Bicicleta Rock Ridee-{id}</h2>
              <div>
                <p>Los actos generosos no han de ser reprimidos por fríos consejos.</p>
                <p><b>399,50</b> <i className="bi bi-currency-euro"></i></p>
                <input type="number" name="cantidad" min="0" max="10" value="1" />
                <Button buttonClass="button anadir" text="Añadir al carrito" />
                <div className="d-flex mt-3">
                <img src={check} alt="iconoGarantia" name="dosDeGarantia" width="20px" height="20px" />
                <p>Incluye 2 años de garantía</p>
                </div>
              </div>
          </div>
        </div>
        <section>
            <div className="d-flex justify-content-evenly mt-5 mb-5">
                <h4>Características</h4>
                <div className="vr gap-3"></div>
                <h4>Opiniones</h4>
            </div>
            <div className="d-flex gap-5">
            <div className="d-flex flex-column w-75">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae incidunt obcaecati ut non voluptate soluta atque possimus consequatur animi debitis autem, sed alias rem distinctio tenetur at ratione labore tempora.</p>
                <div>
                    <h2>Características del producto</h2>
                    <div className="d-flex">
                    <img src={check} alt="iconoGarantia" name="dosDeGarantia" width="20px" height="20px" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima obcaecati omnis laboriosam consequatur ipsa suscipit voluptatem, aliquid architecto perferendis dolor dolore commodi ex earum facere eius, enim fugiat magni libero.</p>
                    </div>
                    <div className="d-flex">
                    <img src={check} alt="iconoGarantia" name="dosDeGarantia" width="20px" height="20px" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima obcaecati omnis laboriosam consequatur ipsa suscipit voluptatem, aliquid architecto perferendis dolor dolore commodi ex earum facere eius, enim fugiat magni libero.</p>
                    </div>
                    <div className="d-flex">
                    <img src={check} alt="iconoGarantia" name="dosDeGarantia" width="20px" height="20px" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima obcaecati omnis laboriosam consequatur ipsa suscipit voluptatem, aliquid architecto perferendis dolor dolore commodi ex earum facere eius, enim fugiat magni libero.</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Especificaciones</h3>
                <ul>
                    <li>Especificación LoQueSea 1</li>
                    <li>Especificación LoQueSea 2</li>
                    <li>Especificación LoQueSea 3</li>
                    <li>Especificación LoQueSea 4</li>
                    <li>Especificación LoQueSea 5</li>
                    <li>Especificación LoQueSea 6</li>
                    <li>Especificación LoQueSea 7</li>
                    <li>Especificación LoQueSea 8</li>
                    <li>Especificación LoQueSea 9</li>
                </ul>
            </div>
            </div>
        </section>
        <section className="d-flex gap-5 mt-5">
        <div className="d-flex flex-column w-50">
            <h3>Opiniones destacadas</h3>
            <p>Compradores verificados han dejado estas opiniones.</p>
            <a href="#" name="verTestimonios" className="button button-secundario">Ver todas las opiniones</a>
        </div>
            <div className="caja">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, et aspernatur dolor architecto, quo sint quia facilis perspiciatis suscipit mollitia obcaecati reiciendis. Est reiciendis tempore veniam itaque quia non molestias?</p>
                <cite>Antonio Pérez</cite>
                
            </div>
        </section>
    </main>
    </>
  );
}
