import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="div-home">
      <h1> Hola, bienvenido a CriptoMarket</h1>
      <p> Conoce las 100 criptos en tendencia </p>
      <Link to="/criptomonedas">Ver criptomonedas</Link>
    </div>
  );
};

export default Home;
