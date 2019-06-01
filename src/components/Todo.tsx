import React, { useCallback } from "react";

const Todo: React.FC<{ todo: any }> = ({ todo }) => {
  const handleClick = useCallback(() => {}, []);
  return (
    <li onClick={handleClick}>
      {todo && todo.completed ? "OK" : "Bye"} <span>{todo.content}</span>
    </li>
  );
};

export default Todo;
