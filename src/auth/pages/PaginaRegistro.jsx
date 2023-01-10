

import {Button, Grid,  TextField  } from '@mui/material'
import { useDataUsuario } from '../hooks/useDataUsuario';

import AuthLayout from '../layout/AuthLayout';

export const PaginaRegistro = () => {

    
  const { onInputChange,nombre,apellido,alias,email,password,password2,crearUsuario} = useDataUsuario({
    nombre:'',
    apellido:'',
    alias:'',
    email:'',
    password:'',
    password2:''
  })

  return (
    
<AuthLayout title="Crear cuenta">
            <form>
            <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField 
                      label="Nombre"
                      value={nombre}
                      name="nombre"
                      type="text"
                      placeholder="Nombre" 
                      fullWidth
                      onChange={onInputChange}
                      />

                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField 
                      label="Apellido"
                      value={apellido}
                      name="apellido"
                      type="text"
                      placeholder="Apellido" 
                      fullWidth
                      onChange={onInputChange}
                      />

                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField 
                      label="Alias"
                      value={alias}
                      name="alias"
                      type="text"
                      placeholder="Alias" 
                      fullWidth
                      onChange={onInputChange}
                      />

                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField 
                      label="Correo"
                      value={email}
                      name="email"
                      type="email"
                      placeholder="correo@gmail.com" 
                      fullWidth
                      onChange={onInputChange}
                      />

                </Grid>
                <Grid item  xs={12} sx={{mt:2}}>
                    <TextField 
                      label="Contraseña"
                      value={password}
                      name="password"
                      type="password"
                      placeholder="Contraseña" 
                      fullWidth
                      onChange={onInputChange}/>

                </Grid>
                <Grid item  xs={12} sx={{mt:2}}>
                    <TextField 
                      label="Repetir Contraseña"
                      value={password2}
                      name="password2"
                      type="password"
                      placeholder="Repetir Contraseña" 
                      fullWidth
                      onChange={onInputChange}/>

                </Grid>

                <Grid container spacing={2} sx={{mb:2}}>
                  <Grid item xs={12} sx={{mt:1}}>
                  <Button variant="contained"  sx={{pt:1.5,pb:1.5}} onClick={crearUsuario}
                 fullWidth>Crear Cuenta</Button>
                  </Grid>
             
                </Grid>

           


            </Grid>

            </form>
      </AuthLayout>

  )
}

