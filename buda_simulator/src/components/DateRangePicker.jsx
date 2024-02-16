import React, { useState } from 'react';

const DateRangePicker = ({ mount, startDate, endDate, setMount, setStartDate, setEndDate, onChange}) => {

  return (
    <div className='flex flex-col md:w-[30%] w-full bg-[#032647] p-5 rounded-3xl'>
      <label htmlFor="crypto" className='text-white my-2'>Seleccione una criptomoneda:</label>
      <select className='rounded-md p-1' id="crypto" name="crypto" disabled>
        <option>BTC</option>
      </select>
    
      <label htmlFor="mount" className='text-white my-2'>Monto</label>
      <input
        className='rounded-md p-1'
        type="number"
        id="mount"
        value={mount}
        onChange={(e) => setMount(e.target.value)}
      />

      <label htmlFor="frecuencia" className='text-white my-2'>Seleccione una frecuencia:</label>
      <select className='rounded-md p-1' id="frecuencia" name="crypto" disabled>
        <option>Mensual</option>
      </select>

      <label htmlFor="startDate" className='text-white my-2'>Fecha de Inicio:</label>
      <input
        className='rounded-md p-1'
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label htmlFor="endDate" className='text-white my-2'>Fecha de Fin:</label>
      <input
        className='rounded-md p-1'
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button className='border border-sky-700 rounded-xl text-white mt-8 p-2' onClick={onChange}>
        Actualizar
      </button>
    </div>
  );
};

export default DateRangePicker;
