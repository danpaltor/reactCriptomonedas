import React, { Fragment, useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
   // State de nuestro custom hook
   const [moneda, setMoneda] = useState(stateInicial);

   const SelectMoneda = () => (
      <Fragment>
         <label>{label}</label>
         <select onChange={(e) => setMoneda(e.target.value)} value={moneda}>
            <option value="">- Seleccione -</option>
            {opciones.map((opcion) => (
               <option key={opcion.codigo} value={opcion.codigo}>
                  {opcion.nombre}
               </option>
            ))}
         </select>
      </Fragment>
   );

   // Retornar state, interfaz y fn que modifica el state
   return [moneda, SelectMoneda, setMoneda];
};

export default useMoneda;
