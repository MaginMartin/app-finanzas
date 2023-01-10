
import { Box, Button, InputAdornment, MenuItem, TextField } from '@mui/material'


import '../../css/stylesFormIngresos.css'
import { useDataIngresos } from './hooks/useDataIngresos'

const FormIngresos = ({visible,onReloadDb}) => {




  const { onInputChange,monto,titulo,descripcion,tipo,fechaInicio,cargarDatoIngresos} = useDataIngresos({
    monto:'',
	  titulo: '' ,
    descripcion:'' ,
    tipo: 'fijo',
    fechaInicio: '',
    idUsuario:''
  })


const style = ()=>{
if(visible){
return (
{
background: 'linear-gradient(327deg, #23007A 0%, #3cff6b 139%)',
// backgroundColor: '#9659bf',
display: 'flex',
position: 'relative',
flexDirection: 'row',
justifyContent: 'center',
padding: '2em',
borderRadius:'23px',
trasition: '1s ease-in-out',
marginBottom: '23px',
'@media (max-width: 880px)':{
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'


}

}
)
}else{
return (
{
display:'none',
trasition: '.6s ease-in-out'
}
)
}


}

const styleInputs ={
width: 220,
margin:'0 15px',
color:' aliceblue' ,
'@media (max-width: 880px)':{
width: '80%',
marginTop: '23px'
}
}
const styleBtn ={
width: 220,
margin:'0 15px',
backgroundColor:'#3cedc9',
'&:hover':{
backgroundColor:'#2dc5a6'
},
'@media (max-width: 880px)':{
width: '80%',
marginTop: '23px',
padding: '19px'
}
}


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


return (
<Box sx={style}>

  <TextField id="monto" label="Monto" type="number" placeholder='100000' 
      value={monto}  name="monto"  onChange={onInputChange}
    startadornment={<InputAdornment position="start">$</InputAdornment>}
    sx={styleInputs}
   
    InputLabelProps={{
            shrink: true,
          }}
    inputProps={{ sx: {color: '#fff',borderColor: 'rgb(249 249 249 / 72%)'} }}
    />

    <TextField id="titulo" label="Titulo" placeholder="Titulo"  sx={styleInputs}
     value={titulo}  name="titulo"  onChange={onInputChange}
          InputLabelProps={{shrink: true,}} 
          inputProps={{ sx: {color: '#fff',borderColor: 'rgb(249 249 249 / 72%)'} }} />





    <TextField id="descripcion" label="Descripción" placeholder="Descripción"
     value={descripcion}  name="descripcion"  onChange={onInputChange}
      sx={styleInputs} InputLabelProps={{
            shrink: true,
          }} inputProps={{ sx: {color: '#fff',borderColor: 'rgb(249 249 249 / 72%)'} }} />




    <TextField id="tipo" select label="Tipo de ingreso" defaultValue="fijo"  sx={styleInputs}
      value={tipo}  name="tipo"  onChange={onInputChange}
      inputProps={{ sx: {color: '#fff',borderColor: 'rgb(249 249 249 / 72%)'} }}>
      {type.map((option) => (
      <MenuItem key={option.value} value={option.value}>
      {option.label}
      </MenuItem>
      ))}
    </TextField>




    <TextField id="date" label="Fecha" type="date" 
      placeholder={actualTime.toLocaleDateString()} sx={styleInputs}
      value={fechaInicio}  name="fechaInicio"  onChange={onInputChange}  InputLabelProps={{
          shrink: true,
        }} inputProps={{ sx: {color: '#fff',borderColor: 'rgb(249 249 249 / 72%)'} }} />
        
    <Button variant="contained" sx={styleBtn} onClick={()=>{
      cargarDatoIngresos();
      onReloadDb();
      }} >Cargar ingreso</Button>



</Box>

)
}

export default FormIngresos