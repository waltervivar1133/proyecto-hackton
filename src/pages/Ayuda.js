
import React from 'react'
import { NavBar } from '../components/NavBar'

export const Ayuda = () => {



  return (
    <div className="flex flex-col h-screen">
    <header className="py-5 bg-gray-700 text-white text-lg font-bold text-center text-uppercase ">
      Lugares de Vacunacion
    </header>
    <main className="flex-1 overflow-y-auto p-5">

    <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
              Av Lobaton 234
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            Cayetano Heredia
          </div>
          <div className="text-gray-500">
            Horario de atencion : 7:00 am - 11:00pm
          </div>
        </figcaption>
      </div>
    </div>

    <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
           San Pedro 564
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
           Hospital Nacional Dos de Mayo
          </div>
          <div className="text-gray-500">
            Horario de atencion : 7:00 am - 11:00pm
          </div>
        </figcaption>
      </div>
    </div>

    <div class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
             San Jose 231
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
            La Solidaridad
          </div>
          <div class="text-gray-500">
            Horario de atencion : 7:00 am - 11:00pm
          </div>
        </figcaption>
      </div>
    </div>

    <div class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            Av Aviacion 199
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
          Hospital rebagliati
          </div>
          <div class="text-gray-500">
            Horario de atencion : 7:00 am - 11:00pm
          </div>
        </figcaption>
      </div>
    </div>


    </main>
    <NavBar/>
  </div>
  )
}
