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

const useCriptomoneda = (label, stateInicial, opciones) => {
   //console.log(opciones);

   // State de nuestro custom hook
   const [criptomoneda, setCriptomoneda] = useState(stateInicial);

   const SelectCriptomoneda = () => (
      <Fragment>
         <Label>{label}</Label>
         <Select
            onChange={(e) => setCriptomoneda(e.target.value)}
            value={criptomoneda}
         >
            <option value="">- Seleccione -</option>
            {opciones.map((opcion) => (
               <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                  {opcion.CoinInfo.FullName}
               </option>
            ))}
         </Select>
      </Fragment>
   );

   // Retornar state, interfaz y fn que modifica el state
   return [criptomoneda, SelectCriptomoneda];
};

export default useCriptomoneda;
