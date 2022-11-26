import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CriptoPage.css";

const CriptoPage = () => {
  const [dataPage, setDataPage] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}`)
      .then((resp) => {
        setDataPage(resp.data.data);
      })

      .catch(() => {
        console.error("La peticion falló");
      });
  }, []);

  return (
    <>
      <h1>Soy una criptomonedas {params.id}</h1>
    </>
  );
};

export default CriptoPage;
