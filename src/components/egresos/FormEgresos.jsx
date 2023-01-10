
import {
  Box,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";
import { useDataEgresos } from './hooks/useDataEgresos'

import "../../css/stylesFormIngresos.css";

const FormEgresos = ({visible,onReloadDb}) => {
  
  const { onInputChange,monto,titulo,descripcion,tipo,fechaInicio,cargarDatoEgresos} = useDataEgresos({
    monto:'',
	  titulo: '' ,
    descripcion:'' ,
    tipo: 'fijo',
    fechaInicio: '',
    idUsuario:''
  })

  const style = () => {
    if (visible) {
      return {
        background: "linear-gradient(327deg, #23007A 0%, #ff0415 139%)",
        // backgroundColor: '#9659bf',
        display: "flex",
        position: "relative",
        flexDirection: "row",
        justifyContent: "center",
        padding: "2em",
        borderRadius: "23px",
        trasition: "1s ease-in-out",
        marginBottom: "23px",
      };
    } else {
      return {
        display: "none",
        trasition: ".6s ease-in-out",
      };
    }
  };

  const type = [
    {
      value: "fijo",
      label: "Fijo",
    },
    {
      value: "variable",
      label: "Variable",
    },
  ];
  const actualTime = new Date(Date.now());

  return (
    <Box sx={style}>
      <TextField
        id="monto"
        label="Monto"
        type="number"
        placeholder="100000"
        value={monto}  name="monto"  onChange={onInputChange}
        //   startAdornment={<InputAdornment position="start">$</InputAdornment>}
        sx={{ width: 220, margin: "0 15px", color: "  aliceblue" }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          sx: { color: "#fff", borderColor: "rgb(249 249 249 / 72%)" },
        }}
      />

      <TextField
        id="titulo"
        label="Titulo"
        placeholder="Titulo"
        value={titulo}  name="titulo"  onChange={onInputChange}
        sx={{ width: 220, margin: "0 15px" }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          sx: { color: "#fff", borderColor: "rgb(249 249 249 / 72%)" },
        }}
      />
      <TextField
        id="descripcion"
        label="Descripción"
        value={descripcion}  name="descripcion"  onChange={onInputChange}
        placeholder="Descripción"
        sx={{ width: 220, margin: "0 15px" }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          sx: { color: "#fff", borderColor: "rgb(249 249 249 / 72%)" },
        }}
      />

      <TextField
        id="tipo"
        select
        label="Tipo de egreso"
        defaultValue="fijo"
        value={tipo}  name="tipo"  onChange={onInputChange}
        sx={{ width: 220, margin: "0 15px" }}
        inputProps={{
          sx: { color: "#fff", borderColor: "rgb(249 249 249 / 72%)" },
        }}
      >
        {type.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="date"
        label="Fecha"
        type="date"
        value={fechaInicio}
        name="fechaInicio"  onChange={onInputChange}
        placeholder={actualTime.toLocaleDateString()}
        sx={{ width: 220, margin: "0 15px" }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          sx: { color: "#fff", borderColor: "rgb(249 249 249 / 72%)" },
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: 220,
          margin: "0 15px",
          backgroundColor: "#ed3c89",
          "&:hover": {
            backgroundColor: "#2dc5a6",
          },
        }}
        onClick={()=>{
          cargarDatoEgresos();
          onReloadDb();
        }}
      >
        Cargar Egreso
      </Button>
    </Box>
  );
};

export default FormEgresos;
