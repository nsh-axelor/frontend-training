import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearList, editTodo, removeTodo } from "./actions/TodoActions";

const ReduxPractice = () => {
  const todoList = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(-1);
  const refTodo = useRef("");

  // const editTodo = (title, id) => {};
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => dispatch(removeTodo(todo.id))}> - </button>
            <button
              onClick={() => {
                setSelectedId(todo.id);
                refTodo.current.value = todo.title;
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter new to-do here"
        ref={(e) => (refTodo.current = e)}
      />
      <button
        onClick={() => {
          dispatch(selectedId === -1
            ? (addTodo(refTodo.current.value))
            : (editTodo(refTodo.current.value, selectedId)));
          setSelectedId(-1);
          refTodo.current.value = "";
        }}
      >
        Add
      </button>
      <button onClick={() => {
        refTodo.current.value=""
        dispatch(clearList())
        }} disabled={todoList.length === 0} >Clear</button>
    </div>
  );
};

export default ReduxPractice;
