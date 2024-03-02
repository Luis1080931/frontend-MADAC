import {Resultados} from "./pages/Resultados.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegistrarResultados } from "./pages/RegistrarResultados.jsx"
import { ActualizarResultado } from "./pages/ActualizarResultado.jsx"
import { Variables } from "./pages/Variables.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { RegistrarVariables } from "./pages/RegistrarVariables.jsx"
import { ActualizarVariables } from "./pages/ActualizarVariables.jsx"
import { Muestras } from "./pages/Muestras.jsx"
import { ActualizarMuestras } from "./pages/ActualizarMuestra.jsx"
import { RegistrarMuestras } from "./pages/RegistrarMuestras.jsx"

function App() {

  return (
    <BrowserRouter>    
    {/*   <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* variables y muestras */}
          <Route path="/variables" element={<Variables />} />
          <Route path="/registrarvariables" element={<RegistrarVariables />} />
          <Route path="/actualizarvariables" element={<ActualizarVariables />} />
          <Route path="/muestras" element={<Muestras />} />
          <Route path="/actualizarmuestras" element={<ActualizarMuestras />} />
          <Route path="/registrarmuestras" element={<RegistrarMuestras />} />


          <Route path="/resultados" element={<Resultados />} />
          <Route path="/resultadosregistrar" element={<RegistrarResultados />} />
          <Route path="/resultadosactualizar" element={<ActualizarResultado />} />
        </Routes>

    </BrowserRouter>

  )
}

export default App
