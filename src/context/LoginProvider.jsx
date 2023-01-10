import { useState } from "react"
import { LoginContext } from "./LoginContext"


export const LoginProvider = ({children}) => {


    const [user, setUser] = useState({
        id:null,
        nombre:null,
        login:false
})
 
  return (
  <LoginContext.Provider value={{user, setUser}}>
        {children}
  </LoginContext.Provider>
  )
}
