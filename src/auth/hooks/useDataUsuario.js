import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context/LoginContext"
import HandlerRequest from "../../helpers/handlerRequest"


export const useDataUsuario = (initialForm ={}) => {

    const {setUser} = useContext(LoginContext)
    const url = 'http://66.97.36.252:8080'
    
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
        console.log(dataFetch)
          if(dataFetch.idUsuario){
              const data= {
                  
                  id: dataFetch.idUsuario,
                  login:true,
                  nombre: dataFetch.nombre,
                  apellido: dataFetch.apellido,
                }
              
           setUser(data)
          }
    }
    const crearUsuario = async ()=>{
            if(formState.password === formState.password2){
                const dataFetch = await HandlerRequest.crearUsuario(formState,url+'/usuario/newUsuario')
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

