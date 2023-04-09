import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  //El counter es el valor que retornamos de nuestro customHook pero desestructurado
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
{/* Si dejamos el () vacio se colocara el valor por defecto que seria 1 */}
      <button onClick={() => decrement(2)}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => increment(2)}>+1</button>
    </>
  );
};
