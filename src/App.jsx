import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardCripto from "./CardCripto/CardCripto";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [stateData, setStateData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((respuesta) => {
        setStateData(respuesta.data.data);
      })
      .catch(() => {
        console.error("La petición a fallado...");
      });
  }, []);


  if (!stateData) return <h3>Cargando...</h3>;

  return (
    <>
      <section className="container-list-criptos">
        <h1 className="title-list-criptos">Lista de criptomonedas</h1>
        <div className="cuadricula-list-criptos">
            {stateData.map(({ id, name, priceUsd, symbol, changePercent24Hr}) => (
              <CardCripto 
              id={id} 
              name={name} 
              priceUsd={priceUsd}
              symbol= {symbol}
              cambio24= {changePercent24Hr}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
