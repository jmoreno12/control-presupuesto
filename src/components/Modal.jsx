import React from 'react'
import Cerrar from '../img/cerrar.svg'
import { useState,useEffect } from 'react'
import Mensaje from './Mensaje'
function Modal({setModal,animarm,setAnimar,guardar,setGastoEditar,gastoEditar}) {

  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState([])
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
    
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
setId(gastoEditar.id)
setFecha(gastoEditar.fecha)
    }
  }, [])



const ocultarmodal =()=>{
    
    setAnimar(false)
    setGastoEditar({})
    setTimeout(() => {
        setModal(false)
      }, 500);
}
const handleSubmit =(e)=>{
  e.preventDefault()
  if([nombre,cantidad,categoria].includes('')){

    setMensaje("Falta Ingresar Datos")
    setTimeout(() => {
      setMensaje("")
    }, 3000);
    
    return
  }
  guardar({nombre,cantidad,categoria,id,fecha})
}
  return (
    <div className='modal'>
     <div className='cerrar-modal'>
     <img src={Cerrar} alt="cerrar modal" onClick={ocultarmodal}/>
     </div>
     <form 
     onSubmit={handleSubmit}
     className={`formulario ${animarm ? "animar" : "cerrar"}`}>
        <legend>{gastoEditar.nombre ? "Editar Gastos":"Nuevo Gastos"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className='campo'>
            
            <label htmlFor="nombre">Nombre del Gasto</label>
            <input type="text"  id='nombre' placeholder='Agrega el Nombre del Gasto' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div className='campo'>
            
            <label htmlFor="cantidad">Cantidad Gastada</label>
            <input type="number"  id='cantidad' placeholder='Agrega la Cantidad del Gasto'value={cantidad} onChange={(e)=>setCantidad(Number(e.target.value))}/>
        </div>

        <div className='campo'>
            
            <label htmlFor="categoria">Categoria</label>
            <select id='categoria'
            value={categoria} 
            onChange={(e)=>setCategoria(e.target.value)}>
                <option value="">--Seleccione--</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="gastos">Gastos Varios</option>
                <option value="casa">Casa</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>

            </select>
        </div>

<input type="submit"
value={gastoEditar.nombre ? "Guardar Cambios":"Agregar Gastos"} />

     </form>
    
    </div>
  )
}

export default Modal