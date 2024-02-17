import React from 'react';
import styles from '../style';
const DataTable = ({ data }) => {
  return (
    <section className={`${styles.flexCenter} mt-10  bg-[#032647] rounded-3xl p-8 overflow-x-auto`}>
    <table className='text-white border-white w-full'>
      <thead>
        <tr>
          <th className="border xs:text-base text-xs">#</th>
          <th className="border xs:text-base text-xs">Fecha</th>
          <th className="border xs:text-base text-xs">Bitcoin Precio</th>
          <th className="border xs:text-base text-xs">Monto Invertido</th>
          <th className="border xs:text-base text-xs">Valor de Portafolio</th>
          <th className="border xs:text-base text-xs">Cambio $</th>
          <th className="border xs:text-base text-xs">Cambio %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border text-center xs:text-base text-xs">{index + 1}</td>
            <td className="border text-center xs:text-base text-xs">{item.fecha}</td>
            <td className="border text-center xs:text-base text-xs">{item.bitcoinPrecio}</td>
            <td className="border text-center xs:text-base text-xs">{item.montoInvertido}</td>
            <td className="border text-center xs:text-base text-xs">{item.valorPortafolio}</td>
            <td className={`border text-center xs:text-base text-xs ${item.cambioDolares < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {item.cambioDolares}
              </td>
            <td className={`border text-center xs:text-base text-xs ${item.cambioPorcentaje < 0 ? 'text-red-500' : 'text-green-500'}`}>
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
