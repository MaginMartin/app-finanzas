export const sendData = async (datos,url,verb) => {
    // Se llama en la funcion de arriba
     // Fetch que envia datos mediante  post a la bd 
     const config = {
         method: verb,
         headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        }
        try{
        
            const res= await fetch(url, config)
            const data = await res.json()
            console.log(data)
     } catch(err){
        console.log(err)
     }
 }