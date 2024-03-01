import Analisis from "./pages/analisis.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import RegistrarAnalisis from "./pages/registrarAnalisis.jsx";
import ActualizarAnalisis from "./pages/actualizarAnalisis.jsx";


function App() {
  return (
    <BrowserRouter>
      <Analisis />
      <RegistrarAnalisis />
      <ActualizarAnalisis />
    </BrowserRouter>
  );
}

export default App;
