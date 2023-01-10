import * as React from 'react';
import { useEffect } from 'react';
import BarChart from "./barChart"
import PieChart from "./pieChart"
import LineChart from "./lineChart"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';

export default function AppEstimaciones(){
    const [fechaIni, setFechaIni] = React.useState(null);
    const [fechaFin, setFechaFin] = React.useState(null);
    const [data, setData] = React.useState([]);

    useEffect(() => {
        getData();
      }, [])
    
    const getData = () => {
        let objects = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        //recorro el localStorage
        while ( i-- ) {
            objects.push(JSON.parse(window.localStorage.getItem(keys[i])));
        }

    setData(objects);
    }

    return (
        <div className='estimaciones'>
            {data ? (
                <div>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <h2 className='titulo'>Ingresos clasificados por categoría</h2>
                            <BarChart type="ingresos" data={data}/>
                        </Grid>
                        <Grid item>
                            <h2 className='titulo'>Egresos clasificados por categoría</h2>
                            <BarChart type="egresos" data={data}/>
                        </Grid>
                    </Grid>
                    
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <h3 className='titulo'>Porcentaje de ingresos clasificados por categoría</h3>
                            <PieChart type="ingresos" data={data}/>
                        </Grid>
                        <Grid item >
                            <h3 className='titulo'>Porcentaje de egresos clasificados por categoría</h3>
                            <PieChart type="egresos" data={data}/>
                        </Grid>
                    </Grid>              
                </div>) : (
                    <div>Cargando...</div>
                )}
            <div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Fecha para estimación"
                            value={fechaIni}
                            onChange={(newIni) => {
                                setFechaIni(newIni);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Fecha para estimación"
                            value={fechaFin}
                            onChange={(newFin) => {
                                setFechaFin(newFin);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            </div>
            {data.length > 0 && fechaIni && fechaFin ? (
                <div>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <LineChart data={data} fechaIni={fechaIni} fechaFin={fechaFin}/>
                        </Grid>
                    </Grid>
                </div>) 
                : 
                (   
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <div>Estimaciones Futuras</div>
                        </Grid>
                    </Grid>
                )}
        </div>
    );
}

