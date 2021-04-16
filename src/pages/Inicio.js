import React from 'react'
import { NavBar } from '../components/NavBar';
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div class="flex flex-col justify-center	 h-screen">
        <header class="py-5 bg-gray-700 text-white text-center ">
         Donar
        </header>
        <main class="flex-1 overflow-y-auto p-5 text-center">
          <form className="mt-5" >
            <div className="flex flex-col">
              <label htmlFor="dni" className="text-lg my-1">Ingresa tu DNI</label>
              <input type="number"
                className="border-blue-700 border-2 rounded bg-gray-100 h-10"
                name="dni"
                placeholder="DNI"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dni" className="text-lg my-1">Ingresa tu Password</label>
              <input type="password"
                className="border-blue-700 border-2 rounded bg-gray-100 h-10"
                name="Contraseña"
              />
            </div>
            <div className="mt-10">
              <Link to="/historial">
                <button className="bg-blue-500 p-2  rounded border-blue-900 border-2 text-white font-bold">
                  Consultar
                </button>
              </Link>
              
            </div>
            <div className="mt-5">
              
              <button className="bg-gray-500 p-2  rounded border-blue-900 border-2 text-white font-bold">
                Registrar
              </button>
            </div>


            

          </form>
        </main>
        <NavBar/>
      </div>
  )
}
