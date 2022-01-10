import "./todoCreate.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getInput, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInput,
    };
    setInput("");
    props.onCreateTodo(newTodo);
  };
  const handleInputTodo = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInput} onChange={handleInputTodo} />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoCreate;
