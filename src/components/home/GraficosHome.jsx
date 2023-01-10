import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { useDataEgresos } from '../egresos/hooks/useDataEgresos'
import { useDataIngresos } from '../ingresos/hooks/useDataIngresos'



const GraficosHome = () => {

  const{datoFijo:datoFijoIngreso,datoVariable:datoVariableIngreso} = useDataIngresos()
  const{datoFijo:datoFijoEgreso,datoVariable:datoVariableEgreso} = useDataEgresos()

  const datoTotalE = [...datoFijoEgreso,...datoVariableEgreso]
 

  const cssBox2 = {
    width:'100%',
    height:'400px',
    // background:'linear-gradient(180deg,rgba(255, 255, 255, 0.12) 0%,rgba(255, 255, 255, 0) 100%)',
    borderRadius:'8px',
    margin:'8px',
    padding:'23px',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (maxWidth: 880px)':{
        width:'100%',

    }
}
  return (
       <>
<Box sx={ cssBox2 } >
       <h2>Egresos</h2>
<AreaChart width={1300} height={250} data={datoTotalE} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="fechaInicio" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="monto" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

</Box>
</>


  )
}

export default GraficosHome