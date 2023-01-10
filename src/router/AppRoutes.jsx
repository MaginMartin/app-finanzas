import React from 'react'
import {  Routes, Route, Navigate } from "react-router-dom";
import AppEgresos from '../components/egresos/AppEgresos';
import AppEstimaciones from '../components/estimations/AppEstimaciones';
import AppHome from '../components/home/AppHome';
import AppIngresos from '../components/ingresos/AppIngresos';
// import AppTarjetas from '../components/tarjetas/AppTarjetas';


const AppRoutes = () => {

  return (

        <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/home" element={<AppHome />} />
            <Route path="/ingresos" element={<AppIngresos />} />
            <Route path="/egresos" element={<AppEgresos />} />
            <Route path="/estimaciones" element={<AppEstimaciones/>} />
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
  
  )
}

export default AppRoutes