import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button className="button-complete" onClick={() => completeTodo(index)}>Complete</button>
          <button className="button-delete" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }

export default Todo; 