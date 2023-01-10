import {Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Link as RouterLink } from 'react-router-dom'

import AuthLayout from '../layout/AuthLayout';
import { useDataUsuario } from '../hooks/useDataUsuario';


export const Login = () => {

  const { onInputChange,email,password,obtenerUsuario} = useDataUsuario({
    email:'',
    password:''
  })
 
  return (
    
<AuthLayout title="Login">
            <form>
            <Grid container >
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField 
                      value={email}
                      name="email"
                      onChange={onInputChange}
                      label="Correo"
                      type="email"
                      placeholder="correo@gmail.com" 
                      fullWidth
                      />

                </Grid>
                <Grid item  xs={12} sx={{mt:2}}>
                    <TextField 
                    value={password}
                      label="Contraseña"
                      type="password"
                      name="password"
                      placeholder="Contraseña" 
                      onChange={onInputChange}

                      fullWidth/>

                </Grid>

                <Grid container spacing={2} sx={{mb:2}}>
                  <Grid item xs={12} sx={{mt:1}}>
                  <Button variant="contained" onClick={obtenerUsuario} sx={{pt:1.5,pb:1.5}} fullWidth>Login</Button>
                  </Grid>
               
                </Grid>

              <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr:1,color:'black'}} >¿Ya tienes Cuenta?</Typography>
                <Link component={RouterLink} sx={{color:'black'}} to="/register">
                    Crear una cuenta
                </Link>
              </Grid>


            </Grid>

            </form>
      </AuthLayout>

  )
}

