import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
   font-family: "Bebas Neue", cursive;
   color: #fff;
   text-transform: uppercase;
   font-weight: bold;
   font-size: 2.4rem;
   margin-top: 2rem;
   display: block;
`;

const Select = styled.select`
   width: 100%;
   display: block;
   padding: 1rem;
   -webkit-appearance: none;
   border-radius: 10px;
   border: none;
   font-size: 1.2rem;
`;
const useMoneda = (label, stateInicial, opciones) => {
   // State de nuestro custom hook
   const [moneda, setMoneda] = useState(stateInicial);

   const SelectMoneda = () => (
      <Fragment>
         <Label>{label}</Label>
         <Select onChange={(e) => setMoneda(e.target.value)} value={moneda}>
            <option value="">- Seleccione -</option>
            {opciones.map((opcion) => (
               <option key={opcion.codigo} value={opcion.codigo}>
                  {opcion.nombre}
               </option>
            ))}
         </Select>
      </Fragment>
   );

   // Retornar state, interfaz y fn que modifica el state
   return [moneda, SelectMoneda];
};

export default useMoneda;
