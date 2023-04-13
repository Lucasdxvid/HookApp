import { TodoItem } from "./todoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  // la property es = [] en caso que no tengamos

  return (
    //* Si colocamos OL tendriamos numerados nuestros li pero lo colocamos como UL para aprender a numerarlos por cada iteracion
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
