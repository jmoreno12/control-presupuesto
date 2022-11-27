import React from 'react'
import Gasto from './Gasto'

function ListadoGastos({gastos,setGastoEditar,eliminargastos,filtros,gastosfiltros}) {
  return (
    <div className='listado-gastos contenedor'>
        
   {
    filtros ? (
      <>
      <h2>{gastosfiltros.length ?'Gastos':'No hay Gastos aun' }</h2>
      {gastosfiltros.map(gasto =>(
      <Gasto
      key={gasto.id}
      gasto={gasto}
      setGastoEditar={setGastoEditar}
      eliminargastos={eliminargastos}
      
      />
      ))}
      
      </>
      ):(
        <>
        <h2>{gastos.length ?'Gastos':'No hay Gastos aun' }</h2>
        {gastos.map(gasto =>(
        <Gasto
        key={gasto.id}
        gasto={gasto}
        setGastoEditar={setGastoEditar}
        eliminargastos={eliminargastos}
        
        />
        ))}
        </>
        )
   }
 
   
    </div>
  )
}

export default ListadoGastos