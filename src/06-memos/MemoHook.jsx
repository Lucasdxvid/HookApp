import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  useCounter;

  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  //el hook useMemo memoriza el resultado para que cuando react vuelva a ejecutar el componente no re-renderize la funcion nuevamente
  //1ro recibe como argumento una funcion que debe de regresar algo (en nuestro caso heavyStuff que regresa el nro de iteraciones realizadas)
  //2do [] si dejamos la lista de dependencias vacias significa que solo se re-renderizara solo si las dependencias cambian
  // En nuestro caso queremos re-renderizarlo cada vez que el valor de nuestro COUNTER cambie, por lo que lo colocamos como la dependencia [counter]
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h2>
        Counter: <small>{counter}</small>
      </h2>
      <hr />

      {/* Ya no llamamos directamente a la funcion heavyStuff sino que al useMemo (valor memorizado) creado */}
      <h4>{memorizedValue}</h4>

      <button className="btn btn-light" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-light" onClick={() => setShow(!show)}>
        Show/Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
