import { sendData } from "./handlerVerbs"

const fechaFinal = (tipo) => {
    const date = new Date();
    const ultimoDiaMes = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    if (tipo === 'fijo') {
        return new Date(new Date('01-01-2999').toLocaleString("en-us")).toISOString().slice(0, 19).replace('T', ' ');
    }
    else if (tipo === 'variable') {
        const time = ultimoDiaMes.toLocaleString("en-us")
        return  new Date(time).toISOString().slice(0, 19).replace('T', ' ')
    }
}


class HandlerRequest{
    
    static async getData(url, idUsuario) {

        try{
        const urlFirnal = url + idUsuario
        const resp = await fetch(urlFirnal)
        const data = await resp.json()
        return data
       } catch(err){
           console.log(err)
       }
    }

   static async postData( { monto, titulo, descripcion, tipo, fechaInicio,idUsuario },url,id) {

        
        const objDatos = {
            datosApp:{
            monto: Number(monto),
            titulo,
            descripcion,
            tipo,
            fechaInicio:new Date(fechaInicio).toISOString().slice(0, 19).replace('T', ' '),
            fechaFinal:fechaFinal(tipo),
            idUsuario,
        }}
       
        try{
            console.log(objDatos.datosApp.fechaFinal)
            const response = await sendData(objDatos,url+id,'POST')
            return response
        }catch(err){
            console.log(err)
        }
    }


    static async putData({ monto, titulo, descripcion, tipo, fechaInicio,idIngreso=null,idEgreso=null },url){
        let objDatos;
        if(idIngreso){
             objDatos = {
                datosApp:{
                monto: Number(monto),
                titulo,
                descripcion,
                tipo,
                fechaInicio:new Date(fechaInicio).toISOString().slice(0, 19).replace('T', ' '),
                fechaFinal:fechaFinal(tipo),
                idIngreso
            }}
        }
        if(idEgreso){
             objDatos = {
                datosApp:{
                monto: Number(monto),
                titulo,
                descripcion,
                tipo,
                fechaInicio:new Date(fechaInicio).toISOString().slice(0, 19).replace('T', ' '),
                fechaFinal:fechaFinal(tipo),
                idEgreso
            }}
        }
      
       
        try{
            console.log(objDatos)
            const response = await sendData(objDatos,url,'PUT')
            return response
        }catch(err){
            console.log(err)
        }

            
    }

    static async deleteDatos(url,id) {
        let objDatos;
        if(url.includes('ingresos')){
            objDatos={
                datosApp:{
                    idIngreso:id
                }
            }
        } else{
            objDatos={
                datosApp:{
                    idEgreso:id
                }
            }
        }
      
        try{
            // console.log(objDatos)
            const response = await sendData(objDatos,url,'PUT')
            return response
        }catch(err){
            console.log(err)
        }
    }




    static async getDataUsuario(dato,url) {
        const enviarDatos = {
            "usuario":{
                "email":dato.email,
                "password":dato.password
            }}
        try{
            const resp = await fetch(url,{
            method: 'POST',
            headers: {

                'Content-type': 'application/json',
            },
            body:JSON.stringify(enviarDatos)
        })
        return await resp.json()
       } catch(err){
           console.log(err)
       }
    }

    static async crearUsuario(dato,url) {
        const enviarDatos = {
            "usuario":{
                "nombre":dato.nombre,
                "apellido":dato.apellido,
                "alias":dato.alias,
                "email":dato.email,
                "password":dato.password,
            }}
        console.log( JSON.stringify(enviarDatos))
        try{
            const resp = await fetch(url,{
            method: 'POST',
            headers: {

                'Content-type': 'application/json',
                
            },
            body:JSON.stringify(enviarDatos)
        })
        const data = await resp.json()
        return data
       } catch(err){
           console.log(err)
       }
    }


    



}
export default  HandlerRequest;