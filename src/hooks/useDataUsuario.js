import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import HandlerRequest from "../helpers/handlerRequest"


export const useDataUsuario = (initialForm ={}) => {
    const {setUser} = useContext(LoginContext)
    const url = 'https://back-tpo-ddw-six.vercel.app/'
    const [formState, setFormState ] = useState(initialForm)
    

    const onInputChange = ({target})=>{
        const {name, value} = target
        // console.log(value)
        setFormState({
            ...formState,
            [name]:value
        })
    }


    const obtenerUsuario = async ()=>{
    
     
          const dataFetch = await HandlerRequest.getDataUsuario(formState,url+'/usuario/login')

          if(dataFetch[0].idUsuario){
              const data= {
                  
                  id: dataFetch[0].idUsuario,
                  login:true,
                  nombre: dataFetch[0].nombre,
                  apellido: dataFetch[0].apellido,
                }
              
           setUser(data)
          }
    }
    const crearUsuario = async ()=>{
            if(formState.password === formState.password2){
                const dataFetch = await HandlerRequest.crearUsuario(formState,url)
                console.log(dataFetch)
                setUser({
                    login:true,
                    nombre: formState.nombre,
                    apellido: formState.apellido,
                    id:dataFetch.insertId
                })
            }
       

    }
useEffect(() => {

  
 
}, [])


  

    return {
        ...formState,
        formState,
        onInputChange,
        obtenerUsuario,
        crearUsuario

    }
}

