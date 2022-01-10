import "./TodoList.css";

const TodoList = (props) => {
  const dataProps = props.dataTodos;
  return (
    <ul>
      {dataProps.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
