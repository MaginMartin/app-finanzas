import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function lineChart(props) {
    let data = props.data
    if(props.type === 'ingresos'){
        data = data.filter(d => d.tipo === 'ingreso')
    }
    else{
        data = data.filter(d => d.tipo === 'egreso')
    }
    //trato los datos filtrando por solo ingresos, solo egresos, o ninguno si type es vacio
    data = prepareData(data, props.fechaIni, props.fechaFin);
    return(
        <div>
            <LineChart width={800} height={400} data={data}>
                <Line type="monotone" dataKey="monto" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

function prepareData(data, ini, fin){
    let acum = 0, newData = [], aux;
    let diario = 0, semanal = 0, quincenal = 0, mensual = 0, semestral = 0, anual = 0;
    let mDays, month, year;

    //calculo diferencia de días entre ambas fechas
    let diff = fin.getTime() - ini.getTime();
    let days = Math.ceil(diff / (1000 * 3600 * 24));
    //calculo los ingresos/egresos dependiendo su frecuencia
    data.forEach(element => {
        switch(element.frec){
            case 'diario':
                if(element.tipo === 'ingreso'){
                    diario += element.monto;
                }else{
                    diario -= element.monto;
                }
                break;
            case 'semanal':
                if(element.tipo === 'ingreso'){
                    semanal += element.monto;
                }else{
                    semanal -= element.monto;
                }
                break;
            case 'quincenal':
                if(element.tipo === 'ingreso'){
                    quincenal += element.monto;
                }else{
                    quincenal -= element.monto;
                }
                break;
            case 'mensual':
                if(element.tipo === 'ingreso'){
                    mensual += element.monto;
                }else{
                    mensual -= element.monto;
                }
                break;
            case 'semestral':
                if(element.tipo === 'ingreso'){
                    semestral += element.monto;
                }else{
                    semestral -= element.monto;
                }
                break;
            case 'anual':
                if(element.tipo === 'ingreso'){
                    anual += element.monto;
                }else{
                    anual -= element.monto;
                }
                break;
            default:
        }
    });
    /*ya que usamos meses como medida de tiempo, por cada mes sumamos/restamos el ingreso/egreso diario, semanal, quincenal, mensual, 
    semestral y anual, y lo agregamos al acumulado*/
    for(let i = 0; i <= days; i++){
        aux = new Date(ini.getTime())
        aux = new Date(aux.setDate(aux.getDate()+i));
        //calculo la cantidad de días del mes
        month = aux.getMonth() + 1;
        year = aux.getFullYear();
        mDays = new Date(year, month, 0).getDate();

        //sumo/resto los valores que correspondan
        acum += diario
        if(i % 7 === 0){
            acum += semanal
        }
        if(i % 15 === 0){
            acum += quincenal
        }
        if(i % mDays === 0){
            acum += mensual
        }
        if(i % 182 === 0){
            acum += semestral
        }
        if(i % 365 === 0){
            acum += anual
        }
        //definimos cada uno de los nuevos datos como un objeto que tenga la fecha mes y año y el acumulado hasta ese momento 
        if(aux.getDate() === mDays || i === days){
            newData.push({
                fecha: (aux.getMonth()+1).toString() + '/' +aux.getFullYear().toString(), 
                monto: acum
        })};
    }
    return newData;
}