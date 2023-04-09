import { useRef } from "react";

export const FocusScreen = () => {
  // Recibe como parametro la referencia de lo que queremos mantener y que no se re-renderize (objeto, elemento html, boolean, etc.)
  const inputRef = useRef();

  const onTheClick = () => {
    console.log(inputRef); // si hacemos un consologueo veremos que ahora si aseguramos el elemento seleccionado como "current"
    inputRef.current.select(); //Con el current hacemos referencia al valor actual y el select() es el evento
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        //Aqui establecemos la referencia, que si tenemos muchos ref react siempre sabra a cual se refiere
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-light mt-2" onClick={onTheClick}>
        SET FOCUS
      </button>
    </>
  );
};
