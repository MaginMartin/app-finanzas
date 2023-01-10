import {
    useContext,
    useEffect,
    useState
  } from 'react'
  import HandlerRequest from "../../../helpers/handlerRequest"
  import {
    LoginContext
  } from "../../../context/LoginContext"
  
  
  
  export const useDataUpdateEgresos = (initialForm = {}) => {
    const {
      user
    } = useContext(LoginContext)


    const url = 'http://66.97.36.252:8080/egresos/'
  
    const [formState, setFormState] = useState(initialForm)
  
    const onInputChange = ({target}) => {
      const {name,value} = target
      console.log(name, value)
      setFormState({
        ...formState,
        [name]: value
      })
    }
  
  
  
    const cargarDatoEgresos = async () => {
      // console.log(formState)
      const datosEnviar = await HandlerRequest.putData({...formState},url)
      
      console.log(datosEnviar)
    }
    
    const deleteDatoEgreso = async (idEgreso)=>{
      
      console.log(idEgreso)
      const datosEnviar = await HandlerRequest.deleteDatos(url,idEgreso)
      console.log(datosEnviar)


    }
  
    useEffect(() => {
  
  
    }, [])
  
  
  
  
    return {

      deleteDatoEgreso,
      cargarDatoEgresos,
      onInputChange,
  
  
    }
  
  }