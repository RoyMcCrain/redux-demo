import React from "react";
import Todo from "../containers/Todo";
import { Todo as TodoType } from "../types";

type Props = {
  todos: TodoType[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.length
      ? todos.map((todo: TodoType) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default TodoList;
