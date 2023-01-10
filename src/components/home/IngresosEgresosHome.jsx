import { Box } from '@mui/material'
import React from 'react'
import { useDataEgresos } from '../egresos/hooks/useDataEgresos'
import { useDataIngresos } from '../ingresos/hooks/useDataIngresos'
import DatoIngresos from '../ingresos/DatoIngresos'

const IngresosEgresosHome = () => {

    const{datoFijo:datoFijoIngreso,datoVariable:datoVariableIngreso,onReloadDb} = useDataIngresos()
    const{datoFijo:datoFijoEgreso,datoVariable:datoVariableEgreso} = useDataEgresos()


    const cssBox1 = {
        display:'flex',
        flexDirection:'row',
        '@media (max-width: 880px)':{
            flexDirection:'column',
        } 
    }
    const cssBox2 = {
        width:'50%',
        height:'400px',
        background:'linear-gradient(180deg,rgba(255, 255, 255, 0.12) 0%,rgba(255, 255, 255, 0) 100%)',
        borderRadius:'8px',
        margin:'8px',
        padding:'23px',
        '@media (max-width: 880px)':{
            width:'100%',

        }
    }
    const estilosIngreosBox = {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between'
      }

    return (
        <Box sx={cssBox1}>

                    <Box sx={cssBox2}>

                    <h2>Ingresos Fijos</h2>
                    <hr/>
                    <Box sx={estilosIngreosBox}>
                        {
                        datoFijoIngreso.map((dato)=>{
                        return <DatoIngresos dato={dato} key={dato.id} onReloadDb={onReloadDb} />
                        })
                        }
                    <br/>
                    <br/>
                    <h2>Ingresos Variables</h2>
                    <hr />
                    {
                    datoVariableIngreso.map((dato)=>{
                      return <DatoIngresos dato={dato} key={dato.id} onReloadDb={onReloadDb} />
                    })
                    }
                    </Box>

             </Box>
             
             <Box sx={cssBox2}>

                    <h2>Egresos Fijos</h2>
                    <hr/>
                    <Box sx={estilosIngreosBox}>
                            {
                            datoFijoEgreso.map((dato)=>{
                            return <DatoIngresos dato={dato} key={dato.id} onReloadDb={onReloadDb}  />
                            })
                            }
                    <br/>
                    <br/>
                    <h2>Egresos Variables</h2>
                    <hr />
                    {
                    datoVariableEgreso.map((dato)=>{
                      return <DatoIngresos dato={dato} key={dato.id} onReloadDb={onReloadDb} />
                    })
                    }
                    </Box>
            
            </Box>


        </Box>
    )
}

export default IngresosEgresosHome