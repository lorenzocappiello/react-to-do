import React from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="form-new-item">
        <span className="add-item">Add an item:</span>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <p className="instructions">Please, press Enter to insert the to-do!</p>
      </form>
    );
  }

export default TodoForm;   
