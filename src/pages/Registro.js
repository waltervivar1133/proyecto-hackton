import React from 'react'
import { NavBar } from '../components/NavBar'

export const Registro = () => {
  return (
    <div class="flex flex-col justify-center	 h-screen">
    <header class="py-5 bg-gray-700 text-white text-center ">
     Historial
    </header>
    <main class="flex-1 overflow-y-auto p-5 text-center">
    <div className="bg-gray-300 p-3 mt-2">

        Bienvenido Charito <br/>

        DNI : 12345678 <br/>
        Lugar Donacion : Cayetano heredia <br/>
        Fecha de donacion: 15/04/2021 <br/>
        Catidad de Donaciones : 1


        </div>
    </main>
    <NavBar/>
  </div>
  )
}
