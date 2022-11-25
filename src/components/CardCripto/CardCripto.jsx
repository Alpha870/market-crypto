import "./CardCripto.css";

const CardCripto = ({ id, name, priceUsd, symbol, cambio24 }) => {
  const parse24h = parseFloat(cambio24).toFixed(3);
  const parsePrice = parseFloat(priceUsd).toFixed(3);

  return (
    <article className="article-cardcripto" key={id}>
        <h3>{name}</h3>
      <div className="div-cardcripto">
        <p>Precio:<span className="label"> {parsePrice} </span></p>
        <p>Código:<span className="label"> {symbol} </span></p>
        <p>Cambio 24hrs: <span className={parse24h > 0 ? "positivo" : "negativo"}> {parse24h}%</span></p>
      </div>
    </article>
  );
};

export default CardCripto;