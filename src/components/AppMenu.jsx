import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';  


export default function AppMenu() {


const [auth, setAuth] = React.useState(true);
const [anchorEl, setAnchorEl] = React.useState(null);

const handleChange = (event) => {
setAuth(event.target.checked);
};

const handleMenu = (event) => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};
const style = {
backgroundColor: 'rgb(13, 11, 34)',
borderBottom: '1px solid rgba(92, 92, 92, 0.342)'
};

return (

<AppBar position="static" color="primary" sx={style}>

  <Toolbar>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
      <MenuIcon />
    </IconButton>

    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      App Finanzas
    </Typography>
    {auth && (
    <div>
      <IconButton size="large" onClick={handleMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }} keepMounted transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
    )}
  </Toolbar>
</AppBar>

);
}