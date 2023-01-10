import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import HandlerRequest from "../helpers/handlerRequest"



export const useDataEgresos= (initialForm = {}) => {

  const {user} = useContext(LoginContext)
  const [datoFijo, setDatoFijo] = useState([])
  const [datoVariable, setDatoVariable] = useState([])
  const [visible, setVisible] = useState(false)
  const [submit,setSubmit] = useState(false)
  const url = 'https://back-tpo-ddw-six.vercel.app/'

  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({target}) => {
    const {name,value} = target
    console.log(name, value)
    setFormState({
      ...formState,
      [name]: value
    })
  }



  const getDatosTotales = async (url, idUsuario) => {
    const di = await HandlerRequest.getData(url, idUsuario)
    console.log(di)
    getDatoFijo(di)
    getDatoVariable(di)
  }

  const getDatoFijo = async (datosEgresos) => {
    // Tomar datos totales
    const datoTotal = await datosEgresos;
    const dt = await datoTotal.filter((obj) => {
      // Filtrar datos por tipo de ingreso
      if (obj.tipo === 'fijo') {
        return obj

      }
      return false;
    })
    // guardar en datoFijo
    setDatoFijo(dt)
  }

  // Separar datos  varibles por mes actua
  const getDatoVariable = async (datosEgresos) => {
    // Tomar datos totales
    const datoTotal = await datosEgresos;
    const dt = await datoTotal.filter((obj) => {
      // Filtrar datos por tipo de ingreso
      if (obj.tipo === 'variable') {
        return obj
      }
      return false;
    })
    // guardar en datoFijo
    setDatoVariable(dt)

  }

  const handlerVisible = () => {
    setVisible(!visible)
  }



  const cargarDatoEgresos = async () => {
    console.log(formState)
    const datosEnviar = await HandlerRequest.postData({...formState,idUsuario:user.id},url, user.id)
     setSubmit(true)
  }

  useEffect(() => {
    getDatosTotales(url, user.id)
  }, [submit])




  return {
    datoFijo,
    datoVariable,
    visible,
    handlerVisible,
  
    cargarDatoEgresos,
    onInputChange,


  }

}