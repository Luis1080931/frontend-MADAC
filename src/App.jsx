import {Resultados} from "./pages/Resultados.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegistrarResultados } from "./pages/RegistrarResultados.jsx"
import { ActualizarResultado } from "./pages/ActualizarResultado.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"

function App() {

  return (
    <BrowserRouter>    

     
        {/* <Route path='/'  element={<Resultados />} />
        <Route path='/registrar' element={<RegistrarResultados />}/> */}
      
     { <Dashboard />}

    </BrowserRouter>

  )
}

export default App
