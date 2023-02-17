import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "./Alerta"
import axios from "axios"


const Registro = () => {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [alerta, setAlerta] = useState({})

    const navigate = useNavigate()

    const handleSubmit = async e =>{
        e.preventDefault();

        if([nombre, email, password, ].includes("")){
            setAlerta({
                msg:"Todos los campos son obligatorios",
                error:true
            })
            return

        }
        setAlerta({})
        try {
            const {} = await axios.post('http://localhost:8000/api/usuarios/registrar', 
            {name:nombre, lastname:apellido , email, password}) 
            setAlerta({
                msg: "usuario creado correctamente",
                error: false
            })
            setNombre("")
            setEmail("")
            setPassword("")
            setApellido("")

            navigate("/login")
            
        } catch (error) {
            setAlerta({
                msg:"servicio incorrecto",
                error: true
            })
            console.log(error)
        }
    }

    
    const {msg} = alerta
  return (
    <>
    
    <h1 className=" text-center text-sky-600 font-black mt-2  text-3xl capitalize ">Crea tu cuenta y administra tus datos 
    </h1>

    {msg && <Alerta alerta={alerta}/>}
    <div className=" container mx-auto md:w-2/3 md:justify-center lg:w-2/5 ">
    <form className=" my-2 bg-white shadow rounded-lg p-10  "
    onSubmit={handleSubmit}
    >
    <div className=" my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
            >Nombre</label>
            <input
            id="nombre"
            type="text"
            placeholder="Nombre de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
            />
        </div>
        <div className=" my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
            >Apellido</label>
            <input
            id="nombre"
            type="text"
            placeholder="Nombre de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={apellido}
            onChange={e=>setApellido(e.target.value)}
            />
        </div>

        <div className=" my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
            >Email</label>
            <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={e=>setEmail(e.target.value)}
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
            onChange={e=>setPassword(e.target.value)}
            />
        </div>
       

        <input
        type="submit"
        value="Crear Cuenta"
        className="bg-sky-700 mb-5 w-full py-3 text-white uppercase
        font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
    </form>
    <nav className="lg:flex lg:justify-between">
        <Link
        className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="/login"
        > ¿ya tienes una cuenta? Inicia Sesión
        </Link>
    </nav>
    </div>
   
  </>
  )
}

export default Registro

