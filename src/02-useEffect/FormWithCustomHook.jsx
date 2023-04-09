import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  //Desestructuramos los valores formState, la funcion que modifica los inputs OnInputChange y los valores extraidos con el spread
  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //En vez de desestructurarlo aqui manualmente mandaremos esos valores mediante un spread en el return del customHook
  // const { username, email, password } = formState; // Aqui desestructuramos los valores para usarlo en los inputs

  return (
    <>
      <h2>Formulario con Custom Hook</h2>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <hr />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
