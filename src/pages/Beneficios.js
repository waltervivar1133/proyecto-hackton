import React from 'react'
import { NavBar } from '../components/NavBar'

export const Beneficios = () => {
  return (
    <div className="flex flex-col h-screen">
    <header className="py-5 bg-gray-700 text-white text-lg font-bold text-center text-uppercase ">
      Beneficios
    </header>
    <main className="flex-1 overflow-y-auto p-5">

    <div className="md:flex bg-yellow-300	 rounded-xl p-8 md:p-0 my-3">
     
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
               PUNTOS RIPLEY GO  
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            POR CADA DONACION GANAS 50 PUNTOS
          </div>
        
        </figcaption>
      </div>
    </div>

    <div className="md:flex bg-purple-500	rounded-xl p-8 md:p-0 my-3">
      
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            PUNTOS FALABELLA
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            POR CADA DONACION GANAS 2000 PUNTOS
          </div>
          
        </figcaption>
      </div>
    </div>

    <div class="md:flex bg-yellow-500	 rounded-xl p-8 md:p-0 my-3">
     
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
             MILLAS LATAM
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
          POR CADA DONACION GANAS 2500 MILLAS
          </div>
         
        </figcaption>
      </div>
    </div>

    <div class="md:flex bg-pink-200	 rounded-xl p-8 md:p-0 my-3">
   
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
           PUNTOS RAPPI
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
             POR CADA DONACION GANAS 50 PUNTOS
          </div>
        
        </figcaption>
      </div>
    </div>


    </main>
    <NavBar/>
  </div>
  )
}
