import React from "react";
import Todo from "./Todo";

const TodoList: React.FC<{ todos: any }> = ({ todos }) => (
  <ul>
    {todos && todos.length
      ? todos.map((todo: any) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default TodoList;
