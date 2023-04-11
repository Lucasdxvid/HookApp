export const TodoItem = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between bgTodo">
      <span className="align-self-center bgTodo">{todo.description}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};
