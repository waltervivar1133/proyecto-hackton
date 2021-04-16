import React from 'react'
import { NavBar } from '../components/NavBar'

export const Recomendaciones = () => {
  return (
    <div class="flex flex-col h-screen">
    <header class="py-5 bg-gray-700 text-white text-lg font-bold text-center text-uppercase">
       Recomendaciones
    </header>
    <main class="flex-1 overflow-y-auto p-5">
      <div>
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/7Y4CT6joTFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    <div className="mt-4 p-5" >
        <div>
          <h2 className="text-2xl font-bold text-center">Lista de Recomendaciones antes de donar sangre❤️</h2>
          
          <ul className="pl-5 pt-5 text-xl">

          <li type="square">Esto es un tipo de punto.</li>
          <li type="square">Este es otro.</li>
          <li type="square">Y este es otro diferente.</li> 
          <li type="square">Esto es un tipo de punto.</li>
          <li type="square">Este es otro.</li>
          <li type="square">Y este es otro diferente.</li>

          </ul>
        </div>
    </div>
    </main>
    <NavBar/>
  </div>
  )
}
