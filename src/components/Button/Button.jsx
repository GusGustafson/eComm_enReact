import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

function Button({buttonClass, text}) {
  return (
    <a href="detallesProducto.html" name="verDetalles" className={buttonClass}>{text}</a>
  );
}

export default Button;
