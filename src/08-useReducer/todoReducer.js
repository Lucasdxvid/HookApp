export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "ABC": // Si la accion es ABC, hacemos...
      throw new Error("Action.type = ABC no esta implentada"); // Esto debemos como seguridad cuando todavia no implementamos X accion

    default:
      return initialState; // Si no tira un error debe de tirar el initialState (Tambien podemos poner el initialState = [] en nuestro argumento pero ahora no)
  }
};
