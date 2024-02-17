import React from 'react';
import {Resume, DateRangePicker, DataTable} from '../components';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = () => {

//Datos de api buda
const [dataBuda, setDataBuda] = useState([]);

//Datos formulario
const [mes_inicial, setMes_inicial] = useState('2022-01-01');
const [mes_final, setMes_Final] = useState('2024-01-01');
const [monto, setMonto] = useState(100)

//Datos para chart
const [dataFechas, setDataFechas] = useState([]);
const [dataMontos, setDataMontos] = useState([]);
const [dataPortafolio, setDataPortafolio] = useState([]);

//Refresco
const [loading, setLoading] = useState(false);
const [request, setRequest] = useState(false);


useEffect(() => {
  // Define las fechas de inicio y fin como necesites
  const updatedDataFechas = [];
  const updatedDataMontos = [];
  const updatedDataPortafolio = [];
  const mes_inicial_ = mes_inicial.substring(0,7)
  const mes_final_ = mes_final.substring(0,7)
  console.log(mes_inicial_)
  console.log(mes_final_)
  setLoading(true);

  // Realiza la solicitud al server
  axios.get(`http://localhost:3001/consultar-precios?mes_inicial=${mes_inicial_}&mes_final=${mes_final_}`)
    .then(response => {
        // Transforma la respuesta de la API al formato deseado y se mapea segun la cantidad de meses
        const formattedData = response.data.map((item, index) => {
        // Calcula la variación porcentual del precio de Bitcoin
        const bitcoinPriceCurrent = parseFloat(item.valorBitcoin.trades.entries[0][2]);
        const bitcoinPricePrevious = index > 0 ? parseFloat(response.data[index - 1].valorBitcoin.trades.entries[0][2]) : 0;
        const bitcoinPriceChangePercentage = index > 0 ? (bitcoinPriceCurrent - bitcoinPricePrevious) / bitcoinPricePrevious : 0;
        // Calcula monto y valor del portafolio
        const amountInvested = (index + 1) * monto;
        const portfolioValue =  index > 0 ? (1 + bitcoinPriceChangePercentage) * amountInvested : amountInvested;
        const changeInDollars = portfolioValue - amountInvested;

        //Se almacenan datos para el chart
        updatedDataFechas.push(new Date(item.timestamp).toISOString().split('T')[0])
        updatedDataMontos.push((index + 1) * monto)
        updatedDataPortafolio.push(index > 0 ? (1 + bitcoinPriceChangePercentage) * amountInvested : amountInvested)


        //Se retorna datos correspondiente al mes
        return {
          index: index + 1,
          fecha: new Date(item.timestamp).toISOString().split('T')[0],
          bitcoinPrecio: bitcoinPriceCurrent,
          montoInvertido: amountInvested,
          valorPortafolio: portfolioValue.toFixed(2),
          cambioDolares: changeInDollars.toFixed(2),
          cambioPorcentaje: bitcoinPriceChangePercentage.toFixed(2),
        };
      });

      //Se usa useState para actualizar la data para el chart
      setDataFechas(updatedDataFechas);
      setDataPortafolio(updatedDataPortafolio);
      setDataMontos(updatedDataMontos);

      //Se usa useState para actualizar la data para la tabla
      setDataBuda(formattedData);
    })
    .catch(error => {
      console.error('Error al obtener datos del servidor:', error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [request]);



  // DEFINIR GRAFICO
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



  const labels = dataFechas;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Valor portafolio',
        color: 'rgb(250, 250, 250)',
        
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(250, 250, 250)', 
        },
      },
      y: {
        ticks: {
          color: 'rgb(250, 250, 250)',
        },
      },
    },
  };
  
   const dataChart = {
    labels,
    datasets: [
      {
        label: 'Valor de Portafolio',
        data: dataPortafolio,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Monto Invertido',
        data: dataMontos,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const onUpdate = () => {
    // Aquí puedes realizar las acciones necesarias con los valores actualizados
    request == true? setRequest(false) : setRequest(true);
  }


  return (
    <section>
        <Resume mount={monto} invested={dataMontos[dataMontos.length-1]} value={dataPortafolio[dataPortafolio.length-1]}/>
        <div className='flex flex-1 md:flex-row flex-col'>
        <DateRangePicker mount={monto} startDate={mes_inicial} endDate={mes_final} setMount={setMonto} setStartDate={setMes_inicial} setEndDate={setMes_Final} onChange={onUpdate} />
        <div className='flex-1 ml-5'>
          <Line options={options} data={dataChart} />
        </div>
        </div>
        <DataTable data={dataBuda}/>
        {/* Modal de carga */}
        {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#032647] p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <p className="text-lg text-white font-semibold">Cargando...</p>
            <FontAwesomeIcon icon={faSpinner} className="text-blue-500 animate-spin mt-3" />
          </div>
        </div>
      )}
    </section>
  );
};

export default WelcomePage;