import { useState,useEffect } from 'react'
import Heders from './components/Heders'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import {generarId} from './helpers'
import IconoNuevogastos from './img/nuevo-gasto.svg'
import Filtro from './components/Filtro'


function App() {
 
const [presupuesto, setPresupuesto] = useState(JSON.parse(localStorage.getItem('presupuesto')) ?? [] )
const [isValidpresupuesto, setisValidPresupuesto] = useState(false)
const [modal, setModal] = useState(false)
const [animarm, setAnimar] = useState(false)
const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [] )

const [gastoEditar, setGastoEditar] = useState({})


const [filtros, setFiltros] = useState('')

const [gastosfiltros, setGastosFiltros] = useState([])
useEffect(() => {
  if(Object.keys(gastoEditar).length > 0){
    
    setModal(true)
   
    setTimeout(() => {
      setAnimar(true)
    }, 500);
   
    
  }
}, [gastoEditar])

useEffect(() => {
  console.log("componente listo")
localStorage.setItem('presupuesto',JSON.stringify(presupuesto))
  
}, [presupuesto])

useEffect(() => {
  console.log("componente listo")
localStorage.setItem('gastos',JSON.stringify(gastos))
  
}, [gastos])


useEffect(() => {
  const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
  if(presupuestoLS >0){
    setisValidPresupuesto(true)
  }
}, [])

const handleNuevoGastos =()=>{
  setModal(true)
  setGastoEditar({})
  setTimeout(() => {
    setAnimar(true)
  }, 500);
 
}

useEffect(() => {
  if(filtros){
    const gastosfil =gastos.filter(gasto => gasto.categoria === filtros)
  setGastosFiltros(gastosfil)
  }
}, [filtros])


const guardar =  gasto =>{

  if(gasto.id){
const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
  setGastos(gastosActualizados)
  setGastoEditar({})
}else{
    gasto.id = generarId()
    gasto.fecha = Date.now()
   setGastos([...gastos,gasto])
  }
  setAnimar(false)
    setTimeout(() => {
        setModal(false)
      }, 500);
}
const eliminargastos = id =>{
const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
setGastos(gastosActualizados)

}
  return (
  <div className={modal ? 'fijar': ''}>
  <Heders 
  presupuesto={presupuesto}
  setGastos={setGastos}
  setPresupuesto={setPresupuesto}
  isValidpresupuesto={isValidpresupuesto}
  setisValidPresupuesto={setisValidPresupuesto}
  gastos={gastos}
  />

  {isValidpresupuesto ? ( 
  <>
  <main>
    <Filtro
    filtros={filtros}
    setFiltros={setFiltros}
    />
<ListadoGastos
gastos={gastos}
setGastoEditar={setGastoEditar}
eliminargastos={eliminargastos}
filtros={filtros}
gastosfiltros={gastosfiltros}
/>
  </main>
  <div className='nuevo-gasto'> 
   
   <img src={IconoNuevogastos}
   alt="icono nuevo gastos"
   onClick={handleNuevoGastos}
   />
   
   
   </div>
   </>
   ) : null}
  
  {modal && (<Modal 
  setModal={setModal}
   animarm={animarm} 
   setAnimar={setAnimar}
  guardar={guardar}
  setGastoEditar={setGastoEditar}
  gastoEditar={gastoEditar}
  />)}

  </div>
 
  )
}

export default App
