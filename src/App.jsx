import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { VistaAnalisis } from './pages/VistaAnalisis.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnalisisRegistrar } from './pages/AnalisisRegistrar.jsx';
import { AnalisisActualizar } from './pages/AnalisisActualizar.jsx';


function App() {

  return (
    <BrowserRouter>    
    <Routes>
    <Route path='/' element={<VistaAnalisis/>} />
      <Route path='/analisisregistrar' element={<AnalisisRegistrar/>} />
      <Route path='/analisisactualizar' element={<AnalisisActualizar/>} />
     </Routes>
      {/* <VistaAnalisis/> */}

    </BrowserRouter>
  )
}

export default App;
