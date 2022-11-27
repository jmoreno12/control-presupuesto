import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoProsupuesto = ({presupuesto, setPresupuesto,setisValidPresupuesto}) => {

const [mensaje, setMensaje] = useState('')

const handlePresupuesto =(e)=>{
e.preventDefault()
if(!Number(presupuesto) || Number(presupuesto) < 0 ){
  setMensaje("No es un presupuesto valido")
  return
}
 setMensaje('')
 setisValidPresupuesto(true)
}

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form  onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input className="nuevo-presupuesto" 
                type="number"
                placeholder="Tu Presupuesto" 
                value={presupuesto}
                onChange={e=>setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value="Agregar" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>

    </div>
  )
}

export default NuevoProsupuesto