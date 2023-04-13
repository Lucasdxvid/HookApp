import { useEffect, useReducer } from "react";
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

//! Como ultimo paso inicializamos el valor almacenado en nuestro LocalStorage con la funcion del reducer init
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []; //El parse lo devuelve a su formato original (no el string)
};

export const TodoApp = () => {
  //Tiene un arreglo desestructurado (estado y el despacho de acciones a disparar)
  //Recibe como argumento 1ro la funcion reducer, 2do el initialState y 3ro el init (se usa para estados pesados, lo que devuelve este init es el nuevo "initialState", es opcional este THIRD)
  //*Aqui nuestro reducer va a ser el todoReducer que creamos en otro archivo que no lo ejecutamos con (), simplemente lo pasamos como referencia a la funcion para que sea el useReducer que lo ejecute cuando tenga que hacerlo
  //*Al state lo renombramos como todos ya que es basicamente lo que son, nuestra lista de tareas pendientes, en el dispatch si tuvieramos mas de un reducer es mejor colocarle de nombre dispatchTodo o dispatchTodoAction
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  //*Aqui vamos a almacenar nuestros objetos TODOS en localStorage (hay que transformarlos a STRINGS)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []); //Recibe 1ro la key "Nombre" 2do lo que se quiere almacenar, con el || le dicimos de que si el todos es nulo o no tiene nada ejecuta el []
    //Hasta ahora si bien se almacenan los datos el problema es que aun asi al recargar se borran ya que el useEffect al desmontarse se vuelve un nuevo arreglo, nosotros tenemos que inicializar nuestro STATE con los TODOS que previamente existian en nuestro localStorage
    //Para eso utilizariamos la tercera funcion de nuestro useReducer, llamada init (funcion que inicializa nuestro reducer)
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add-Todo",
      payload: todo,
    };
    //Esta es la funcion que nos permite mandar nuestra accion
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove-Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle-Todo",
      payload: id,
    });
  };

  return (
    <>
      <h2>
        TodoApp (10) <small>pendientes: 2</small>
      </h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
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
