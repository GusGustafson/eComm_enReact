import "../../style.css";
{
  /* Aquí importo mi archivo CSS para que pueda usarlo en todo este componente */
}

export default function Button({buttonClass, text}) {
  return (
      <button className={buttonClass}>{text}</button>
  );
}
