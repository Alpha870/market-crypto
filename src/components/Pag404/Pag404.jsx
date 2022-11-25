import "./Pag404.css";
import image from './error404.gif'

const Pag404 = () => (
  <div className="div-404">
    <h1>ERROR 404</h1>
    <img src={image} alt="pagina no encontrada" />
    <p>Lo sentimos, la página que buscas no esta disponible</p>
  </div>
);

export default Pag404;
