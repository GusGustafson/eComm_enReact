import pago from "../../assets/pago.png";
import envio from "../../assets/envio.png";
import check from "../../assets/check.png";
import ofertas from "../../assets/ofertas.png";
import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function Section() {
  return (
    <section className="container d-flex mt-5">
      {/* En esta línea de arriba incluyo "d-flex just..." para que me ponga los elementos uno junto a otro, no uno encima de otro. */}
      <div className="container d-flex gap-2">
        <img src={pago} alt="iconoPago" name="pagoSeguro" width="50px" height="50px" />
        <div>
          <h5>Pago seguro</h5>
          <h6>100% garantizado</h6>
        </div>
      </div>
      <div className="vr gap-3 me-5"></div>
      <div className="container d-flex gap-2">
        <img src={envio} alt="iconoEnvio" name="envioGratis" width="50px" height="50px" />
        <div>
          <h5>Envío gratis</h5>
          <h6>
            En pedidos de +100<i className="bi bi-currency-euro"></i>
          </h6>
        </div>
      </div>
      <div className="vr gap-3 me-5"></div>
      <div className="container d-flex gap-2">
        <img
          src={check} alt="iconoGarantia" name="dosDeGarantia" width="50px" height="50px" />
        <div>
          <h5>2 años de garantía</h5>
          <h6>En todos los gadgets</h6>
        </div>
      </div>
      <div className="vr gap-3 me-5"></div>
      <div className="container d-flex gap-2">
        <img
          src={ofertas} alt="iconoOfertas" name="ofertasUnicas" width="50px" height="50px" />
        <div>
          <h5>Ofertas únicas</h5>
          <h6>Precios de mayorista</h6>
        </div>
      </div>
    </section>
  );
}
