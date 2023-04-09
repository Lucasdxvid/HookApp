import { useState } from "react";

export const CounterApp = () => {
  //Desestructuracion:
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  //Esto es otra forma de poder desestructurlo luego en nuestro onClick
  const { counter1, counter2, counter3 } = counter;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      {/* Aqui basicamente le decimos que no importa cuantas propiedades tenga nuestro counter (estado) ya que se esparce y sobreescribimos la que le sumamos un nuevo valor (counter1)  */}
      <button
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
