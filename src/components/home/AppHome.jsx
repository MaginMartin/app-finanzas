import React from 'react'
import GraficosHome from './GraficosHome'
import IngresosEgresosHome from './IngresosEgresosHome'

const AppHome = () => {

const style = {
  padding: '0 4em',
  '@media (max-width: 880px)':{
    padding: '0 1em',

}
}

  return (
    <div style={style}>
            <GraficosHome />
            <IngresosEgresosHome />

    </div>
  )
}

export default AppHome;
