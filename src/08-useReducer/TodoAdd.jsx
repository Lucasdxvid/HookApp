import { useForm } from "../hooks/useForm";

//! Aqui vamos a utilizar nuestro hook useForm para manejar formularios

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return; // Menor a uno no devuelve nada
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm(); //Esta funcion nos reiniciba los inputs (los valores)
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-light mt-1">
        Agregar
      </button>
    </form>
  );
};
