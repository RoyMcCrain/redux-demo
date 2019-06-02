import React, { useCallback } from "react";
import { Todos } from "../types";

type Props = {
  todo: Todos;
  toggleTodo?: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, toggleTodo }) => {
  const handleClick = useCallback(() => {
    console.log(toggleTodo);
    if (toggleTodo) {
      toggleTodo(todo.id);
    }
  }, [todo, toggleTodo]);
  return (
    <li onClick={handleClick}>
      {todo.completed ? "OK" : "Bye"} <span>{todo.content}</span>
    </li>
  );
};

export default Todo;
