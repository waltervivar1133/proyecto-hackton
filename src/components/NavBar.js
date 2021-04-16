import React from 'react'
import { Link} from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav class="grid grid-flow-col py-5 bg-gray-700 text-center text-white">
      <div>
        <Link to="/donar">
          <i class="fas fa-hand-holding-medical fa-lg"></i>
        </Link>
      </div>
      <div>
        <Link to="/beneficios">
        <i class="fas fa-address-card fa-lg "></i>
        </Link>
      </div>
      <div>
        <Link to="/recomendaciones">
        <i class="fas fa-book-reader fa-lg"></i>
        </Link>
      </div>
      <div>
        <Link to="/ayuda">
        <i class="fas fa-question-circle fa-lg"></i>
        </Link>
      </div>
     
    </nav>
  )
}
