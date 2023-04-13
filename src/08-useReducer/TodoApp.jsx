import { useTodos } from "../hooks";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <>
      <h2>
        TodoApp {todosCount} <small>pendientes: {pendingTodosCount}</small>
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

//     <h2>
// TodoApp {todos.length}{" "}
// <small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
// </h2>
// <hr />
