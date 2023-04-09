import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //La principal diferencia entre useCallback y useMemo es que useCallback devuelve una función memorizada, mientras que useMemo devuelve un valor memorizado.
  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1); //Nuestra funcion solo se va a dibujar una unica vez
  }, []);

  return (
    <>
      <h2>useCallback Hook: {counter}</h2>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
