import "./CardCripto.css";

const CardCripto = ({ id, name, priceUsd, symbol, cambio24 }) => {

const parse24h = parseFloat(cambio24).toFixed(3)
const parsePrice = parseFloat(priceUsd).toFixed(3)

  return (
    <article className="article-cardcripto" key={id}>
      <div className="div-cardcripto">
        <h3>{name}</h3>
        <h4>Precio: 
            <span> {parsePrice}</span>
        </h4>
        <h5>Código: 
            <span> {symbol}</span>
        </h5>
        <h5>Cambio 24hrs: 
            <span 
            className=
            { parse24h > 0 ? "positivo" : "negativo" }
            > {parse24h} % 
            </span>
        </h5>
    </div>
    </article>
  );
};

export default CardCripto;
