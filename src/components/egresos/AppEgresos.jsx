import React  from 'react'
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import FormEgresos from './FormEgresos';

import '../../css/menuEgresos.css'
import DatoEgresos from './DatoEgresos';
import { useDataEgresos } from './hooks/useDataEgresos';



const AppEgresos = () => {


  // customHook
  const{datoFijo,datoVariable,visible,handlerVisible,onReloadDb,idUsuario} = useDataEgresos()


  const moneda =(number) => {
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2}).format(number);
    };

  const  datosSuma =  ()=>{
    const  a =  [...datoFijo,...datoVariable]
      const b =  a.length>0 ? a.map(item => item.monto).reduce((prev, curr) => prev + curr) : 0;
     return moneda(b) 
 } 


const estilosIngreosBox = {

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'space-between'
}

const estilosSumaEgresos ={
    backgroundColor: '#dfdfdf',
    padding: '18px 11px',
    color: '#343434',
    borderRadius: '15px',
    margin: '44px 0',
    display: 'flex',
    alignContent: 'space-between' ,
    justifyContent: 'space-between' ,
  }



  return (
      <div className='egresos'>
        <div className='menuEgresos'>
          <IconButton aria-label="AddIcon"  sx={{
            backgroundColor: '#730fb7',    
            width: '50px',
            height: '50px',
            '&:hover': { backgroundColor: '#391f4a' }
            }}
            onClick={handlerVisible}
            >
                 <AddIcon  sx={{color:'white'}}/>
          </IconButton>
        </div>
        <div className='contenidoEgresos'>
            <FormEgresos id={idUsuario} visible={visible} onReloadDb={onReloadDb} />
            <h2>Egresos Fijos</h2>
            <hr />
            <Box sx={estilosIngreosBox}>
                  {
                  datoFijo.map((dato)=>{
                  return <DatoEgresos dato={dato} key={dato.id} onReloadDb={onReloadDb}  />
                  })
                  }
            </Box>
            
            <br /><br />
            <h2>Egresos Variables</h2>
            <hr />
            {
            datoVariable.map((dato)=>{
              return <DatoEgresos dato={dato} key={dato.id} onReloadDb={onReloadDb}  />
            })
            }
            <Box sx={estilosSumaEgresos}>
                    <h2> AR$ {datosSuma()}</h2>
                    <h2>
                  Monto total
                    </h2>
            </Box>
        </div>
      </div>
  );
}

export default AppEgresos;
