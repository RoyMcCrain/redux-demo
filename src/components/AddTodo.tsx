import React, { useState, useCallback } from "react";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState("");
  const handleAddTodo = useCallback(() => {
    // TODO
  }, []);
  return (
    <div>
      <input onChange={e => setInput(e.currentTarget.value)} value={input} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
