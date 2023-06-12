import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

function Button({buttonClass, text}) {
  return (
      <button className={buttonClass}>{text}</button>
  );
}

export default Button;
