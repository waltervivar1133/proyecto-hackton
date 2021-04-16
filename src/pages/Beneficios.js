import React from 'react'
import { NavBar } from '../components/NavBar'

export const Beneficios = () => {
  return (
    <div class="flex flex-col h-screen">
    <header class="py-5 bg-gray-700 text-white text-center hidden">
      Sticky Header and Footer with Tailwind
    </header>
    <main class="flex-1 overflow-y-auto p-5">
      Beneficios
    </main>
    <NavBar/>
  </div>
  )
}
