import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CriptoPage.css";

const CriptoPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const params = useParams();

  const [dataPage, setDataPage] = useState({});
  const [dataHistory, setDataHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}`)
      .then((resp) => {
        setDataPage(resp.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}/history?interval=d1`)
      .then((resp) => {
        setDataHistory(resp.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!dataPage) return <h3>Cargando...</h3>;

  return (
    <>
      <section className="page-cripto">
        <div className="info">
          <p>
            <span className="label">Nombre: </span>
            {dataPage.name}
          </p>
          <p>
            <span className="label">Código: </span>
            {dataPage.symbol}
          </p>
          <p>
            <span className="label">Precio: </span>
            {parseFloat(dataPage.priceUsd).toFixed(3)}
          </p>
          <p>
            <span className="label">Supply: </span>
            {parseFloat(dataPage.supply).toFixed(0)}
          </p>
          <p>
            <span className="label">Max.supply: </span>
            {parseFloat(dataPage.maxSupply).toFixed(0)}
          </p>

          <p>
            <a className="label">explorador: </a>
            {dataPage.explorer}
          </p>
        </div>

        <div className="history-cuadricula">
          <h1>HISTORIAL</h1>
          {dataHistory.map(({ time, priceUsd, date }) => (
            <div key={time} className="tabla-history">
              <p>{date.split("T")[0]}</p>
              <p className="h1-page">{parseFloat(priceUsd).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CriptoPage;
