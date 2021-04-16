import React from 'react'
import { Link } from 'react-router-dom'
import { Mano } from '../assets/index';

export const Step = () => {
  return (
    <div className="h-screen grid justify-items-center  bg">
        <div className="mt-5">
          <img src={Mano} width="150px" height="50px"  alt=""/>
        </div>
        <div className="">
          <img src="https://www.ebankingnews.com/wp-content/uploads/2011/03/credito1.gif"width="200px" height="150px" alt=""/>
          <h1 className="text-5xl font-sans font-black text-white p-3 text-center">DonaPE</h1>
        </div>
        <div>
          <div className="py-3  grid justify-items-center grid-cols">
            <div className="w-20 grid grid-cols-4">
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-gray-600"></div>
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-white"></div>
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-white"></div>
              <div className="rounded-full h-3 w-3 flex items-center justify-center bg-white"></div>

            </div>
          </div>
          <Link to="/step2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border px-20">Empezar</button>
          </Link>
        </div>
    </div>
  )
}
