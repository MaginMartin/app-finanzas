import React from 'react'
import { NavLink} from 'react-router-dom';
import '../css/menuBS.css';


const MenuBS = () => {

  const menuItem =  ['Home', 'Ingresos','Egresos','Estimaciones', 'Tarjetas']

  const estilosMenu = ({isActive})=>{
    if(isActive){
      return({
          backgroundColor : 'white',
          color : 'rgba(92, 92, 92)',
          padding : '3px 12px',
          borderRadius: '23px'
      })
    } 

  }
  return (
    <div className='menuBS'>
        <ul>
       {
           menuItem.map((item,i)=>{
             
               return <li key={item}> <NavLink  to={'/'+item}  style={estilosMenu}> {item}</NavLink> </li>
           })
       }
        </ul>

    </div>
  )
}

export default MenuBS