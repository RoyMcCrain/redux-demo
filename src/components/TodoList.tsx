import React from "react";
import Todo from "../containers/Todo";

type Props = {
  todos: Array<{
    id: number;
    completed: boolean;
    content: string;
  }>;
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
