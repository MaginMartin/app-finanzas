import { useState } from 'react';
import { Box } from '@mui/material'
import ButtonUpdateEgresos from './ButtonUpdateEgresos';
import FormUpdateEgresos from './FormUpdateEgresos';

const DatoEgresos = ({dato,onReloadDb}) => {


  // Muestra for  de update
  const [modificarDato , setModificarDato] = useState(false)


  const mostrarForm = () =>{
    setModificarDato(true)
}
const ocultarForm = () =>{
  setModificarDato(false)
  onReloadDb()
}
const {idEgreso, monto,fechaInicio,titulo } = dato

const moneda =(number) => {
return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2}).format(number);
};
const fecha = (fechaInicio)=>{
  return fechaInicio.slice(0,10);
}
const estilosBox = {

display: 'flex',
position: 'relative',
flexDirection: 'row',
justifyContent: 'space-between',
alignContent: 'center',
padding: '15px 12px',
marginTop:' 9px',
borderBottom: '1px solid #4e4e4e',
color: '#e7e7e7',
}
const estilosBox2 = {

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
  padding: '15px 12px',
  marginTop:' 9px',
  width:'100%',
  // borderBottom: '1px solid #4e4e4e',
  color: '#e7e7e7',
  }
return (
  <>
<Box sx={estilosBox}>
  <Box sx={estilosBox2}>
  <p>AR$ {moneda(monto) }</p>
  <p> {titulo}</p>
  <p> {fecha(fechaInicio)}</p>
  </Box>
    <ButtonUpdateEgresos mostrarForm={mostrarForm} idEgreso={dato.idEgreso} onReloadDb={onReloadDb} />
  </Box>
    {
     modificarDato && <Box>
      <FormUpdateEgresos ocultarForm={ocultarForm} idEgreso={idEgreso} dato={dato} />
    </Box>
}

</>
)
}

export default DatoEgresos
