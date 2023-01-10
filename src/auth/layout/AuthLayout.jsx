import { Grid, Typography } from '@mui/material'


const AuthLayout = ({children,title}) => {
  return (
   <>
   
   <Grid 
      container
      spacing={3}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{minHeight:'100vh',padding:4}} >

        <Grid item 
          className="box-shadow"
          xs={3}
          sx={{backgroundColor:'white', padding: 4,  borderRadius:2, width:{sm:450}}}>

            <Typography variant='h5' sx={{mb:1,color:'black'}}>{title}</Typography>

            {children}
    
    
        </Grid>
    
    </Grid>

   
   </>
  )
}

export default AuthLayout