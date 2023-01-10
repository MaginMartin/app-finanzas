import React, { useState } from 'react'
import '../css/saldoBS.css';
import { useDataEgresos } from './egresos/hooks/useDataEgresos';
import { useDataIngresos } from './ingresos/hooks/useDataIngresos';
const SaldosBS = () => {
//Funcion que recupere el valor saldo mensual y de ahorro total
const{datoFijo:datoFijoIngreso,datoVariable:datoVariableIngreso} = useDataIngresos()
const{datoFijo:datoFijoEgreso,datoVariable:datoVariableEgreso} = useDataEgresos()

// const [ingresosMes, setIngresosMes] = useState([])
// const [egresosMes, setEgresosMes] = useState([])

const dtVI = datoVariableIngreso.filter((obj) => {
// filtrar datos totales por fecha
if ((new Date(obj.fechaInicio).getMonth() + 1) === new Date().getMonth()+1 && (new Date(obj.fechaInicio).getFullYear() )
=== new Date().getFullYear() ) {
return obj
}
return obj
}).map(obj=>obj.monto).reduce((prev, curr) => prev + curr, 0);

const dtVE = datoVariableEgreso.filter((obj) => {
  // filtrar datos totales por fecha
  if ((new Date(obj.fechaInicio).getMonth() + 1) === new Date().getMonth()+1 && (new Date(obj.fechaInicio).getFullYear() )
  === new Date().getFullYear() ) {
  return obj
  }
  return obj
  }).map(obj=>obj.monto).reduce((prev, curr) => prev + curr, 0);
  
const dtFI = datoFijoIngreso.map(obj=>obj.monto).reduce((prev, curr) => prev + curr, 0);
const dtFE = datoFijoEgreso.map(obj=>obj.monto).reduce((prev, curr) => prev + curr, 0);

// dar formato moneda
const moneda =(number) => {
return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2}).format(number);
};

const saldoMes =moneda((dtVI + dtFI)-(dtFE+dtVE))

// crear un useState que controle la suma del ingreso mensual
// const[saldoMes , setSaldoMes] = useState(moneda(0))

// crear un useState que controle el resto de los ingresos mensuales
const[ahorroTotal , setAhorroTotal] = useState(moneda(200000))


// Controlador de visualizacion de datos


return (
<div className='saldos'>
  <div className='saldoMes'>
    <p>Saldo Mes</p>
    <h2>
      AR$ {saldoMes}
    </h2>

  </div>
  <div className='ahorro'>
    <p>Total ahorrado</p>
    <h3>
      AR$ {ahorroTotal}
    </h3>

  </div>

</div>
)
}

export default SaldosBS