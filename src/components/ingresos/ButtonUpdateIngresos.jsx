import { Button,Menu,MenuItem } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { useDataUpdateIngresos } from './hooks/useDataUpdateIngresos'


const ButtonUpdateIngresos = ({mostrarForm,idIngreso,onReloadDb}) => {


  const {deleteDatoIngreso}=useDataUpdateIngresos()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    
    };
    const handleEditar = () => {
      setAnchorEl(null);
      mostrarForm()
    };

    const handleDelete = ()=>{
      setAnchorEl(null);
      deleteDatoIngreso(idIngreso)
      onReloadDb()
    }
  return (
    <>
    <Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
        <MoreVertIcon />
        </Button>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEditar}>Editar entrada</MenuItem>
        <MenuItem onClick={handleDelete}>Borrar entrada</MenuItem>
      </Menu>
      </>
  )
}

export default ButtonUpdateIngresos