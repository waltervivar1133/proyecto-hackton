import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";
import { Ayuda } from "../pages/Ayuda";
import { Beneficios } from "../pages/Beneficios";

// pages

import { Inicio } from "../pages/Inicio";
import { Recomendaciones } from "../pages/Recomendaciones";
import { Registro } from "../pages/Registro";
import { Step } from "../pages/Step";
import { Step2 } from "../pages/Step2";
import { Step3 } from "../pages/Step3";
import { Step4 } from "../pages/Step4";


export const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
         <Switch>
            <Route
              path="/donar"
              component= { Inicio }
              exact
            />
            <Route
              path="/ayuda"
              component= { Ayuda }
              exact
            />
            <Route
              path="/beneficios"
              component= { Beneficios }
              exact
            />
            <Route
              path="/recomendaciones"
              component= { Recomendaciones }
              exact
            />
             <Route
              path="/historial"
              component= { Registro }
              exact
            />
            <Route
              path="/"
              component= { Step }
              exact
            />
            <Route
              path="/step2"
              component= { Step2 }
              exact
            />
            <Route
              path="/step3"
              component= { Step3 }
              exact
            />
             <Route
              path="/step4"
              component= { Step4 }
              exact
            />
            
         </Switch>
      </div>
    </Router>
    </div>
  )
}
