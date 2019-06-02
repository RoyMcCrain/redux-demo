import React, { useState, useCallback } from "react";

type AddTodoProps = {
  addTodo?: (input: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ addTodo = () => {} }) => {
  const [input, setInput] = useState("");
  const handleAddTodo = useCallback(() => {
    addTodo(input);
    setInput("");
  }, [input, addTodo]);
  return (
    <div>
      <input onChange={e => setInput(e.currentTarget.value)} value={input} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
