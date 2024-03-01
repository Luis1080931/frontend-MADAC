import {Fincas} from "./pages/Fincas.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegistrarFincas } from "./pages/RegistrarFincas.jsx"
import { ActualizarFincas } from "./pages/ActualizarFincas.jsx"
import { RegistrarLotes } from "./pages/RegistrarLotes.jsx"
import { ActualizarLotes } from "./pages/ActualizarLotes.jsx"
import { Lotes } from "./pages/Lotes.jsx"

function App() {

  return (
    <BrowserRouter>    
     { <Fincas/>}

    </BrowserRouter>

  )
}

export default App
