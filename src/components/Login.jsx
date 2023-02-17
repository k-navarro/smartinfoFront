
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Alerta from "./Alerta"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorioss",
        error: true
      })
      return
    }
    try {
      const { } = await axios.post("http://localhost:8000/api/usuarios/login", { email, password })
      setAlerta({})
      navigate("/proyectos")

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const { msg } = alerta

  return (

    <>

      <h1 className="text-center text-sky-600 font-black mt-2  text-3xl capitalize">Inicia sesión y administra tus  proyectos
      </h1>
      {msg && <Alerta alerta={alerta} />}

      <div className=" container mx-auto md:w-2/3 md:justify-center lg:w-2/5 ">
        <form className="my-2 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}>
          <div className=" my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="email"
            >Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email d registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className=" my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-sky-700 mb-5 w-full py-3 text-white uppercase
            font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/registro"
          > ¿no tienes una cuenta? registrate
          </Link>
        </nav>
      </div>
    </>

  )
}

export default Login