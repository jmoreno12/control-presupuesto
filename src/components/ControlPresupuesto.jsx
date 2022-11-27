import React, { useState, useEffect } from 'react'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({setisValidPresupuesto,presupuesto,gastos,setPresupuesto,setGastos}) => {

const [disponible, setDisponible] = useState(0)
const [gastado, setGastado] = useState(0)

const [porcentaje, setPorcentaje] = useState(0)

useEffect(() => {
 const total = gastos.reduce((tot,gasto)=> gasto.cantidad+ tot,0)
 const nuevopor =(((presupuesto-total)/presupuesto) *100).toFixed(2)

 setGastado(total)
 setDisponible(presupuesto-total)

setTimeout(() => {
    setPorcentaje(nuevopor)
}, 1000);

}, [gastos])

const formatear =(cantidad)=>{
    return cantidad.toLocaleString('en-US',{sytle:'currency',currency:'USD'})
}

const handleReset=() =>{
    const resultado = confirm('Desea agregar otro presupuesto')
    if(resultado){
setGastos([])
setPresupuesto('')
setisValidPresupuesto(false)
    }
}

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
 <div>

    <CircularProgressbar
    styles={buildStyles({
pathColor: porcentaje >100 ? '#DC2626' : '#3B82F6',
trailColor:'#F5F5F5',
textColor:porcentaje >100 ? '#DC2626' : '#3B82F6'
    })}
    value={porcentaje}
text={`${porcentaje}% Gastado`}

    />

 </div>
<div className='contenido-presupuesto'>
<button className='reset-app' type='button'
onClick={handleReset}>
Resetear Valor

</button>
    <p>
        <span> Presupuesto : {''} ${formatear(presupuesto)} </span> 
    </p>
    <p className={`${disponible <0 ? 'negativo': ''}`}>
        <span> Disponible : {''} ${formatear(disponible)} </span> 
    </p>
    <p>
        <span> Gastado : {''} ${formatear(gastado)} </span> 
    </p>
   

</div>
</div>
  )
}

export default ControlPresupuesto