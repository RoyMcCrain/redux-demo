import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList todos={{}} />
      <VisibilityFilters activeFilter={"ALL"} />
    </div>
  );
};

export default App;
