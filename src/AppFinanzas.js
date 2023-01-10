

import { useContext } from 'react'
import AuthRoutes from './auth/router/AuthRoutes'
import AppMenu from './components/AppMenu'
import BarraSuperior from './components/BarraSuperior'
import { LoginContext } from './context/LoginContext'
import AppRoutes from './router/AppRoutes'




const AppFinanzas = () => { 

const {user} = useContext(LoginContext)

console.log(user.login)

  if(!user.login){
    return(
      <AuthRoutes />
    )
  }
  return (
    <>
      
        <AppMenu />
        <BarraSuperior />
        <AppRoutes />
      
    </>
  )





}

export default AppFinanzas