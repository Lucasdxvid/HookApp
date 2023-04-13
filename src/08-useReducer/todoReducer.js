export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add-Todo": // Si la accion es [TODO] Add-Todo, hacemos...
      return [...initialState, action.payload];
    case "[TODO] Remove-Todo": //Hacemos un caso similar pero para borrar
      return initialState.filter((todo) => todo.id !== action.payload); //El filter nos regresa un nuevo arreglo con los que cumplan la condicion
    case "[TODO] Toggle-Todo": //Hacemos un caso similar pero para cambiar a realizado true o false
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return initialState; // Si no tira un error debe de tirar el initialState (Tambien podemos poner el initialState = [] en nuestro argumento pero ahora no)
  }
};

// Esto iba abajo del primer case: throw new Error("Action.type = ABC no esta implentada"); // Esto debemos como seguridad cuando todavia no implementamos X accion
