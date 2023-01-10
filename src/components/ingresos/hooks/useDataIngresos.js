import {
  useContext,
  useEffect,
  useState
} from 'react'
import HandlerRequest from "../../../helpers/handlerRequest";
import {
  LoginContext
} from "../../../context/LoginContext"



export const useDataIngresos = (initialForm = {}) => {
  const {
    user
  } = useContext(LoginContext)
  const [datoFijo, setDatoFijo] = useState([])
  const [datoVariable, setDatoVariable] = useState([])
  const [visible, setVisible] = useState(false)
  const url = 'http://66.97.36.252:8080/ingresos/'
  const [submit,setSubmit] = useState(0)
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

  const getDatoFijo = async (datosIngresos) => {
    // Tomar datos totales
    const datoTotal = await datosIngresos;
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
  const getDatoVariable = async (datosIngresos) => {
    // Tomar datos totales
    const datoTotal = await datosIngresos;
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

  const cargarDatoIngresos = async () => {
    await HandlerRequest.postData({...formState,idUsuario:user.id},url, user.id)
    setSubmit(x=>x+1)
 
  }

  useEffect(() => {
    getDatosTotales()
  }, [submit])




  return {
    datoFijo,
    datoVariable,
    visible,
    onReloadDb,
    handlerVisible,
    cargarDatoIngresos,
    onInputChange,


  }

}