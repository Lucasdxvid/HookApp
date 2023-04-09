import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // Con el parametro initialForm = {} basicamente le damos un objeto inicial permitiendo que sea editable y pueda contener otra estructura ademas del password, name y mail
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //Esta funcion reestablece el valor inicial por eso pasamos como referencia nuestro initialForm
  const onResetForm = () => {
    setFormState(initialForm);
  };

  //Retornar objetos es mas facil despues para expandirlos
  //Nosotros debemos retornar / exponer el valor del formulario (formState) y la funcion para cambiarlo (onInputChange)
  return {
    ...formState, //Aqui desestructuramos los valores evitando tener que hacerlo en nuestro JSX
    formState,
    onInputChange,
    onResetForm,
  };
};
