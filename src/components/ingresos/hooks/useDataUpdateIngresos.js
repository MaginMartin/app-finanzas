import {
    useContext,
    useEffect,
    useState
  } from 'react'
  import HandlerRequest from "../../../helpers/handlerRequest"

  import {
    LoginContext
  } from "../../../context/LoginContext"
  
  
  
  export const useDataUpdateIngresos = (initialForm = {}) => {
    const {
      user
    } = useContext(LoginContext)


    const url = 'http://66.97.36.252:8080/ingresos/'
    const [submit,setSubmit] = useState(false)
    const [formState, setFormState] = useState(initialForm)
  
    const onInputChange = ({target}) => {
      const {name,value} = target
      console.log(name, value)
      setFormState({
        ...formState,
        [name]: value
      })
    }
  
  
  
    const cargarDatoIngresos = async () => {
      const datosEnviar = await HandlerRequest.putData({...formState},url)
      setSubmit(true)
      console.log(datosEnviar)
    }
    
    const deleteDatoIngreso = async (idIngreso)=>{
      const datosEnviar = await HandlerRequest.deleteDatos(url,idIngreso)
      console.log(datosEnviar)


    }
  
    useEffect(() => {
  
  
    }, [submit])
  
  
  
  
    return {

      deleteDatoIngreso,
      cargarDatoIngresos,
      onInputChange,
  
  
    }
  
  }