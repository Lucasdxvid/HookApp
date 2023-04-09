import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null, // null es vacio
  });

  const getFetch = async () => {

    //Este si lo comento funciona pero sirve por si volvemos a hacer la peticion el isLoading vuelva a true por lo que vovera a mostrar la pantalla de carga
    setState({
      ...state,
      isLoading: true, // Aqui cuando volvamos a llamarlo sera true hasta que la api sea llamada correctamente
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data: data, //Podria poner data solo directamente sin el : ya que al tener el mismo nombre es redundante y lo toma por default
      isLoading: false,
      hasError: null,
    });
  };

  //Cuando el useEffect detecta que se monta nuestro componente va a disparar el useFetch que se encarga de traernos los datos de la API
  useEffect(() => {
    getFetch();
  }, [url]); //pasamos como dependencia el url (API), cada vez que URL cambie se vuelve a disparar el useEffect pero si el mismo no hace nada

  // return state; //Si devuelvo el state (valores) estaria trayendo todo, (data, isLoading, hasError)
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
