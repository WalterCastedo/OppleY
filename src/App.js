/* eslint-disable jsx-a11y/anchor-is-valid */

import { Inicio } from './Inicio';
import './App.css';
import { useState } from 'react';
import {Crear} from './componentes/Crear.jsx';




function App() {

 const [Formulario, setFormulario]=useState(true)
 const [Nuevo, setNuevo]=useState(false)


 const cambiarFormulario=()=>{
  setFormulario(true)
  setNuevo(false)
 }
 const cambiarNuevo=()=>{
  setFormulario(false)
  setNuevo(true)
 }

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >Opple</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Formulario===false ?
              <li className="nav-item">
              <button type="button" name="" id="" onClick={cambiarFormulario} className="btn btn-primary">Formulario</button>
            </li> : null  
            }
              
              {
                Nuevo === false ?
                <li className="nav-item">
              <button type="button" name="" id="" onClick={cambiarNuevo} className="btn btn-info">Nuevo Producto</button>
              </li> : null
              }
              
          
            </ul>
            
          </div>
        </div>
      </nav>
        
        
      { Formulario===true ? <Inicio/> : null } 
      { Nuevo===true ? <Crear/> : null } 
    </>
  );
}

export default App;
