import React from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  return (
    <div>
      {data.map(({ title }) => (
        <p>
          <strong>{title}</strong>
        </p>
      ))}
    </div>
  );
};

const TodoListComponent = HOC(TodoList, "todos");
export default TodoListComponent;
