import React from 'react';
import { PieChart, Pie, Tooltip } from "recharts";

export default function pieChart(props) {
    let objs = [];
    let data = props.data, total = 0;
    if(props.type === 'ingresos'){
        data = data.filter(d => d.tipo === 'ingreso')
    }
    else{
        data = data.filter(d => d.tipo === 'egreso')
    }
    data.forEach(element => {
        total += element.monto
    })
    data.forEach(element => {
        if (objs.length > 0 && objs.some(o => o.name === element.cat)) { //existe un objeto con la misma categoría
            objs.find(o => o.name === element.cat).monto += element.monto; //sumamos los montos
            //actualizamos el %
            objs.find(o => o.name === element.cat).porc = Math.floor((objs.find(o => o.name === element.cat).monto * 100 / total) * 100 ) / 100 
        } else {
            objs.push({
                        name: element.cat, 
                        monto: element.monto,
                        porc: Math.floor((element.monto * 100 / total) * 100) / 100
                    })
        }
    });
    return (
        <PieChart width={400} height={400}>
          <Pie
            dataKey="porc"
            isAnimationActive={true}
            data={objs}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    );
}