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


          <li type="square">Ser mayor de 18 años </li>
          <li type="square">Pesar mínimo de 50kg</li>
          <li type="square">Tener buena salud.</li> 
          <li type="square">Ayuna mínima de 4 horas.</li>
        
          </ul>

          <h2 className="text-2xl font-bold text-center">Lista de Recomendaciones que NO SE DEBE hacer antes de donar</h2>
          <ul className="pl-5 pt-5 text-xl">


          <li type="square">Se ha bebido alcohol en las últimas 48 horas. </li>
          <li type="square">Si ha tenido alguna cirugía en los últimos 6 meses.</li>
          <li type="square">Si tiene tatuajes.</li> 
          <li type="square">Si se padece de alguna enfermedad: Tos, Gripa, Hepatitis, Epilepsia, Sida, o alguna enfermedad del corazón.</li>

          </ul>
        </div>
    </div>
    </main>
    <NavBar/>
  </div>
  )
}
