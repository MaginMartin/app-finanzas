
import { Box, Button, InputAdornment, MenuItem, TextField } from '@mui/material'
import { useDataUpdateIngresos } from './hooks/useDataUpdateIngresos'
import CloseIcon from '@mui/icons-material/Close';

const FormUpdateIngresos = ({idIngreso,dato,ocultarForm}) => {


    const { onInputChange,monto,titulo,descripcion,tipo,fechaInicio,cargarDatoIngresos} = useDataUpdateIngresos({
        idIngreso:idIngreso,
        monto:dato.monto,
          titulo: dato.titulo ,
        descripcion:dato.descripcion ,
        tipo: dato.tipo,
        fechaInicio: dato.fechaInicio,
        idUsuario:dato.idUsuario
      })
    
      const type = [
        {
        value: 'fijo',
        label: 'Fijo',
        },
        {
        value: 'variable',
        label: 'Variable',
        },
        ];

        const actualTime = new Date(Date.now())

        const form2 ={
            width: '100%',
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            backgroundColor: '#ffffff',
            padding: '12px',
        }
    return (
    <Box sx={form2}>

    <TextField id="monto" label="Monto" type="number" placeholder='100000' 
        value={monto}  name="monto"  onChange={onInputChange}
      startadornment={<InputAdornment position="start">$</InputAdornment>}
      
     
      InputLabelProps={{
              shrink: true,
            }}
      inputProps={{ sx: {borderColor: 'rgb(249 249 249 / 72%)'} }}
      />
  
      <TextField id="titulo" label="Titulo" placeholder="Titulo"  
       value={titulo}  name="titulo"  onChange={onInputChange}
            InputLabelProps={{shrink: true,}} 
            inputProps={{ sx: {borderColor: 'rgb(249 249 249 / 72%)'} }} />
  
  
  
  
  
      <TextField id="descripcion" label="Descripción" placeholder="Descripción"
       value={descripcion}  name="descripcion"  onChange={onInputChange}
         InputLabelProps={{
              shrink: true,
            }} inputProps={{ sx: {borderColor: 'rgb(249 249 249 / 72%)'} }} />
  
  
  
  
      <TextField id="tipo" select label="Tipo de ingreso" defaultValue="fijo" 
        value={tipo}  name="tipo"  onChange={onInputChange}>
        {type.map((option) => (
        <MenuItem key={option.value} value={option.value}>
        {option.label}
        </MenuItem>
        ))}
      </TextField>
  
  
  
  
      <TextField id="date" label="Fecha" type="date" 
        placeholder={actualTime.toLocaleDateString()} 
        value={fechaInicio}  name="fechaInicio"  onChange={onInputChange}  InputLabelProps={{
            shrink: true,
          }} inputProps={{ sx: {borderColor: 'rgb(249 249 249 / 72%)'} }} />
          <Box sx={{ p: 1 }}>
      <Button sx={{ mr: 1 }}  variant="contained" size="medium"   onClick={()=>{cargarDatoIngresos();ocultarForm()}} >Modificar ingreso</Button>
       <Button  color="warning" size="small"  variant="contained"   onClick={ocultarForm} ><CloseIcon /></Button>   
       </Box>
  
  </Box>
  )
}

export default FormUpdateIngresos