import React from 'react'
import { NavBar } from '../components/NavBar'

export const Ayuda = () => {
  return (
    <div class="flex flex-col h-screen">
    <header class="py-5 bg-gray-700 text-white text-lg font-bold text-center text-uppercase ">
      Lugares de Vacunacion
    </header>
    <main class="flex-1 overflow-y-auto p-5">

    <div class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
            Sarah Dayan
          </div>
          <div class="text-gray-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </div>

    <div class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
            Sarah Dayan
          </div>
          <div class="text-gray-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </div>

    <div class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1Lkb240RyynRjrNiRAEJddVdcQRpdGXa2Q&usqp=CAU" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
            Sarah Dayan
          </div>
          <div class="text-gray-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </div>


    </main>
    <NavBar/>
  </div>
  )
}
