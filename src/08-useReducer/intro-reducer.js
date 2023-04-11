console.log("Hola mundo");
//Nuestro estado inicial necesita tener todas las tareas que nosotros necesitamos HACER, podemos tener mas un TODO, en este caso solo tenemos uno
const initialState = [
  { id: 1, todo: "Recolectar la piedra del alma", done: false },
];

//Recibe 2 argumentos nuestra simple funcion (nuestro reducer)
//1ro Estado (initialState) 2do Accion (es quien le dice a nuestro reducer como quiero que cambie el estado)
// Dejamos la accion como un objeto vacio inicialmente para evitar el undefined, ya que si nos envian ninguna accion (initialState no envia ninguna) saldra como undefined
const todoReducer = (state = initialState, action = {}) => {
  //* Aqui basicamente creamos una condicional que añadira los datos del "newTodo"
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload]; //! Debe de retornar el estado desestructurado y el type de la accion, con esto EVITAMOS MUTARLO para evitar hacer un push ya que aunque funcione no debemos usarlo mucho en react
  }

  //Siempre tiene que regresar un estado que debe lucir como nuestro initialState (varios elementos, objetos, etc.)
  //Siempre tienen que ser varias cosas ya que por si ejemplo manejaramos un solo booleano seria mejor usar useState porque manejamos cosas individuales
  return state;
};

let todos = todoReducer();

//Si queremos hacer una modificacion a nuestro reducer no hay que mutarlo como con el ejemplo del push
//Tenemos que mandarle una ACCION que le diga como debe de modificarse, asi:
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};
// llamamos a nuestro reducer nuevamente pero mandandole como estado nuestro estado anterior que es el TODOS
//Tambien tenemos que añadir la accion para modificar el mismo
todos = todoReducer(todos);

//Esta accion usalmente podemos mandarla con lo que queramos pero el standard es usar el TYPE que es un simple string para que nosotros sepamos que se disparo esa accion con X nombre
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo, //Se conoce como Payload a la carga que contiene la accion ("Lo que queremos cargar") que no se usa cuando queremos borrar todo
};

// Ultimo estado y la accion (en este caso añadir la info del objeto)
todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });

// Si queremos añadir nuevos elementos / todo a nuestra lista de tarea podriamos hacer esto
//En teoria podriamos hacer eso pero NO DEBEMOS HACER
//! Esto es una MUTACION y no nos va a dibujar nada, es mala practica mutar el estado de esta manera
// todos.push({
//   id: 2,
//   todo: "Recolectar la piedra del poder",
//   done: false,
// });

console.log(todos);
