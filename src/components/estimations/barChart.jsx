import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function barChart(props) {
    let objs = [];
    let data = props.data
    if(props.type === 'ingresos'){
       data = data.filter(d => d.tipo === 'ingreso')
    }
    else{
        data = data.filter(d => d.tipo === 'egreso')
    }

    data.forEach(element => {
        if (objs.length > 0 && objs.some(o => o.cat === element.cat)) { //existe un objeto con la misma categoría
            objs.find(o => o.cat === element.cat).monto += element.monto; //sumamos los montos
        } else {
            objs.push({
                        cat: element.cat, 
                        monto: element.monto 
                    })
        }
    });
    return(
        <div>
            <BarChart
            width={700}
            height={300}
            data={objs}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="cat" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="monto" fill="#8884d8" />
            </BarChart>
        </div>
    )
}