import React from "react";
import Todo from "../containers/Todo";
import { Todos } from "../types";

type Props = {
  todos: Todos[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos && todos.length
      ? todos.map((todo: any) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default TodoList;
