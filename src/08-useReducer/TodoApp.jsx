import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del poder",
    done: false,
  },
];

export const TodoApp = () => {
  //Tiene un arreglo desestructurado (estado y el despacho de acciones a disparar)
  //Recibe como argumento 1ro la funcion reducer, 2do el initialState y 3ro el init (se usa para estados pesados, lo que devuelve este init es el nuevo "initialState", es opcional este THIRD)
  //*Aqui nuestro reducer va a ser el todoReducer que creamos en otro archivo que no lo ejecutamos con (), simplemente lo pasamos como referencia a la funcion para que sea el useReducer que lo ejecute cuando tenga que hacerlo
  //*Al state lo renombramos como todos ya que es basicamente lo que son, nuestra lista de tareas pendientes, en el dispatch si tuvieramos mas de un reducer es mejor colocarle de nombre dispatchTodo o dispatchTodoAction
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <h2>
        TodoApp (10) <small>pendientes: 2</small>
      </h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
