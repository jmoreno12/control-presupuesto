import React from 'react'
import {LeadingActions,SwipeableList,SwipeAction,SwipeableListItem,TrailingActions}from 'react-swipeable-list'
import { forfecha } from '../helpers'
import 'react-swipeable-list/dist/styles.css'
import Ahorro from '../img/icono_ahorro.svg'
import Casa from '../img/icono_casa.svg'
import Comidas from '../img/icono_comida.svg'
import Gastos from '../img/icono_gastos.svg'
import Ocio from '../img/icono_ocio.svg'
import Salud from '../img/icono_salud.svg'
import Suscripciones from '../img/icono_suscripciones.svg'

const diciionarioIconos ={
                ahorro : Ahorro,
                comida : Comidas,
                gastos : Gastos,
                casa : Casa,
                ocio : Ocio,
                salud : Salud,
                suscripciones : Suscripciones
}

  

function Gasto({gasto,setGastoEditar,eliminargastos}) {


  const leadingActions =()=>(
    <LeadingActions>
      <SwipeAction onClick={()=>setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  
  
  
  const trailingActions =()=>(
    <TrailingActions>
    <SwipeAction onClick={()=>eliminargastos(gasto.id)}
    destructive={true}>
      Eliminar
    </SwipeAction>
  </TrailingActions>
  
  )

  return (
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}>
    <div className='gasto sombra'>
<div className='contenido-gasto'>
<img 
src={diciionarioIconos[gasto.categoria]}
alt="Icono Gastos"



/>
    <div className='descripcion-gasto'>
       <p className='categoria'> {gasto.categoria} </p> 
      
       <p className='nombre-gasto'> {gasto.nombre}</p> 
      
       <p className='fecha-gasto'> Agregado el: {''} 
       <span>{forfecha(gasto.fecha)}</span>
       </p> 
      
    </div>
    
</div>
<p className='cantidad-gasto'> ${gasto.cantidad}</p> 
        </div>
        </SwipeableListItem>
        </SwipeableList>

  )
}

export default Gasto