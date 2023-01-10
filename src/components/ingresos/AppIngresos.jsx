import React  from 'react'
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import FormIngresos from './FormIngresos';
import '../../css/menuIngresos.css'
import DatoIngresos from './DatoIngresos';
import { useDataIngresos } from './hooks/useDataIngresos';



const AppIngresos = () => {

  // customHook
  const{datoFijo,datoVariable,visible,handlerVisible,onReloadDb} = useDataIngresos()


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

const estilosSumaIngresos ={
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
      <div className='ingresos'>
        <div className='menuIngresos'>
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
        <div className='contenidoIngresos'>
            <FormIngresos  visible={visible} onReloadDb={onReloadDb}  />
            <h2>Ingresos Fijos</h2>
            <hr />
            <Box sx={estilosIngreosBox}>
                  {
                  datoFijo.map((dato)=>{
                  return <DatoIngresos dato={dato} key={dato.id} onReloadDb={onReloadDb} />
                  })
                  }
            </Box>
            
            <br /><br />
            <h2>Ingresos Variables</h2>
            <hr />
            {
            datoVariable.map((dato)=>{
              return <DatoIngresos dato={dato} key={dato.id} onReloadDb={onReloadDb} />
            })
            }
            <Box sx={estilosSumaIngresos}>
                    <h2> AR$ {datosSuma()}</h2>
                    <h2>
                  Monto total
                    </h2>
            </Box>
        </div>
      </div>
  );
}

export default AppIngresos