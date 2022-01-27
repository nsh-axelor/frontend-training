import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoTest, removeTodoTest } from "./actions/TodoActions";

const ReduxPractice = () => {
  const todoList = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => dispatch(removeTodoTest(todo.id))}>
              {" "}
              -{" "}
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter new to-do here"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        onClick={() => {
          setTodo("");
          dispatch(addTodoTest(todo));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ReduxPractice;
