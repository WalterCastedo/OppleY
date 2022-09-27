import React ,{useEffect,useState,useCallback, useRef } from 'react';
import { Seleccionador1} from './componentes/Seleccionador1';

import 'jspdf-autotable'
import './Inicio.css'
import logo from './logo.png'
import logo2 from './logo2.png'

import { toPng } from 'html-to-image';



import axios from 'axios';
export function Inicio() {

  const ref = useRef(null)
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }
    var intro = document.getElementById('ocultar');
    intro.className = '';
       toPng(ref.current, { cacheBust: true, backgroundColor:'white' })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()

        intro.className = 'ocultar';
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])


    var today = new Date();
 
// `getDate()` devuelve el día del mes (del 1 al 31)
var day = today.getDate();
 
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
 
// `getFullYear()` devuelve el año completo
var year = today.getFullYear();




   
    const [t1,setT1]=useState(0)
    const [t2,setT2]=useState(0)
    const [t3,setT3]=useState(0)
    const [t4,setT4]=useState(0)
    const [t5,setT5]=useState(0)
    const [t6,setT6]=useState(0)
    const [c1,setC1]=useState(0)
    const [c2,setC2]=useState(0)
    const [c3,setC3]=useState(0)
    const [c4,setC4]=useState(0)
    const [c5,setC5]=useState(0)
    const [c6,setC6]=useState(0)
    const [p1,setP1]=useState()
    const [p2,setP2]=useState()
    const [p3,setP3]=useState()
    const [p4,setP4]=useState()
    const [p5,setP5]=useState()
    const [p6,setP6]=useState()
    const [pre1,setPre1]=useState()
    const [pre2,setPre2]=useState()
    const [pre3,setPre3]=useState()
    const [pre4,setPre4]=useState()
    const [pre5,setPre5]=useState()
    const [pre6,setPre6]=useState()
    const [tipo,setTipo]=useState()

    const [cod1,setCod1]=useState(0)
    const [cod2,setCod2]=useState(0)
    const [cod3,setCod3]=useState(0)
    const [cod4,setCod4]=useState(0)
    const [cod5,setCod5]=useState(0)
    const [cod6,setCod6]=useState(0)
    const [totalf,setTotalf]=useState(0)
    const [descuento,setDescuento]=useState(0)
    const [totalfinal,setTotalfinal]=useState(0)
  
    const [resultado, setResultado] = useState(null)
    const [vendedor, setVendedor]   = useState('')
    const [celular, setcelular] = useState(null)

    const [nit,setNit] = useState(null)
    const [cliente,setCliente] = useState(null)
    const [contacto,setContacto] = useState(null)
    const [telefono,setTelefono] = useState(null)
    const [direccion,setDireccion] = useState(null)
    const [email,setEmail] = useState(null)

    const [porcentaje, setPorcentaje]=useState(null)

    const [item1,setItem1]=useState(0)
    const [item2,setItem2]=useState(0)
    const [item3,setItem3]=useState(0)
    const [item4,setItem4]=useState(0)
    const [item5,setItem5]=useState(0)
    const [item6,setItem6]=useState(0)
  
    
  
    const options = {
      method: 'GET',
      url: 'https://apiopple.propiedadesrainbow.cl/api/productos'
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchApi=() => {
  if(resultado==null) {
    axios.request(options).then(function (response) {
      setResultado(response.data)
    
  
     }
    )
  }
  
  }  
  useEffect(()=>{
   
    setPorcentaje((Math.round((((descuento/100)*totalf)+ Number.EPSILON) * 100) / 100))


  },[descuento,totalf])
    
      
        useEffect(() => {
          fetchApi()
          setTotalf(parseFloat(t1)+parseFloat(t2)+parseFloat(t3)+parseFloat(t4)+parseFloat(t5)+parseFloat(t6))
          setTotalfinal(parseFloat(totalf-porcentaje))
        },[fetchApi, resultado,t1,t2,t3,t4,t5,t6,totalfinal,porcentaje,totalf,descuento]);
        

        

        useEffect(() => {
            if(cod1 === 0 || cod1 === undefined || cod1 === null || cod1 === ''){
                setItem1(0)
            }else{
                setItem1(1)
            }
            if(cod2 === 0 || cod2 === undefined || cod2 === null || cod2 === ''){
                setItem2(0)
            }else{
                setItem2(1)
            }
            if(cod3 === 0 || cod3 === undefined || cod3 === null || cod3 === ''){
                setItem3(0)
            }else{
                setItem3(1)
            }
            if(cod4 === 0 || cod4 === undefined || cod4 === null || cod4 === ''){
                setItem4(0)
            }else{
                setItem4(1)
            }
            if(cod5 === 0 || cod5 === undefined || cod5 === null || cod5 === ''){
                setItem5(0)
            }else{
                setItem5(1)
            }
            if(cod6 === 0 || cod6 === undefined || cod6 === null || cod6 === ''){
                setItem6(0)
            }else{
                setItem6(1)
            }
        },[cod1,cod2,cod3,cod4,cod5,cod6]);






    return (
      <div className="App">
        <div>
        <h1 >Ingrese datos del vendedor</h1>
           



    <div className="row">
            
           
           
            <div className='col-12 col-sm-6'>
             Vendedor <br /> <input type="text" onChange={e => setVendedor(e.target.value)}/>
              </div>  
            <div className='col-12 col-sm-6'>
            Celular <br /> <input  type="number" onChange={e => setcelular(e.target.value)} />
              </div>  
            
            </div>
   <hr />
   <br />
            <h2>Ingrese los datos del solicitante</h2>
            <div className="row">
            <div className='col-lg-2 col-md-4'>
             Nit <br /> <input type="number" onChange={e => setNit(e.target.value)}/>
              </div>  
            <div  className='col-lg-2 col-md-4'>
            Cliente <br /> <input  type="text" onChange={e => setCliente(e.target.value)} />
              </div>  
            <div className='col-lg-2 col-md-4'>
            Contacto <br /> <input  type="" onChange={e => setContacto(e.target.value)} />
            </div>
            <div className='col-lg-2 col-md-4'>
            Telefono <br /> <input  type="number" onChange={e => setTelefono(e.target.value)} />
            </div>
            <div className='col-lg-2 col-md-4'>
            Dirección <br /> <input  type="text" onChange={e => setDireccion(e.target.value)} />
            </div>
            <div className='col-lg-2 col-md-4'>
            Email <br /> <input  type="text" onChange={e => setEmail(e.target.value)} />
            </div>
            </div>

<br />
<hr />
            <h2>Selecciona el tipo de precio</h2>
            <div className='row'>
<div className='col-sm-4 col-12 fs-6'>
  <input  type="radio" value="minorista" name='tipo' onChange={e => setTipo(e.target.value)} /> Precio minorista 
</div>
<div className='col-sm-4 col-12 fs-6'>
        <input   type="radio" value="mayorista" name='tipo'  onChange={e => setTipo(e.target.value)} /> Precio mayorista 
       </div>
       <div className='col-sm-4 col-12 fs-6'>
        <input  type="radio" value="distribuidor"  name='tipo' onChange={e => setTipo(e.target.value)} /> Precio distribuidor 
        </div> 
    </div>

          
          <div className="row">
          <div className='col-lg-6 col-sm-12'>
          <Seleccionador1  resultado={resultado}  tot={setT1} can={setC1} pro={setP1} tipo={tipo} cod={setCod1} pre={setPre1}  />  
          </div>
          <div className='col-lg-6 col-sm-12'>
          <Seleccionador1 resultado={resultado}  tot={setT2} can={setC2} pro={setP2} tipo={tipo} cod={setCod2} pre={setPre2} />
          </div>
          <div className='col-lg-6 col-sm-12'>
          <Seleccionador1 resultado={resultado}  tot={setT3} can={setC3} pro={setP3} tipo={tipo} cod={setCod3} pre={setPre3}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
          <Seleccionador1 resultado={resultado}  tot={setT4} can={setC4} pro={setP4} tipo={tipo} cod={setCod4} pre={setPre4}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
          <Seleccionador1 resultado={resultado} tot={setT5} can={setC5} pro={setP5} tipo={tipo} cod={setCod5} pre={setPre5}/>
          </div>
          <div className='col-lg-6 col-sm-12'>
          <Seleccionador1 resultado={resultado} tot={setT6} can={setC6} pro={setP6} tipo={tipo} cod={setCod6} pre={setPre6}/>
          </div>
        
          </div>
<br />
          <div className='row' id='crear' align='center'>
          <p className='col-md-3 col-sm-12'>total:{totalf}</p>
            <p className='col-md-3 col-sm-12'> % de descuento: <input min="0" max="100" step="1" type="number" onChange={e => setDescuento(e.target.value)}/> = {(Math.round((porcentaje + Number.EPSILON) * 100) / 100)} Bs.</p>
            <p className='col-md-3 col-sm-12'>total Final:{(Math.round((totalfinal+ Number.EPSILON) * 100) / 100)}</p>
            <button className='col-md-3 col-sm-12 btn btn-primary' onClick={onButtonClick}>Crear pdf</button>
            
            </div>
            <br /><br /><br />
          

          </div>


















        <div id='ocultar' className='ocultar'>
        <div id='tod' ref={ref}>
        <div name='fondoBlanco'id='pdf'  >
        <br id='fondoBlanco' />
        <br id='fondoBlanco' />
     
        <table id='fondoBlanco' >
	<tbody align='center'>
		<tr>
			<td id='logo' colSpan="12" align='center'><img src={logo} alt="description of image"/></td>
		</tr>
		<tr>
			<td id='fondo'  className='fw-bold text-white  nit' colSpan="2">Nit</td>
			<td id='fondo'  className='fw-bold text-white cliente' colSpan="7">Cliente</td>
			<td id='fondo'  className='fw-bold text-white contacto'colSpan="1">Contacto</td>
			<td id='fondo'  className='fw-bold text-white fecha' colSpan="1">Fecha</td>
            <td id='fondo'  className='fw-bold text-white ciudad' colSpan="1">Ciudad</td>
		</tr>
		<tr>
			<td className='nit' colSpan="2">{nit===''||nit===null ? 'Sin Espesificar' : nit}</td>
			<td className='cliente'colSpan="7">{cliente===null||cliente==='' ? 'sin espesificar' : cliente}</td>
			<td className='contacto'colSpan="1">{contacto===null||contacto==='' ? 'sin espesificar' : contacto}</td>
			<td className='fecha'colSpan="1">{month}/{day}/{year}</td>
            <td className='ciudad'colSpan="1">Santa Cruz</td>
		</tr>
		<tr>
			<td id='fondo'  className='fw-bold text-white nit' colSpan="2">Telefono</td>
			<td id='fondo'  className='fw-bold text-white cliente' colSpan="7">Dirección</td>
			<td id='fondo'  className='fw-bold text-white contacto' colSpan="1">Email</td>
			<td id='fondo'  className='fw-bold text-white fecha' colSpan="1">Descuento</td>
            <td id='fondo'  className='fw-bold text-white ciudad' colSpan="1">Tipo de pago</td>
		</tr>
		<tr>
			<td className='nit'colSpan="2">{telefono===null||telefono==='' ? 'sin espesificar' : telefono}</td>
			<td className='cliente'colSpan="7">{direccion===null||direccion==='' ? 'sin espesificar' : direccion}</td>
			<td className='contacto'colSpan="1">{email===null||email==='' ? 'sin espesificar' : email}</td>
			<td className='fecha'colSpan="1">{descuento} %</td>
            <td className='ciudad'colSpan="1">A CONVENIR</td>
		</tr>
        </tbody>
        </table>
        <br /><br />
        <table id='fondoBlanco'align='center'>
            <tbody align='center'>

            
		<tr>
			<td id='fondo' className='fw-bold text-white item' >Item</td>
			<td id='fondo' className='fw-bold text-white codigo' >Codigo</td>
			<td id='fondo' className='fw-bold text-white detalle'  >Detalle</td>
			<td id='fondo' className='fw-bold text-white cantidad' >Cantidad</td>
			<td id='fondo' className='fw-bold text-white' >Unidad</td>
			<td id='fondo' className='fw-bold text-white' >P/Unitario</td>
			<td id='fondo' className='fw-bold text-white' >Total Bs.</td>
		</tr>


        {cod1===0 || cod1===null || cod1===undefined ? null :
        <tr>
        <td className='item'>{item1}</td>
        <td className='codigo'>
            {/* {cod1===null || cod1===undefined || cod1==='' || cod1===0 ? '' : cod1} */}
            {cod1}
            </td>
        <td className='detalle'>{p1} </td>
        <td className='cantidad'>{c1}</td>
        <td >PZA</td>
        <td >{pre1} Bs.</td>
        <td >{t1} Bs.</td>
    </tr>
        }
		
        {cod2===0 || cod2===null || cod2===undefined ? null :
		<tr>
			<td className='item'>{item1+item2}</td>
			<td className='codigo'>{cod2}</td>
			<td className='detalle'>{p2}</td>
			<td className='cantidad'>{c2}</td>
			<td>PZA</td>
			<td>{pre2} Bs.</td>
			<td>{t2} Bs.</td>
		</tr>
        }

        {cod3===0 || cod3===null || cod3===undefined ? null :
		<tr>
			<td className='item'>{item1+item2+item3}</td>
			<td className='codigo'> {cod3}</td>
			<td className='detalle'>{p3}</td>
			<td className='cantidad'>{c3}</td>
			<td>PZA</td>
			<td>{pre3} Bs.</td>
			<td>{t3} Bs.</td>
		</tr>
        }

        {cod4===0 || cod4===null || cod4===undefined ? null :
		<tr>
			<td className='item'>{item1+item2+item3+item4}</td>
			<td className='codigo'>{cod4}</td>
			<td className='detalle'>{p4}</td>
			<td className='cantidad'>{c4}</td>
			<td>PZA</td>
			<td>{pre4} Bs.</td>
			<td>{t4} Bs.</td>
		</tr>
}
        {cod5===0 || cod5===null || cod5===undefined ? null :
		<tr>
			<td className='item'>{item1+item2+item3+item4+item5}</td>
			<td className='codigo'>{cod5}</td>
			<td className='detalle'>{p5}</td>
			<td className='cantidad'>{c5}</td>
			<td>PZA</td>
			<td>{pre5} Bs.</td>
			<td>{t5} Bs.</td>
		</tr>
}
{cod6===0 || cod6===null || cod6===undefined ? null :
		<tr>
			<td className='item'>{item1+item2+item3+item4+item5+item6}</td>
			<td className='codigo'>{cod6}</td>
			<td className='detalle'>{p6}</td>
			<td className='codigo'>{c6}</td>
			<td>PZA</td>
			<td>{pre6} Bs.</td>
			<td>{t6} Bs.</td>
		</tr>
}
		<tr>
			<td id='sinBordes' className='fw-bold' colSpan="4" rowSpan='3'>PRODUCTOS OPPLE 100% FACTURADO, CON GARANTIA DE 2 AÑOS A NIVEL NACIONAL</td>
			<td colSpan="2">SUB TOTAL BS.-</td>
			<td>{totalf}  Bs.</td>
			
		</tr>
		<tr>
			
			<td colSpan="2">DESCUENTO</td>
			<td>{porcentaje==null || porcentaje==='' ? '0' : (Math.round((porcentaje + Number.EPSILON) * 100) / 100)}  Bs.</td>
		</tr>
		<tr>
			
			<td colSpan="2">TOTAL  Bs.-</td>
			<td>{(Math.round((totalfinal + Number.EPSILON) * 100) / 100)}  Bs.</td>
		</tr>
	</tbody>
</table>
<br />
<br />
<table id='fondoBlanco'>
	<tbody align='center'>
		<tr>
			<td className='fw-bold datos' colSpan="2">Atentamente:</td>
			<td id='fondo' colSpan="10" rowSpan="4"><img src={logo2} alt="description of image"/></td>
		</tr>
		<tr>
			<td className='fw-bold datos' colSpan="2">{vendedor==='' ? 'Yuliza Pyttary' : vendedor}</td>
		</tr>
		<tr>
			<td className='fw-bold datos' colSpan="2">{celular===''||celular==null ? '75637934' : celular}</td>
		</tr>
		<tr>
			<td className='fw-bold datos' id='gerente'colSpan="2">Gerente de ventas</td>
		</tr>
		
		<tr>
			<td id='fondo' className='text-white fw-bold' colSpan="12">Dirección: 5to anillo Avenida Perimetral Externa Zona Parque Industrial PI43 Mza.04 Teléfono: (591-3) 3471700 - 3474352</td>
		</tr>
	</tbody>
</table>

        </div>
        </div>
        </div>
      </div>
      
    );



    
    
  }
  
