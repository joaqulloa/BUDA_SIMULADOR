import React from 'react';
import styles from '../style';
const DataTable = ({ data }) => {
  return (
    <section className={`${styles.flexCenter} mt-10  bg-[#032647] rounded-3xl p-8`}>
    <table className='min-w-full text-white border-white table-auto'>
      <thead>
        <tr>
          <th className="border text-center">#</th>
          <th className="border">Fecha</th>
          <th className="border">Bitcoin Precio</th>
          <th className="border">Monto Invertido</th>
          <th className="border">Valor de Portafolio</th>
          <th className="border">Cambio $</th>
          <th className="border">Cambio %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border text-center">{index + 1}</td>
            <td className="border text-center">{item.fecha}</td>
            <td className="border text-center">{item.bitcoinPrecio}</td>
            <td className="border text-center">{item.montoInvertido}</td>
            <td className="border text-center ">{item.valorPortafolio}</td>
            <td className={`border text-center ${item.cambioDolares < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {item.cambioDolares}
              </td>
            <td className={`border text-center ${item.cambioPorcentaje < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {item.cambioPorcentaje}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
};

export default DataTable;
