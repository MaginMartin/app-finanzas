import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../../context/LoginContext"
import HandlerRequest from "../../../helpers/handlerRequest"



export const useDataEgresos= (initialForm = {}) => {

  const {user} = useContext(LoginContext)
  const [datoFijo, setDatoFijo] = useState([])
  const [datoVariable, setDatoVariable] = useState([])
  const [visible, setVisible] = useState(false)
  const [submit,setSubmit] = useState(0)
  const url = 'http://66.97.36.252:8080/egresos/'

  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({target}) => {
    const {name,value} = target
    // console.log(name, value)
    setFormState({
      ...formState,
      [name]: value
    })
  }



  const getDatosTotales = async () => {
    const di = await HandlerRequest.getData(url, user.id)
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

  // Distpara un evento para que dispare el fetch
  const onReloadDb = () => {
    setSubmit(x=>x+1)
 
  }


  const cargarDatoEgresos = async () => {
    console.log(formState)
    await HandlerRequest.postData({...formState,idUsuario:user.id},url, user.id)
    
  }

  useEffect(() => {
    getDatosTotales()
  }, [submit])




  return {
    datoFijo,
    datoVariable,
    visible,
    handlerVisible,
    onReloadDb,
    cargarDatoEgresos,
    onInputChange,


  }

}