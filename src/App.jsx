import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Proyectos from "./components/Proyectos"
import Registro  from "./components/Registro"

const App = () => {
  return (
    <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="Registro" element={<Registro/>}/>
      <Route path= "login" element={<Login/>}/>
      <Route path="proyectos" element={<Proyectos/>}/>
    </Routes>
    </Router>
    </React.StrictMode>
  )
}

export default App
