import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Login, PaginaRegistro}  from '../pages'

 const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<PaginaRegistro />} />
        <Route path='/*' element={<Navigate to="/login" />} />
    </Routes>
  )
}
export default AuthRoutes
// TODAS LAS RUTAS PARA HACER EL LOGIN
