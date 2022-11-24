import { useEffect, useState } from "react";

function App() {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((resp) => resp.json())
      .then((data) => {
        setStateData(data.data);
      })
      .catch(() => {
        console.error("La petición a fallado...");
      });
  }, []);

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {stateData.map(({ name, priceUsd }) => (
          <li>
            Nombre: {name}
            Precio: {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
