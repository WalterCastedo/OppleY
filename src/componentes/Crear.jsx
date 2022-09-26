import React, { useState } from 'react'
import './Crear.css'
import axios from 'axios';
export  function Crear() {

    const [codigo,setCodigo]=useState(null)
    const [detalle,setDetalle]=useState(null)
    const [preciom,setPreciom]=useState(0)
    const [precioM,setPrecioM]=useState(0)
    const [preciod,setPreciod]=useState(0)
    

   


    const crearNuevo=() => {
     if(codigo===null || codigo===undefined || codigo===''||
        detalle===null || detalle===undefined || detalle===''||
        preciom===null || preciom===undefined || preciom===''||
        precioM===null || precioM===undefined || precioM===''||
        preciod===null || preciod===undefined || preciod===''
     ){
        alert("Tiene campos vacios, por favor introduzca todos los datos")
     }
     else{
        axios
        .post("https://apiopple.propiedadesrainbow.cl/api/producto", {
          codigo: codigo.toUpperCase(),
          descripcion: detalle.toUpperCase(),
          precioMinorista: parseFloat(preciom),
          precioMayorista: parseFloat(precioM),
          precioDistribuidor: parseFloat(preciod),
        })
        .then(function (response) {
          console.log(response);
          setCodigo(null)
          setDetalle(null)
          setPrecioM(0)
          setPreciom(0) 
          setPreciod(0)
        })
        .then(alert("El productos se agrego correctamente"))
        // eslint-disable-next-line no-self-assign
        .then(window.location.href = window.location.href);
          
     }
        
    }


  return (
    <>
    <div className="todo">


  <div className="mb-3">
    <label className="form-label">Codigo de producto</label>
    <input  required type="text" className="form-control" id="codigo"  onChange={e => setCodigo(e.target.value)} aria-describedby="CCODIGO"/>
    <div id="emailHelp" className="form-text">ingresa el codigo unico de producto.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Detalle</label>
    <input  required type="text" className="form-control" onChange={e => setDetalle(e.target.value)} id="detalle"/>
    <div id="emailHelp" className="form-text">Ingresa el nombre y la descripcion del producto.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Precio minorista</label>
    <input min="1" type="number" className="form-control" onChange={e => setPreciom(e.target.value)} id="preciom"/>
    <div id="emailHelp" className="form-text">Ingresa el precio al por menor del producto.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Precio mayorista</label>
    <input min="1" type="number" className="form-control" onChange={e => setPrecioM(e.target.value)} id="precioM"/>
    <div id="emailHelp" className="form-text">Ingresa el precio al por mayor del producto.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Precio distribuidor</label>
    <input min="1" type="number" className="form-control" onChange={e => setPreciod(e.target.value)} id="preciod"/>
    <div id="emailHelp" className="form-text">Ingresa el precio de distribuidor del producto.</div>
  </div>
  <button  className="btn btn-primary" onClick={crearNuevo}>Submit</button>

    </div>
  
    </>
  )
}
