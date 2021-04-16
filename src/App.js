import React from 'react';
import { Ayuda } from './pages/Ayuda';
import { Beneficios } from './pages/Beneficios';

import { Inicio } from './pages/Inicio';
import { Recomendaciones } from './pages/Recomendaciones';
import { AppRouter } from './router/AppRouter';

function App() {

  const mobileScreen = () => {
    window.addEventListener('load', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
   }
   mobileScreen()


  return (
    <AppRouter>

      <Inicio/>
      <Beneficios/>
      <Ayuda/>
      <Recomendaciones/>

    </AppRouter>
  );
}

export default App;
