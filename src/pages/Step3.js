import React from 'react'
import { Link } from 'react-router-dom'

export const Step3 = () => {
  return (
    <div className="h-screen grid justify-items-center  bg-3">
        <div className="mt-5">
            <img src="https://www.ebankingnews.com/wp-content/uploads/2011/03/credito1.gif" width="150px" height="100px" alt=""/>
        </div>
        <div>
          <h1 className="text-lg font-sans	 text-white p-3 text-center">Disfruta de los beneficios que tenemos para ti</h1>
        </div>
        <div>
          <div className="py-3  grid justify-items-center grid-cols">
            <div className="w-20 grid grid-cols-4">
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-white"></div>
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-white"></div>
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-gray-600"></div>
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-white"></div>

            </div>
          </div>
          <div className="grid grid-rows-2"> 
            <Link to="/step4">
            
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border px-20 mb-3">Siguiente</button>

            </Link>
            <Link to="/step2">
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border px-20">Anterior</button>
            </Link>
          </div>
         
        </div>
    </div>
  )
}
