import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoProsupuesto from './NuevoProsupuesto'

function Heders({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto,
  isValidpresupuesto,
  setisValidPresupuesto}) {
  return (
    <header>

<h1>Planificador de Gastos</h1>


{isValidpresupuesto ? (
<ControlPresupuesto
presupuesto={presupuesto}
gastos={gastos}
setGastos={setGastos}
setPresupuesto={setPresupuesto}
setisValidPresupuesto={setisValidPresupuesto}
/>) : (
<NuevoProsupuesto
presupuesto={presupuesto}
  
setPresupuesto={setPresupuesto}

  setisValidPresupuesto={setisValidPresupuesto}
/>)}



    </header>


  )
}

export default Heders