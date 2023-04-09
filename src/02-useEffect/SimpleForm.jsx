import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Athloner",
    email: "athl12311@gmail.com",
  });

  //Desestructuramos nuestro estado inicial (FormState) para poder utilizarlos
  const { username, email } = formState;

  //Desesctructuramos del event el target
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, //Usamos el spread para desestructurarlo y solo modificar las values que necesitemos username y email
      [name]: value, //Esto serian las propiedades computadas de los objetos con [] se usa y el valor es igual a value (su nuevo valor)
    });
  };

  //El useEffect es una simple funcion que internamente tiene un callback que se ejecuta esa funcion interna cada vez que el useEffect se dispare
  useEffect(() => {
    console.log("useEffect called!");
  }, []);

  //Este es un efecto especializado, es decir que se ejecute cada vez que cambie el formState se dispare
  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);

  //Este es solo para el EMAIL
  useEffect(() => {
    console.log("email changed!");
  }, [email]);

  return (
    <>
      <h2>Formulario Simple</h2>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange} // El evento que dispara el INPUT (caja de texto) va pasar como el primer argumento que recibe la funcion onInputChange
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="generico@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <hr />
      {username === "Athloner" && <Message />}
    </>
  );
};
