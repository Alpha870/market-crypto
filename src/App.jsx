import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [stateData, setStateData] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
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
      <h1>Lista de criptomonedas</h1>
      <ol>
        {stateData.map(({ id, name, priceUsd }) => (
          <li key={id}>
            Nombre: {name}
            Precio: {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
