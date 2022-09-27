import React, {useEffect, useState , Fragment} from 'react'

export function Seleccionador1({resultado,tot,can,pro,cod,tipo,pre}) {


    const [selectedValue, setSelectedValue] = useState();
    const [selectedNombre, setSelectedNombre] = useState();
    const   [tipoPrecio, setTipoPrecio] = useState();

    const [preciom, setPreciom] = useState()
  const [precioM, setPrecioM] = useState()
  const [preciod, setPreciod] = useState()
  

  const [total, setTotal] = useState(0)
  const [cantidad, setCantidad] = useState(0)


// eslint-disable-next-line react-hooks/exhaustive-deps
const datos =()=> {
   
    if(resultado!=null){  
      setTipoPrecio(tipo) 
        for (let index = 0; index < resultado.length; index++) {
            
            

          if (resultado[index].codigo === selectedValue) {
            setSelectedNombre(resultado[index].descripcion)
            setPreciom(resultado[index].precioMinorista)
            setPrecioM(resultado[index].precioMayorista)
            setPreciod(resultado[index].precioDistribuidor)
            
            if(cantidad>0 && cantidad<=10000000){
                if(tipoPrecio==='mayorista'){
                
                setTotal((precioM*cantidad).toFixed(2));
                }
               
                if(tipoPrecio==='minorista'){
                setTotal((preciom*cantidad).toFixed(2));
                }
                
                if(tipoPrecio==='distribuidor'){
                setTotal((preciod*cantidad).toFixed(2));
                }
                
               
              }
              else{
                 setTotal(0);
             
              }
              pre(tipo==='mayorista' ? precioM : tipo==='minorista' ? preciom : preciod)
             tot(total);
             can(cantidad)
             pro(selectedNombre)
             cod(selectedValue)
             
              break
        }
        else
        {
            setSelectedNombre('') 
            pre(0)
            tot(0);
            can(0)
            pro('')
            cod(0)

        }
        
        
        
        }
     }
    }
  


   useEffect(() => {
    
    datos()

  },[selectedValue, cantidad, resultado, precioM, tipoPrecio, total, datos]);


  

  const r=() => {
   
    if(resultado!=null && selectedValue!==undefined && selectedValue!==null && selectedValue!=='' ){
       
      return(
      resultado.map(
        valores=>(
        
         <option  key={valores.codigo}  value={valores.codigo}>{valores.descripcion}</option> 
        )
        
      )
      )
     }
    }
  
  return (
    <Fragment>
        <div id='gerente' className=" m-2 p-2 text-dark bg-opacity-10 text-start" >
        {
            tipo==='' || tipo===null || tipo===undefined ? <div>Selecciona un tipo de precio</div> : 
            <div>
                <input className='col-12' placeholder='ingresa un producto'
        list='pro'
        onChange={e => setSelectedValue(e.target.value)} />
        <datalist id="pro">
            {r()}

        </datalist>
        
    
  <p className='fs-6'> Detalle: {selectedNombre}</p>
  <div className='row'>
  <p className='col-lg-4 col-sm-12'> Cantidad:<input className='w-50' type="number" onChange={e => setCantidad(e.target.value)}/></p>
  <p className='col-lg-4 col-sm-12'>Precio {tipo} : {tipo==='mayorista' ? precioM : tipo==='minorista' ? preciom : preciod} Bs.</p>
  <p className='col-lg-4 col-sm-12'>total: {total} Bs.</p>
  </div>
                </div>
        }

        

        
        
  </div>
  </Fragment>
  )
}
