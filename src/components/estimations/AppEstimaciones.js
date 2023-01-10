import "../../css/estimaciones.css"
import * as React from 'react';
import { useEffect } from 'react';
import BarChart from "./barChart"
import PieChart from "./pieChart"
import LineChart from "./lineChart"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from 'date-fns/locale/es';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';

export default function AppEstimaciones() {
    const [fechaIni, setFechaIni] = React.useState(null);
    const [fechaFin, setFechaFin] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false)

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        //reemplazar con llamada a la bd
        let objects = JSON.parse(window.localStorage.getItem(0));
        let datos = [];
        let i = 0;
        while (i < objects.datos.length) {
            datos.push(objects.datos[i]);
            i++;
        }
        console.log(datos)
        setData(datos);
        setLoaded(true)
    }

    return (
        <div className="estimaciones">
            {loaded ? (//cargó
                <div>
                    {data ? ( //hay datos
                        <div>
                            <Grid className="bars" container direction="row" justifyContent="center" alignItems="center">
                                <Grid item>
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <div className="titulo">Ingresos clasificados por categoría</div>
                                        </Grid>
                                        <Grid item>
                                            <BarChart type="ingresos" data={data} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <div className="titulo">Egresos clasificados por categría</div>
                                        </Grid>
                                        <Grid item>
                                            <BarChart type="egresos" data={data} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="pies" container direction="row" justifyContent="center" alignItems="center">
                                <Grid item>
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <div className="titulo">Porcentaje de ingresos clasificados por categoría</div>
                                        </Grid>
                                        <Grid item>
                                            <PieChart type="ingresos" data={data} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <div className="titulo">Porcentaje de egresos clasificados por categoría</div>
                                        </Grid>
                                        <Grid item>
                                            <PieChart type="egresos" data={data} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <div>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item>
                                        <div className="picker">
                                            <LocalizationProvider adapterLocale={esLocale} dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    className="picker"
                                                    label="Fecha Inicial"
                                                    value={fechaIni}
                                                    onChange={(newIni) => {
                                                        setFechaIni(newIni);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    inputFormat='dd/MM/yyyy'
                                                    disablePast
                                                />
                                            </LocalizationProvider>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div className="picker">
                                            <LocalizationProvider adapterLocale={esLocale} dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    className="picker"
                                                    label="Fecha Final"

                                                    value={fechaFin}
                                                    onChange={(newFin) => {
                                                        setFechaFin(newFin);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    inputFormat='dd/MM/yyyy'
                                                    disablePast
                                                />
                                            </LocalizationProvider>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            {data.length > 0 && fechaIni && fechaFin ? (
                                <Grid className="estimations" container direction="column" justifyContent="center" alignItems="center">
                                    <Grid item>
                                        <div className="titulo">Estamaciones basadas en los ingresos y egresos actuales</div>
                                    </Grid>
                                    <Grid item>
                                        <LineChart data={data} fechaIni={fechaIni} fechaFin={fechaFin} />
                                    </Grid>
                                </Grid>
                            )
                                :
                                (
                                    <Grid className="estimations" container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <div className="titulo">Elegí una fecha de inicio y fin para calcular las estimaciones</div>
                                        </Grid>
                                    </Grid>
                                )}
                        </div>)
                        : (//no hay datos
                            <div>No hay datos</div>
                        )}
                </div>
            ) : (//no cargó
                <div>Cargando...</div>
            )}
        </div>
    );
}