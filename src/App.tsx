import React from "react";
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import VisibilityFilters from "./containers/VisibilityFilters";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
};

export default App;
